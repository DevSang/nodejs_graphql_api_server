#!/usr/bin/perl

# db_user_cup_change.pl <user_id> <mdate_row_id> <serial_number>
# written by kie
# work out when the cup is changed and put the data into the table cup_data_user_remove

use strict;
use warnings;
use DBI;
use File::Basename;

print basename($0)."\n";
unless ($ARGV[2]) {
    print "Need user_id as arg 1, mdate_row_id as arg 2, serial_number as arg 3 when calling this program\n";
    exit;
}
# specify user
my $user_id = qq($ARGV[0]);
my $mdate_row_id = qq($ARGV[1]);
my $serial_number = qq($ARGV[2]);
my $debug = 0;
my $verbose = 1;

# Connect to database.
my %config = do '/var/www/dev/api/scripts/blogic/perl/db_config.pl';
my $dsn = "DBI:Pg:dbname=$config{db};host=$config{dbhost};port=$config{dbport};";
my $dbh = DBI->connect($dsn, $config{userid}, $config{password},{AutoCommit => 0, RaiseError => 1})
or die "Could not connect to database! $DBI::errstr";

print "-Opened database $config{db} successfully\n";

# find the row ids corresponding to a particular menstruation period
# table : cup_data_proc_mdates - requires mdate_row_id -> $start_date, $end_date
# table : cup_data
# table : cup_data_proc_volume
my $sth = $dbh->prepare("  SELECT men_start, men_finish
		           FROM cup_data_proc_mdates
			   WHERE user_id = $user_id AND mdate_row_id = $mdate_row_id; ");
$sth->execute();
my ($sdate,$fdate) = $sth->fetchrow_array( );
if ($sdate && $fdate) {
    if ($verbose) { print "VERBOSE:  -Processing volume between $sdate and $fdate in table:cup_data_proc_mdates\n"; }
} else {
    if ($verbose) { print "VERBOSE: Error, No such menstrual record in table:cup_data_proc_mdates\n"; }
    $sth->finish;
    $dbh->disconnect;
    exit;
}

# will also need to check if there have been any bluetooth synchronisations during this period.
#		     app_synch_time <  (timestamp \'$fdate\')  + interval \'1 hours\'
$sth = $dbh->prepare("SELECT app_synch_time, extract(epoch from app_synch_time)
		     FROM cup_app_sync
		     WHERE serial_number = $serial_number AND
		           app_synch_time >=  (timestamp \'$sdate\') AND
		     app_synch_time <  (timestamp \'$fdate\')
		     ORDER BY app_synch_time; ");
$sth->execute();

my %app_synch_time;
my %time_list;
my ($app_synch_time, $eapp_synch_time);
my $app_synch_count = 0;
while (($app_synch_time,$eapp_synch_time) = $sth->fetchrow_array( )) {
    $time_list{$app_synch_time} = $eapp_synch_time;
    $app_synch_time{$app_synch_time} = $eapp_synch_time;
    $app_synch_count++;
}
$sth->execute();
if ($verbose) { print "VERBOSE: app_synch_count $app_synch_count\n"; }

# first let's find the in_vitro entries where there are no intermediate volume entries we can combine them
#
# then check the consecutive volume entries and check if there is a drop between entries
# if the drop > 20ml and the new volume < 20ml then let's assume cup has been emptied
#
# finally we check if there has been a bluetooth sync, in which case the cup has been emptied
#
# in the user interface we could make cup syncs explicit? but this may be more confusing for the user.
$sth = $dbh->prepare("
		     SELECT cup_data.date, cup_data_proc_volume.row_id, in_vitro, volume_adj, extract(epoch from cup_data.date)
		     FROM
		     cup_data_proc_volume,
		     cup_data
		     WHERE
		     cup_data.date >=  (timestamp \'$sdate\') AND
		     cup_data.date <  (timestamp \'$fdate\') AND
		     cup_data.row_id = cup_data_proc_volume.row_id AND
		     cup_data.serial_number = $serial_number
		     ORDER BY cup_data.date;");
$sth->execute();

my %row_id = ();
my %vol_adj = ();
my %invitro = ();
my @row_id = ();
my ($cup_date, $row_id, $vol_adj, $invitro, $ecup_date);
my $time_diff_total = 0;
my $data_entry_count = 0;
while (($cup_date, $row_id, $invitro, $vol_adj, $ecup_date) = $sth->fetchrow_array( )) {
    $time_list{$cup_date} = $ecup_date;
    $row_id{$cup_date} = $row_id;
    $invitro{$cup_date} = $invitro;
    # not sure if an error will be thrown if there is no volume, in which case then
    # alternatively do 2 queries the first one just where invitro is positive and the second one where invitro is negative.
    if (!$invitro) { $vol_adj{$row_id} = $vol_adj; } # alt. if defined $vol_adj
    #push @row_id, $row_id;
    $data_entry_count++;
    if ($debug) { print "DEBUG: row_id:$row_id vol_adj:$vol_adj invitro:$invitro\n";}
}
if ($verbose) { print "VERBOSE: data_entry_count $data_entry_count\n"; }

my $last_time;
my $last_volume;
my $time_difference = 0; # the first entry will not be listed as a cup change.
my $cup_change_flag = 0;
my %cup_change_time;
my %explain_id;
my $etime_list;
my %remove_time;
foreach my $time_list (sort {$time_list{$a} <=> $time_list{$b}} (keys %time_list)) {

    $etime_list = $time_list{$time_list}; # using epoch time

    if (defined $last_time) {  # else earliest time in list can't compare previous time
	$time_difference = $etime_list - $last_time;
    }
    $last_time = $etime_list;

    # what is the entry type?
    if ($app_synch_time{$time_list}) {     # bluetooth synch?

	# add to %cup_change_time unless previous entry was also a cup_change_time
	if (!$cup_change_flag) {
	    if ($verbose) { print "VERBOSE: bluetooth entry\n"; }
	    $cup_change_flag = 1;
	    $cup_change_time{$time_list} = 1;
	    $explain_id{$time_list} = 1;
	    $last_volume = 0;
	};

    } elsif ($invitro{$time_list}) { # in vitro due to temperature (will already be noted as invitro in cup_volume_adj table)
	# add to %cup_change_time unless previous entry was also a cup_change_time
	if (!$cup_change_flag) {
	    if ($verbose) { print "VERBOSE: in vitro entry\n"; }
	    $cup_change_time{$time_list} = 1;
	    $cup_change_flag = 1;
		$explain_id{$time_list} = 2;
	    if ($time_difference > 1200) { # time difference over 20 minutes
		$cup_change_time{$time_list} = 1;
		$last_volume = 0;
		$cup_change_flag = 1;
	    }
	}

    } elsif ($vol_adj{$time_list}) { # invivo, could just write this as else
	# do not add to %cup_change_time
	if (!$cup_change_flag) {
	    $cup_change_flag = 0;
	    if ($vol_adj < ($last_volume - 6000)) { # 	#volume < 20ml + decreased by more than 20ml since the last reading
		if ($verbose) { print "VERBOSE: volume change entry\n"; }
		$cup_change_flag = 1;

		$cup_change_time{$time_list} = 1; # let's just take the new reading and add a flag to remove 10 minutes
		$remove_time{$time_list} = 1; #10 minutes

		#my $approx_time_list = $etime_list - 600;
		# change epoch time back to normal timestamp format
		#(timestamp (\'$cup_change_time\' + 982384720.12 * INTERVAL '1 second')),
		#$approx_time_list = todo...
		#$cup_change_time{$approx_time_list} = 1; # we approximate the last cup change to be 10 minutes ago
		$explain_id{$time_list} = 3;
	    }
	}
	$last_volume = $vol_adj{$time_list};

    }
}

foreach my $cup_change_time (sort {$time_list{$a} <=> $time_list{$b}} (keys %cup_change_time)) {
    # cup_change_time is now in epoch seconds and we need to change this back to timestamp format.
    # 'epoch' + 982384720.12 * INTERVAL '1 second';
    # (timestamp (\'$cup_change_time\' + 982384720.12 * INTERVAL '1 second')),
    if ($verbose) { print "VERBOSE: inserting record (user_id: $user_id,  serial_number: $serial_number, changetime: $cup_change_time explain_id: $explain_id{$cup_change_time}\n"; }

    if ($remove_time{$cup_change_time}) {
	$sth = $dbh->prepare(" INSERT INTO
			     cup_data_user_remove
			     (user_id, serial_number, change_time, explain_id)
			     VALUES ($user_id, $serial_number,
			     (  (timestamp \'$cup_change_time\') - 10 * INTERVAL '1 minute';  ),
			     $explain_id{$cup_change_time})");
    } else {
	$sth = $dbh->prepare(" INSERT INTO
			     cup_data_user_remove
			     (user_id, serial_number, change_time, explain_id)
			     VALUES ($user_id, $serial_number, (timestamp \'$cup_change_time\'), $explain_id{$cup_change_time})");
    }

    $sth->execute();
}

$sth->finish;
$dbh->commit;
$dbh->disconnect;
exit;