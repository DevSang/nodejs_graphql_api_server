#!/usr/bin/perl

# db_volume_calculation_octave.pl <user_id> <mdate_row_id>
#
# written by kie
#
# calculate the volume based on the cup data, note will need calibration data
# the actual calculation is done using an octave program

use strict;
use warnings;
use DBI;
use File::Basename;

print basename($0)."\n";
unless ($ARGV[1]) {
    print "Need user_id as arg 1, mdate_row_id as arg 2 when calling this program\n";
    exit;
}
# specify user
my $user_id = qq($ARGV[0]);
my $mdate_row_id = qq($ARGV[1]);
my $debug0 = 0;
my $debug = 1;
my $verbose = 1;
my $invitro_temp = 3500; # below this temperature, we think that the cup is in vitro


# Connect to database.
my %config = do '/var/www/dev/api/scripts/blogic/perl/db_config.pl';
my $dsn = "DBI:Pg:dbname=$config{db};host=$config{dbhost};port=$config{dbport};";
my $dbh = DBI->connect($dsn, $config{userid}, $config{password},{AutoCommit => 0, RaiseError => 1})
or die "Could not connect to database! $DBI::errstr";

print "Opened database $config{db} successfully\n";

# find the row ids corresponding to a particular menstruation period
# for first pass :
# take the first row for calibration then work out the volume based on that for remaining rows for that period

# table : cup_data_proc_mdates - requires mdate_row_id -> $start_date, $end_date
# table : cup_data
# table : cup_data_proc_volume
#

my $sth = $dbh->prepare("  SELECT men_start, men_finish
		           FROM cup_data_proc_mdates
			   WHERE user_id = $user_id AND mdate_row_id = $mdate_row_id; ");
$sth->execute();
my ($sdate,$fdate) = $sth->fetchrow_array( );
if ($sdate && $fdate) {
    print "Processing volume between $sdate and $fdate in table:cup_data_proc_mdates\n";
} else {
    print "Error, No such menstrual record in table:cup_data_proc_mdates\n";
    $sth->finish;
    $dbh->disconnect;
    exit;
}

# next get the cup data for that period from the cup data table
$sth = $dbh->prepare("  SELECT
		            ch1,ch2,ch3,ch4,ch5,ch6,ch7,ch8,ch9,ch10,ch11,ch12,ch13,ch14,cup_data.row_id,temperature,x,y,z,calib_flag
 		        FROM
 		            cup_data,
		            user_cups,
		            cup_data_proc_mdates
 		        WHERE
			    date >=  (timestamp \'$sdate\') AND
			    date <=  (timestamp \'$fdate\') AND
		            cup_data_proc_mdates.user_id = user_cups.user_id AND
		            user_cups.user_id = $user_id AND
		            user_cups.serial_number = cup_data.serial_number
		        ORDER BY
		            cup_data.date;
 		     ");
$sth->execute();
my @row_id;
my ($ch1,$ch2,$ch3,$ch4,$ch5,$ch6,$ch7,$ch8,$ch9,$ch10,$ch11,$ch12,$ch13,$ch14,$row_id);
my ($temperature, $x, $y, $z, $calib_flag);
my (%ch1,%ch2,%ch3,%ch4,%ch5,%ch6,%ch7,%ch8,%ch9,%ch10,%ch11,%ch12,%ch13,%ch14,%row_id);
my (%temperature, %x, %y, %z, %calib_flag);
while (($ch1,$ch2,$ch3,$ch4,$ch5,$ch6,$ch7,$ch8,$ch9,$ch10,$ch11,$ch12,$ch13,$ch14,
	$row_id,
	$temperature,$x,$y,$z,$calib_flag)
       = $sth->fetchrow_array( )) {

    ($ch1{$row_id}, $ch2{$row_id}, $ch3{$row_id},  $ch4{$row_id},  $ch5{$row_id},  $ch6{$row_id},  $ch7{$row_id},
     $ch8{$row_id}, $ch9{$row_id}, $ch10{$row_id}, $ch11{$row_id}, $ch12{$row_id}, $ch13{$row_id}, $ch14{$row_id},
     $temperature{$row_id}, $x{$row_id}, $y{$row_id}, $z{$row_id}, $calib_flag{$row_id})
	= ($ch1,$ch2,$ch3,$ch4,$ch5,$ch6,$ch7,$ch8,$ch9,$ch10,$ch11,$ch12,$ch13,$ch14,$temperature,$x,$y,$z,$calib_flag);

    push @row_id, $row_id;
    if ($debug) {
	print "DEBUG: $ch1, $ch2, $ch3, $ch4, $ch5, $ch6, $ch7, $ch8, $ch9, $ch10, $ch11, $ch12, $ch13, $ch14, t:$temperature, x:$x,y:$y,z:$z, calib_flag:$calib_flag, $row_id\n";
    }
}

# check if the row already exists in the table:cup_data_proc_volume, if it does then delete it.
foreach $row_id (@row_id) {
 $sth = $dbh->prepare("  SELECT row_id
		      FROM cup_data_proc_volume
		      WHERE row_id = $row_id; ");
 $sth->execute();
 my $exist_row_id = $sth->fetchrow_array( );
 if ($exist_row_id) {
     $sth = $dbh->prepare("  DELETE
			  FROM cup_data_proc_volume
			  WHERE row_id = $exist_row_id; ");
 }
 $sth->execute();
}

# check in which rows the cup is (probably) in vitro
my %invitro;
foreach $row_id (@row_id) {
    # for the moment our test to see if it is in vitro is if the temperature is below 35
    # (which would be stored as 3500 - cup_data:temperature)
    #
    # ? do we also want to check above a certain temperature ?
    if ($temperature{$row_id} < $invitro_temp) {
	$invitro{$row_id} = 1;
    }
    # is this just calibration data?, if so flag as in vitro
    if ($calib_flag{$row_id}) {
	$invitro{$row_id} = 1;
    }
}



# next calculate volume...
# we will do this in octave
# function [lvl_l, lvl_r, conf_l, conf_r] = octave_cup_serial_data5(cal_data, data_in)

my %volume;

my $invitro_flag;
my (%lvl_17, %lvl_84, %conf_l, %conf_r);
my @calib;
my $pcount = 0;
foreach $row_id (@row_id) {
    # octave_cup_serial_data5(cal_data, data_in);

    $calib_flag = $calib_flag{$row_id};
    $invitro_flag = $invitro{$row_id};
    if (($invitro_flag) && (!$calib_flag)) {
	next;
    } # skip if invitro and not a calibration line

    my @data = ($ch1{$row_id}, $ch2{$row_id}, $ch3{$row_id},  $ch4{$row_id},  $ch5{$row_id},  $ch6{$row_id},  $ch7{$row_id},
		$ch8{$row_id}, $ch9{$row_id}, $ch10{$row_id}, $ch11{$row_id}, $ch12{$row_id}, $ch13{$row_id}, $ch14{$row_id});

    if ($calib_flag) {
	@calib = @data;
	@data = ();
    }


    if ((!$invitro_flag) && (!$calib_flag) && @calib) {
	if ($debug) {
	    print "DEBUG: /var/www/dev/api/scripts/blogic/octave/octave_cup_serial_data5.m\n calib:@calib\n data:@data\n";
        }
        my @row = `/var/www/dev/api/scripts/blogic/octave/octave_cup_serial_data5.m @calib @data`;
	#print "DEBUG: octave error code ($!)\n";
	#($lvl_17{$row_id}, $lvl_84{$row_id}, $conf_l{$row_id}, $conf_r{$row_id}) = `/home/kie/octave/octave_cup_serial_data5.m @calib @data`;
	# system("/usr/bin/octave octave_cup_serial_data5(",@calib,"\n",@data")");
	if ($row[0] =~ m/(\d+)$/) {
	    $lvl_17{$row_id} = $1;
	}
	if ($row[1] =~ m/(\d+)$/) {
	    $lvl_84{$row_id} = $1;
	}
	if ($row[2] =~ m/(\d+)$/) {
	    $conf_l{$row_id} = $1;
	}
	if ($row[3] =~ m/(\d+)$/) {
	    $conf_r{$row_id} = $1;
	}


	# work out level
	#$volume{$row_id} = level_to_volume($lvl_17{$row_id} + $lvl_84{$row_id}) / 2;
	my $volume = level_to_volume($lvl_17{$row_id} + $lvl_84{$row_id}) / 2;
	$volume{$row_id} = $volume * 10; # multiply values by 10 so that we can keep it as an integer in the database
	#$lvl_17{$row_id} = $lvl_17{$row_id} * 10; # multiply the value by 10 so that we can keep it as an integer in the database
	#$lvl_84{$row_id} = $lvl_84{$row_id} * 10; # multiply the value by 10 so that we can keep it as an integer in the database

	if ($debug) {
	    print "DEBUG: row_id:$row_id levelLR:$lvl_17{$row_id}/$lvl_84{$row_id} confidence left/right $conf_l{$row_id}/$conf_r{$row_id} volume:$volume{$row_id}\n";
	    print "DEBUG: counting........".$pcount++."/".scalar @row_id."\n";
	}
    }
}


# now that we have calculated the invitro and calibration entries and consequently done the volume calculations, let's write this to the db
foreach $row_id (@row_id) {

    if ($invitro{$row_id}) {
	if ($verbose) {
	    print "VERBOSE: row_id:$row_id in_vitro:$invitro{$row_id} calib_flag:$calib_flag{$row_id}\n";
	}
	$sth = $dbh->prepare(" INSERT INTO
			           cup_data_proc_volume
			           (row_id, in_vitro)
			       VALUES
			           ($row_id, 'true');
			     ");


    } else {
	if ($verbose) {
	    print "VERBOSE: row_id:$row_id volume:$volume{$row_id}\n";
	}
	# write the volume to cup_data_proc_volume
	if (defined $volume{$row_id}) {
	    $sth = $dbh->prepare(" INSERT INTO
				 cup_data_proc_volume
				 (row_id, volume, in_vitro, volume_l, volume_r, confidence_l, confidence_r)
				 VALUES
				 ($row_id, $volume{$row_id},'false', $lvl_17{$row_id}, $lvl_84{$row_id}, $conf_l{$row_id}, $conf_r{$row_id});
				 ");
	}

    }
    $sth->execute();
}


$sth->finish;
$dbh->commit;
$dbh->disconnect;
exit;

sub level_to_volume {
    # e.g. level_to_volume(3) = 9 (ml)
    my $level = shift;
    return ($level * 3);
}
