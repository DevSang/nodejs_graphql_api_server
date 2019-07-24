#!/usr/bin/perl

# db_men_dates.pl <user_id>
#
# written by kie
#
# calculate the menstruation dates (start and end) based on the cup data

use strict;
use warnings;
use DBI;
use File::Basename;

# hello
print basename($0)."\n";
unless ($ARGV[0]) {
    print "Must pass user_id as the first argument to calling this program\n";
    exit;
}
# specify user
my $user_id = qq($ARGV[0]);

# Connect to database.
my %config = do '/var/www/dev/api/scripts/blogic/perl/db_config.pl';
my $dsn = "DBI:Pg:dbname=$config{db};host=$config{dbhost};port=$config{dbport};";
my $dbh = DBI->connect($dsn, $config{userid}, $config{password},{AutoCommit => 0, RaiseError => 1})
or die "Could not connect to database! $DBI::errstr";

print "Opened database $config{db} successfully\n";

# we need to calculate the beginning and end of the menstruation cycle.
# we can do this by looking at the start of the cup data when it first begins and when it ends.
# if the data is more than 13 days then we break data into chunks of max. 13 days
#
# logic as follows :
# if user has :
# case : first entry
#    no existing cup_data_proc_table entry then
#    -> find first and last dates for that user from cup_data
# case : existing data
#    existing cup_data_proc_table entry then
#    -> find first and last dates after the most recent men_finish date
#
# in all cases
#     if last date - first date > 13 days
#     -> change last date and add more than one entry
#
# db:
# table: cup_data_proc_mdates
# fields: user_id, men_finish
#
# table: cup_data
# fields: serial_number, date
#
# table: user_cups
# fields: user_id, serial_number
#
#
#
#


# find the last date in the cup data
my $sth = $dbh->prepare(" SELECT MAX(cup_data.date)
		          FROM cup_data, user_cups
		          WHERE
			      cup_data.serial_number = user_cups.serial_number AND
			      user_cups.user_id = $user_id; ");
$sth->execute();
my $latest_cup_data_date = $sth->fetchrow_array( );
if ($latest_cup_data_date) {
    print "menstruation data newest date is $latest_cup_data_date\n";
} else {
    print "No relevant data in table:cup_data\n";
    $sth->finish;
    $dbh->disconnect;
    exit;
}

# this gives the number of existing entries for that user
$sth = $dbh->prepare("  SELECT COUNT(cup_data_proc_mdates.user_id)
		        FROM cup_data_proc_mdates
			WHERE
			      cup_data_proc_mdates.user_id = $user_id; ");
$sth->execute();
my $count = $sth->fetchrow_array( ); # $count is number of entries
print "User $user_id has $count entries in table:cup_data_proc_mdates\n";

# when looking to find the end of the menstruation date let's take into account
# the chance that there may be more than one menstruation period.
# let's assume that a period cannot last more than 12 days
#
# if the start and stop times are more than 12 days apart then
# we add multiple menstruation dates.
#
# another complication is that the menstruation data uploaded previously might be incomplete
# if we have 2 menstruation cycles less than 4 days apart then let us assume it is just one
# menstruation cycle and combine the records into 1
# (i.e. don't create and delete a second record but change the finish date in the first record

my $max_date;
my $latest_proc_mdate;
my $mcount = 0;
do {
    if ($count) {
	# get last finish date in cup_data_proc_mdates
	$sth = $dbh->prepare(" SELECT MAX(cup_data_proc_mdates.men_finish)
			       FROM public.cup_data_proc_mdates
			       WHERE cup_data_proc_mdates.user_id = $user_id; ");
	$sth->execute();
	$latest_proc_mdate = $sth->fetchrow_array( );
	print "Calc. menst-table data latest entry date : $latest_proc_mdate\n";

	#  then find first and last entries after that in cup data
	# cup_data.date > $latest_proc_mdate
	$sth = $dbh->prepare("
			 SELECT
			     MIN(cup_data.date)
			 FROM
			     public.cup_data,
			     public.user_cups,
			     public.cup_data_proc_mdates
			 WHERE
			     cup_data.serial_number = user_cups.serial_number AND
			     user_cups.user_id = $user_id AND
			     cup_data_proc_mdates.user_id = $user_id AND
			     cup_data.date > (timestamp \'$latest_proc_mdate\');
			     ");
#			     cup_data.date > ALL
#			     (
#			         SELECT
#			         DATE(MAX(cup_data_proc_mdates.men_finish))
#			         FROM public.cup_data_proc_mdates
#			         WHERE cup_data_proc_mdates.user_id = $user_id
#			     )

    } else {
	print "No relevant data in menstruation dates table:cup_data_proc_mdates\n";

	# case : first entry
	$sth = $dbh->prepare("
			 SELECT
			     MIN(cup_data.date)
			 FROM
			     public.cup_data,
			     public.user_cups
			 WHERE
			     cup_data.serial_number = user_cups.serial_number AND
			     user_cups.user_id = $user_id;
				 ");
    }
    $sth->execute();
    my $min_date = $sth->fetchrow_array( );

    if ($min_date) {
	print "Next menstruation started $min_date\n";
    } else {
	print "No new menstruations started after $latest_proc_mdate\n";
	$sth->finish;
	$dbh->disconnect;
	exit;
    }


    # we have new menstruation data starting a $min_date, finishing at $latest_cup_data_date,
    # that does not have corresponding menstruation date entries, latest entry of which is $latest_proc_mdate
    #cup_data.date > MAX(cup_data_proc_mdates.men_finish) AND
    if ($count) {
	$sth = $dbh->prepare("
			 SELECT
			     MAX(cup_data.date)
			 FROM
			     public.cup_data,
			     public.user_cups,
			     public.cup_data_proc_mdates
			 WHERE
			     cup_data.serial_number = user_cups.serial_number AND
			     user_cups.user_id = cup_data_proc_mdates.user_id AND
			     cup_data.date <  (timestamp \'$min_date\' + 12 * INTERVAL '1 day') AND
			     cup_data.date >  (timestamp($latest_proc_mdate) AND
			     cup_data_proc_mdates.user_id = $user_id;
			 ");
    } else {
        # case : first entry
	$sth = $dbh->prepare("
			 SELECT
			     MAX(cup_data.date)
			 FROM
			     public.cup_data,
			     public.user_cups
			 WHERE
			     cup_data.serial_number = user_cups.serial_number AND
			     cup_data.date < (timestamp \'$min_date\' + 12 * INTERVAL '1 day') AND
			     user_cups.user_id = $user_id;
			 ");
    }



    $sth->execute();
    $max_date = $sth->fetchrow_array( );
    print "menstruation finished $max_date\n";

    # verify data
    # todo...
    # if data is invalid then identify and store reason for failure

    # insert new row with menstruation dates into cup_data_proc_mdates
    $sth = $dbh->prepare("
		     INSERT INTO
		         public.cup_data_proc_mdates
		         (user_id, men_finish, men_start, data_verified)
		     VALUES (
		         $user_id, timestamp \'$max_date\', timestamp \'$min_date\', false);
			 ");
    $sth->execute();
    $dbh->commit;
    $mcount++;
    $count++;

    #my $interval = spi_exec_query('SELECT "date \'$max_date\' - date \'$min_date\'"');
    print "Count: $mcount\n";
    print "Menstruation started $min_date, finished $max_date\n";

} until ($latest_cup_data_date eq $max_date);

$dbh->disconnect;

exit;
