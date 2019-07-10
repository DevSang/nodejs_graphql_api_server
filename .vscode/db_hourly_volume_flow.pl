#!/usr/bin/perl

# db_hourly_volume_flow.pl <user_id> <mdate_row_id>
# written by kie
# work out hourly volume flow figures

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

# Connect to database.
my %config = do '/var/www/dev/api/scripts/blogic/perl/db_config.pl';
my $dsn = "DBI:Pg:dbname=$config{db};host=$config{dbhost};port=$config{dbport};";
my $dbh = DBI->connect($dsn, $config{userid}, $config{password},{AutoCommit => 0, RaiseError => 1})
or die "Could not connect to database! $DBI::errstr";

print "-Opened database $config{db} successfully\n";

# find the row ids corresponding to a particular menstruation period
# take the existing volumes and try to smooth things out a bit :
# - volume should start at 0 and only increase between insertions
#
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
    print "-Processing volume between $sdate and $fdate in table:cup_data_proc_mdates\n";
} else {
    print "Error, No such menstrual record in table:cup_data_proc_mdates\n";
    $sth->finish;
    $dbh->disconnect;
    exit;
}


# check if there exist any entries for the volume flow by checking the mdate_row_id and if there are then delete them
$sth = $dbh->prepare(" SELECT cup_data_proc_flow.mdate_row_id
		     FROM cup_data_proc_flow
		     WHERE mdate_row_id = $mdate_row_id; ");
$sth->execute();
my $exist_flow_data = $sth->fetchrow_array( );
if ($exist_flow_data) {
    $sth = $dbh->prepare(" DELETE
			 FROM cup_data_proc_flow
			 WHERE mdate_row_id = $mdate_row_id; ");
}
$sth->execute();

#get the start date and increase by an hour each time until it is >= the finish date
my $count1 = 0;
my $count2 = 1;
my $overlap = 1;
my @row_id;
my %date;
my %vol_increase;
while ($overlap) {
    $sth = $dbh->prepare("
			SELECT (
			    (timestamp \'$sdate\')  + interval \'$count1 hours\',
			    (timestamp \'$sdate\')  + interval \'$count2 hours\')
			OVERLAPS
			    ((timestamp \'$sdate\'),
			     (timestamp \'$fdate\'));");
#			    ((timestamp \'$sdate\')  + interval \'$count1 hours\')) < (timestamp \'$fdate\')
    $sth->execute();
    $overlap = $sth->fetchrow_array( ); # check we are still within the menstruation period

    if ($overlap) {
	if ($debug) { print "DEBUG: count:$count1 sdate:$sdate overlap:$overlap\n";}
	#change volume to volume_adj after we figure out smoothing algorithm  TODO
	$sth = $dbh->prepare("
			     SELECT cup_data_proc_volume.row_id, in_vitro, volume
			     FROM
			     cup_data_proc_volume,
			     cup_data,
			     user_cups,
			     cup_data_proc_mdates
			     WHERE
			     cup_data.date >=  (timestamp \'$sdate\')  + interval \'$count1 hours\' AND
			     cup_data.date <  (timestamp \'$sdate\')  + interval \'$count2 hours\' AND
			     cup_data.row_id = cup_data_proc_volume.row_id AND
			     user_cups.serial_number = cup_data.serial_number AND
			     cup_data_proc_mdates.user_id = user_cups.user_id AND
			     user_cups.user_id = $user_id
			     ORDER BY cup_data.date;");

	# store the minimum and maximum for each in_vivo sequence, and sum them.
	$sth->execute();
	my %row_id = ();
	my %vol_adj = ();
	my %invitro = ();
	my @row_id = ();
	my ($row_id,$vol_adj, $invitro);
	while (($row_id,$invitro,$vol_adj) = $sth->fetchrow_array( )) {
	    $row_id{$row_id} = $row_id;
	    $vol_adj{$row_id} = $vol_adj;
	    $invitro{$row_id} = $invitro;
	    push @row_id, $row_id;

	    #if ($debug) { print "DEBUG: row_id:$row_id vol_adj:$vol_adj invitro:$invitro\n";}
	}


	# there may be several peaks so we need to count each of them
	my $hourly_flow = 0;
	my $sum_hourly_flow;
	my ($start_vol, $end_vol);
	foreach $row_id (@row_id) {
	#foreach $row_id (sort {$a <=> $b} @row_id) {
	#foreach $row_id (sort {$a <=> $b} (keys %row_id))) {

	    #if ($debug) { print "DEBUG: row_id:$row_id vol_adj:$vol_adj{$row_id} invitro:$invitro{$row_id}\n";}
	    if ($debug) { print "DEBUG: row_id:$row_id invitro:$invitro{$row_id}\n";}
		if ($invitro{$row_id}) { # this is when the cup is removed
			$start_vol = 0;
			$end_vol = 0;
			$sum_hourly_flow += $hourly_flow;
			if ($debug) {
				print "DEBUG: row_id:$row_id sum_hourly_flow:$sum_hourly_flow\n";
			}
			$hourly_flow = 0;
		} else {
			if (!$start_vol) {
				$start_vol = $vol_adj{$row_id};
				$end_vol = $vol_adj{$row_id};
			} else {
				$end_vol = $vol_adj{$row_id};
			}
	    }
	    $hourly_flow = $end_vol - $start_vol;
	}
	$sum_hourly_flow += $hourly_flow; # this is the final one, where the cup has yet to be removed
	$vol_increase{$count1} = $sum_hourly_flow;

	#$date{$count1} = $sdate + $count1; # to do change this statement to be $count1 * hour interval
	$date{$count1} = $count1;

	# move on to the next hour
	$count1++;
	$count2++;
    }
}

for (my $count=0; $count < $count1; $count++) {
    # write the user_id, date (start_time) and hourly_flow (volume increase) and mdate_row_id to cup_data_proc_flow
    # (timestamp \'$date{$count}\'),
    $sth = $dbh->prepare(" INSERT INTO
			     cup_data_proc_flow
			     (user_id, hourly_flow, date, mdate_row_id)
			   VALUES
			     ($user_id, $vol_increase{$count}, (timestamp \'$sdate\')  + interval \'$count hours\', $mdate_row_id); ");
    $sth->execute();
}

$sth->finish;
$dbh->commit;
$dbh->disconnect;
exit;
