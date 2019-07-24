#!/usr/bin/perl

# db_update_synch_time.pl <user_id>
#
# written by kie
#
# add entry when the user synchs to the database

use strict;
use warnings;
use DBI;
use File::Basename;

print basename($0)." <user_id>\n";
unless ($ARGV[0]) {
    print "Need user_id as arg 1 when calling this program\n";
    exit;
}
# specify user
my $user_id = qq($ARGV[0]);
my $debug = 0;
my $verbose = 0;

# Connect to database.
my %config = do '/var/www/dev/api/scripts/blogic/perl/db_config.pl';
my $dsn = "DBI:Pg:dbname=$config{db};host=$config{dbhost};port=$config{dbport};";
my $dbh = DBI->connect($dsn, $config{userid}, $config{password},{AutoCommit => 0, RaiseError => 1})
or die "Could not connect to database! $DBI::errstr";

print "-Opened database $config{db} successfully\n";

# let's assume that the user_id exists, rather than checking in the users table

### then let's check if the user_id already has an entry in the app_server_sync table
### if it does then we update, if it doesn't then we insert
###    my $sth = $dbh->prepare("  SELECT user_id
###   		           FROM app_server_sync
###   			   WHERE user_id = $user_id; ");
###   $sth->execute();
###   my $result = $sth->fetchrow_array( );
###   if ($result) {
###       # user_id exists, update timestamp
###       $sth = $dbh->prepare(" UPDATE app_server_sync
###   			   SET server_synch_time = localtimestamp(0)
###   		           WHERE user_id = $user_id;")
###   } else {
###       # user_id does not exist, insert timestamp



# add a new entry every time the user synchs so that there is a record
my    $sth = $dbh->prepare(" INSERT INTO app_server_sync
			       (user_id, server_synch_time)
			   VALUES
			       ($user_id, localtimestamp(0));
			 ");
###   }
$sth->execute();
$sth->finish;

$dbh->commit;
print "-Written time synch record table:app_server_sync user_id:$user_id successfully\n";

$dbh->disconnect;
print "-Closed database $config{db} successfully\n";
exit;
