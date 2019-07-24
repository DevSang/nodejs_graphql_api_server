#!/usr/bin/perl

# db_data_verification_interval.pl <user_id> <mdate_row_id>
#
# written by Kie 2018

# note reject_id to do
# variance of tilt to set
# colour sensor and volume sensors to do, will need more data to work something out here



#
# check values from the data and see if it looks legitimate
#
# to verify that the data coming in seems legitimate, there are a number of checks that we can do.
#
# - check the values of the different fields of the cup data
# ... are the x,y,z fields varying sufficiently to show that it seems like it is actually being worn and not just on a desk
# ... are the r,g,b,c fields giving expected values
# ... what is the sensor pattern
# ... is the battery level going down and less than the last period average if the cup is the same?
# ...more to do
#
# - check that the time since the last menstruation session
# ... is it less than 25 days?
#
# - check that the user id and serial number in the cup data match
#
# - check that the average temperature looks sensible
#
# - could also check the page and number values... not done
#
#
# when a user uploads data
# check the user id
#
# find the data based on an individual menstrual period.
# we get the dates from the cup_data_proc_mdates table
# compare the dates for the new entry with the dates from the last entry.
# we expect approximately 25 days, if it is less than 20 days then flag it.
#
# look at most recent entry for a user
#
# right now we will do this with hand-written rules, similar to an expert system,
# but given sufficient data we could employ a machine learning algorithm such as tensor flow
# and try to get it to do automatic classification.
#
# note faking data could take different forms and double checking things like serial number
# for the user, battery decrease in level, time between periods is probably the most effective
# and straight forward at this point.


use strict;
use warnings;
use DBI;
use File::Basename;
use Statistics::Basic qw(:all nofill);

print basename($0)."\n";
unless ($ARGV[1]) {
    print "Need user_id as arg 1, mdate_row_id as arg 2 when calling this program\n";
    exit;
}
# specify user
my $user_id = qq($ARGV[0]);
my $mdate_row_id = qq($ARGV[1]);
my $debug = 0;
my $verbose = 1;

# Connect to database.
my %config = do '/var/www/dev/api/scripts/blogic/perl/db_config.pl';
my $dsn = "DBI:Pg:dbname=$config{db};host=$config{dbhost};port=$config{dbport};";
my $dbh = DBI->connect($dsn, $config{userid}, $config{password},{AutoCommit => 0, RaiseError => 1})
or die "Could not connect to database! $DBI::errstr";

print "Opened database $config{db} successfully\n";


##################################################################################################################################
# check the time since the last menstruation period.
#
# plus get the previous mdate_row_id, which will be useful for some of the other queries.
##################################################################################################################################
my ($reject_id,@reject_id);
my $day_interval;
my $interval_flag = 0;
$reject_id = 8;
my $sth = $dbh->prepare("  SELECT men_start,men_finish
		           FROM cup_data_proc_mdates
			   WHERE user_id = $user_id AND mdate_row_id = $mdate_row_id; ");
$sth->execute();
my ($sdate,$fdate) = $sth->fetchrow_array( );
if ($sdate) {
    if ($verbose) { print "-Processing volume between $sdate and $fdate in table:cup_data_proc_mdates\n"; }
} else {
    if ($verbose) { print "Error, No such menstrual record in table:cup_data_proc_mdates\n"; }
    $sth->finish;
    $dbh->disconnect;
    exit;
}

# find the last date previous to this in the cup_data_proc_mdates
$sth = $dbh->prepare("
		     SELECT
		         MAX(men_finish), mdate_row_id, men_start
		     FROM
			 cup_data_proc_mdates
		     WHERE
			 cup_data_proc_mdates.user_id = $user_id AND
			 cup_data_proc_mdates.men_finish <=  (timestamp \'$sdate\') ;
		     ");
$sth->execute();
my ($prev_fdate,$pmdate_row_id,$prev_sdate) = $sth->fetchrow_array( );
if ($prev_fdate) {
    if ($verbose) { print "Previous menstruation date finished $prev_fdate\n"; }
    # check the interval
    #
    $day_interval = ($sdate - $prev_fdate)/ (60 * 24);
    if ($verbose) { print "It has been $day_interval days since the last recorded menstrual period.\n"; }
    if (($day_interval > 2) && ($day_interval < 20)) {
	if ($verbose) { print "This is not what we were expecting, the interval seems to short.\n"; }
	$interval_flag = 1;
	push @reject_id, $reject_id;
    }

} else {
    print "No relevant data in table:cup_data_proc_mdates\n";
    #$dbh->disconnect;
    $sth->finish;
}
#
##################################################################################################################################




##################################################################################################################################
# check user_id against serial number of the cup
#
# can't check this since we store the serial number rather than the user id in the cup data table
# so let's simply check that the user has registered at least one cup for the moment and get the serial numbers of the cups
##################################################################################################################################
my $serial_number_flag = 1;
# get the serial numbers for the cups for this user
$sth = $dbh->prepare("  SELECT
		            user_cups.serial_number
 		        FROM
		            user_cups
 		        WHERE
		            user_cups.user_id = $user_id
		        ORDER BY
 		     ");
$sth->execute();
my @serial_number;
my $serial_number;
while ($serial_number = $sth->fetchrow_array( )) {
    if ($debug) { print "Serial number: $serial_number added to list\n"; }
    push @serial_number, $serial_number;
    $serial_number_flag = 0;
}
#
##################################################################################################################################


##################################################################################################################################
# check battery
#
# check that the average value for the battery has decreased since the previous menstruation period
# we must only compare the same cup (i.e. same serial number)
##################################################################################################################################
my $battery_flag = 0;
$reject_id = 7;
my (%battery, %pbattery);
# get the average battery usage for each serial number for this and the last menstruation period
foreach $serial_number (@serial_number) {
    $sth = $dbh->prepare("  SELECT
			    AVG(cup_data.battery)
 		        FROM
		            cup_data
 		        WHERE
			    cup_data.date >=  (timestamp \'$sdate\') AND
			    cup_data.date <=  (timestamp \'$fdate\') AND
		            cup.serial_number = $serial_number;
 		     ");
    $sth->execute();
    my $battery = $sth->fetchrow_array( );
    if ($verbose) { print "for this menstruation avg battery level: $battery for serial_number: $serial_number\n"; }
    $battery{$serial_number} = $battery;
}

# compare with the previous menstruation
foreach $serial_number (@serial_number) {
    $sth = $dbh->prepare("  SELECT
			    AVG(cup_data.battery)
 		        FROM
		            cup_data
 		        WHERE
			    cup_data.date >=  (timestamp \'$prev_sdate\') AND
			    cup_data.date <=  (timestamp \'$prev_fdate\') AND
		            cup.serial_number = $serial_number;
 		     ");
    $sth->execute();
    my $pbattery = $sth->fetchrow_array( );
    if ($verbose) { print "for previous menstruation avg battery level: $pbattery for serial_number: $serial_number\n"; }
    $pbattery{$serial_number} = $pbattery;
}

# compare battery values
foreach $serial_number (@serial_number) {
    if ((defined ($battery{$serial_number})) &&
	(defined ($pbattery{$serial_number})) ) {
	if ($pbattery{$serial_number} <= $battery{$serial_number}) {
	    if ($verbose) { print "battery level has not decreased since the last menstruation period for this cup\n"; }
	    $battery_flag = 1;
	    push @reject_id, $reject_id;

	}
    }
}

#
##################################################################################################################################


##################################################################################################################################
# check body temperature
#
#
##################################################################################################################################
my $temperature_flag = 0;
$reject_id = 2;
my ($temperature, @temperature, %temperature);
# get the average body temperature for this menstruation period
foreach $serial_number (@serial_number) {
    $sth = $dbh->prepare("  SELECT
			    AVG(cup_data.temperature)
 		        FROM
		            cup_data
 		        WHERE
			    cup_data.date >=  (timestamp \'$sdate\') AND
			    cup_data.date <=  (timestamp \'$fdate\') AND
		            cup.serial_number = $serial_number;
 		     ");
    $sth->execute();
    my $temperature = $sth->fetchrow_array( );
    if ($verbose) { print "for this menstruation avg temperature: $temperature for serial_number: $serial_number\n"; }
    $temperature{$serial_number} = $temperature;
    push @temperature, $temperature;
}

foreach $serial_number (@serial_number) {
    if (($temperature{$serial_number} > 3900) || ($temperature{$serial_number} < 3200)) {
	    if ($verbose) { print "basal temperature $temperature{serial_number} looks suspicious.\n"; }
	    $temperature_flag = 1;
	    push @reject_id, $reject_id;

    }
}

#
##################################################################################################################################



##################################################################################################################################
# check the tilt sensor
# let's check if the tilt flag is varying or fixed or if it is mostly around 0
# in the first case if it is not varying then it is not real data
# in the second case if it is just zero on average then we would assume that it is not the normal 15 degree average and suspect
##################################################################################################################################
my $tilt_flag = 0;
my $min_var = 0.1; # minimum variance... change this value when we have real data
my $avg_z_min = -2;
my $avg_z_max = 2;
$reject_id = 6;

my (@tilt_x, @tilt_y, @tilt_z);
my ($var_x, $var_y, $var_z, $avg_z);
# get the average battery usage for each serial number for this and the last menstruation period
foreach $serial_number (@serial_number) {
    $sth = $dbh->prepare("  SELECT
			    cup_data.x, cup_data.y, cup_data.z
 		        FROM
		            cup_data
 		        WHERE
			    cup_data.date >=  (timestamp \'$sdate\') AND
			    cup_data.date <=  (timestamp \'$fdate\') AND
		            cup.serial_number = $serial_number;
 		     ");
    $sth->execute();
    while (my ($x,$y,$z) = $sth->fetchrow_array( )) {
	if ($debug) { print "DEBUG: tilt values $x,$y,$z\n"; }
	push(@tilt_x, $x);
	push(@tilt_y, $y);
	push(@tilt_z, $z);

	# check average value of z

	# check variance of x,y,z
	$var_x = variance(@tilt_x);
	$var_y = variance(@tilt_y);
	$var_z = variance(@tilt_z);
	if ($verbose) { print "tilt variance of x,y,z are $var_x,$var_y,$var_z\n"; }
	if (($var_x < $min_var) || ($var_y < $min_var) || ($var_z < $min_var)) {
	    $tilt_flag = 1;
	    push @reject_id, $reject_id;

	}
	$avg_z = mean(@tilt_z);
	if ($verbose) { print "tilt average z is $avg_z\n"; }
	if (($avg_z > $avg_z_min) && ($avg_z < $avg_z_max)) { # average around 0, very suspicious
	    $tilt_flag = 1;
	    push @reject_id, $reject_id;

	}
    }
}
#
#
#
#
##################################################################################################################################


##################################################################################################################################
# check the volume sensor data
# is the volume changing as we would expect?
# there is not enough data to check this properly yet.
##################################################################################################################################
my $sensor_flag = 0;
$reject_id = 5;

# todo.
#
#
##################################################################################################################################


##################################################################################################################################
# check the color sensor data
# ... are the r,g,b,c fields giving expected values? is there too much ambient light
# there is not enough test data to check this properly yet.
##################################################################################################################################
my $colour_flag = 0;
$reject_id = 4;
# todo.
#
#
##################################################################################################################################



if ($verbose) { print "Overall validity check report\n";
		print "-----------------------------\n";

		# interval
		if (defined $day_interval) {
		    print "M.Interval $day_interval - flag: $interval_flag";
		} else {
		    print "M.Interval n/a - flag: $interval_flag";
		}

		# serial number
		if (@serial_number) {
		    print "Cup serial numbers @serial_number - flag: $serial_number_flag\n";
		} else {
		    print "No cup serial numbers - flag: $serial_number_flag\n";
		}

		# battery
		print "Battery level - flag: $battery_flag\n";

		# temperature
		print "basal temperatures @temperature - flag: $temperature_flag\n";

		# check the tilt sensor
		print "Tilt sensor variance x,y,z are $var_x,$var_y,$var_z, tilt avg $avg_z- flag: $tilt_flag\n";

		# volume sensor data
		print "Volume sensor data, not yet implemented - flag: $sensor_flag\n";

		# colour sensor data
		print "Colour sensor data, not yet implemented - flag: $colour_flag\n";

}


# write valid / invalid data report to the database
# table : cup_data_proc_mdates
# columns : data_rejected (boolean),reject_id (smallint),
# reject_id part todo
if ($interval_flag || $serial_number_flag || $tilt_flag || $sensor_flag || $temperature_flag || $colour_flag) {
$sth = $dbh->prepare("UPDATE
			 cup_data_proc_mdates
		     SET
		     data_rejected = 1,
		     reject_id = $reject_id
		     WHERE
		     mdate_row_id = $mdate_row_id;
		     ");
    $sth->execute();
}

$sth->finish;
$dbh->commit;
$dbh->disconnect;





exit;
