#!/usr/bin/perl

# db_rgb_calculation.pl <user_id> <mdate_row_id>
#
# written by Kie, Aug 2018
#
# this script takes the colour data and processes it to get rgb values
# it takes data based on a menstruation period for a user and writes the data to the table cup_data_colour_calc
# note that table cup_data_colour_calib must be populated with at least one row in order to do the calculation

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
my $debug = 0;
my $verbose = 0;

my $fixed_light = 200; # some fixed arbitrary light value

# Connect to database.
my %config = do '/var/www/dev/api/scripts/blogic/perl/db_config.pl';
my $dsn = "DBI:Pg:dbname=$config{db};host=$config{dbhost};port=$config{dbport};";
my $dbh = DBI->connect($dsn, $config{userid}, $config{password},{AutoCommit => 0, RaiseError => 1})
or die "Could not connect to database! $DBI::errstr";

print "Opened database $config{db} successfully\n";

# find the row ids corresponding to a particular menstruation period
# for first pass :
# take the calibration data colour based on that for remaining rows for that period

# table : cup_data_proc_mdates - requires mdate_row_id -> $start_date, $end_date
# table : cup_data
# table : cup_data_colour_calc
# table : cup_data_colour_calib
#

my $sth = $dbh->prepare("  SELECT men_start, men_finish
		           FROM cup_data_proc_mdates
			   WHERE user_id = $user_id AND mdate_row_id = $mdate_row_id; ");
$sth->execute();
my ($sdate,$fdate) = $sth->fetchrow_array( );
if ($sdate && $fdate) {
    print "-Processing colour between $sdate and $fdate in table:cup_data_proc_mdates\n";
} else {
    print "Error, No such menstrual record in table:cup_data_proc_mdates\n";
    $sth->finish;
    $dbh->disconnect;
    exit;
}

# next get the cup colour data for that period from the cup data table
$sth = $dbh->prepare("  SELECT
		            colour_c,colour_r,colour_g,colour_b,cup_data.row_id
 		        FROM
 		            cup_data,
		            user_cups,
		            cup_data_proc_mdates,
		            cup_data_proc_volume
 		        WHERE
			    date >=  (timestamp \'$sdate\') AND
			    date <=  (timestamp \'$fdate\') AND
		            cup_data_proc_mdates.user_id = user_cups.user_id AND
		            cup_data_proc_volume.in_vitro = FALSE AND
		            cup_data_proc_volume.row_id = cup_data.row_id AND
		            user_cups.user_id = $user_id AND
		            user_cups.serial_number = cup_data.serial_number
		        ORDER BY
		            cup_data.date;
 		     ");
$sth->execute();
my @row_id;
my ($colour_c,$colour_r,$colour_g,$colour_b,$row_id);
my (%colour_c,%colour_r,%colour_g,%colour_b,%row_id);
while (($colour_c,$colour_r,$colour_g,$colour_b,$row_id) = $sth->fetchrow_array( )) {

    ($colour_c{$row_id}, $colour_r{$row_id}, $colour_g{$row_id},  $colour_b{$row_id})
	= ($colour_c, $colour_r, $colour_g, $colour_b);

    push @row_id, $row_id;
    if ($debug) {
	print "DEBUG: $colour_c, $colour_r, $colour_g, $colour_b, $row_id\n";
    }
}

# check if the row already exists in the table:cup_data_colour_calc, if it does then delete it.
foreach $row_id (@row_id) {
 $sth = $dbh->prepare("  SELECT row_id
		      FROM cup_data_colour_calc
		      WHERE row_id = $row_id; ");
 $sth->execute();
 my $exist_row_id = $sth->fetchrow_array( );
 if ($exist_row_id) {
     $sth = $dbh->prepare("  DELETE
			  FROM cup_data_colour_calc
			  WHERE row_id = $exist_row_id; ");
 }
 $sth->execute();
}

# check in which rows the cup shows data ie colour_c is not zero
my @row_id2;
foreach $row_id (@row_id) {
    if ($colour_c{$row_id}) {
	push @row_id2, $row_id;
    }
}

# get colour calibration data
# this could possibly be one for each cup, but for the moment we will just take the first line of data
$sth = $dbh->prepare("  SELECT
		            red,green,blue,c,serial_number
 		        FROM
 		            cup_data_colour_calib
 		     ");
$sth->execute();
my (%calib_red, %calib_blue, %calib_green, %calib_c);
my ($calib_red,$calib_blue,$calib_green,$calib_c,$serial_number) = $sth->fetchrow_array( );
if ($debug) {
    print "DEBUG: calibration data c,r,g,b,row_id: $colour_c, $colour_r, $colour_g, $colour_b, $row_id\n";
}
my $calib_r = 255 * $calib_red/$calib_c;
my $calib_g = 255 * $calib_green/$calib_c;
my $calib_b = 255 * $calib_blue/$calib_c;

#find minimum among these values and remove from all
my $calib_min = $calib_r;
if ($calib_g < $calib_min) {
    $calib_min = $calib_g;
}
if ($calib_b < $calib_min) {
    $calib_min = $calib_b;
}
$calib_r -= $calib_min;
$calib_g -= $calib_min;
$calib_b -= $calib_min;

# next calculate colour...
# take the proportion of each colour rx/cx, gx/cx, bx/cx multiply by 255 to put it into the rgb colour space
# then remove the calibration values (255*rc/cc, 255*gc/cc, 255*bc/cc)
# then normalise by finding the difference and adding 1/3 of some fixed light value to each of the values
#
my (%new_r, %new_g, %new_b);
foreach $row_id (@row_id2) {

    # colour_c seems to be zero sometimes so let's just use total of r,g,b instead
    #my $temp_r = 255 * ($colour_r{$row_id}/$colour_c{$row_id} - $calib_red/$calib_c);
    #my $temp_g = 255 * ($colour_g{$row_id}/$colour_c{$row_id} - $calib_green/$calib_c);
    #my $temp_b = 255 * ($colour_b{$row_id}/$colour_c{$row_id} - $calib_blue/$calib_c);
    my $colour_c = $colour_r + $colour_g + $colour_b;
    my $temp_r = (255 * $colour_r{$row_id}/$colour_c) - $calib_r;
    my $temp_g = (255 * $colour_g{$row_id}/$colour_c) - $calib_g;
    my $temp_b = (255 * $colour_b{$row_id}/$colour_c) - $calib_b;

    my $temp_total = ($fixed_light - ($temp_r + $temp_b + $temp_g))/3;
    $new_r{$row_id} = $temp_r + $temp_total;
    $new_g{$row_id} = $temp_g + $temp_total;
    $new_b{$row_id} = $temp_b + $temp_total;


    if ($debug) {
	print "DEBUG: r:$new_r{$row_id}  g:$new_g{$row_id}  b:$new_b{$row_id} row_id:$row_id\n";
    }
}


# now that we have calculated the rgb calculations, let's write this to the db
if ($verbose) { print "VERBOSE: inserting calculated colour data into db\n"; }
if ($debug) { print "DEBUG"; }
foreach $row_id (@row_id2) {

    $sth = $dbh->prepare(" INSERT INTO
			 cup_data_colour_calc
			 (row_id, red, green, blue)
			 VALUES
			 ($row_id, $new_r{$row_id}, $new_g{$row_id}, $new_b{$row_id})
			 ");
    $sth->execute();
    if ($debug) { print "."; }
}
if ($debug) { print "\n"; }


$sth->finish;
$dbh->commit;
$dbh->disconnect;
exit;