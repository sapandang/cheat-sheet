---
title: "Postgres snippets"
description: Snippets for the Postgres
tags: postgres
---



# Postgres database

## install postgres
```
# Create the file repository configuration:
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# Import the repository signing key:
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# Update the package lists:
sudo apt-get update
sudo apt-get install postgresql-12


## pg_ctlcluster 12 main start
Warning: the cluster will not be running as a systemd service. Consider using systemctl:
  sudo systemctl start postgresql@12-main
Error: You must run this program as the cluster owner (postgres) or root



```

# Postgres add user

```
sudo -u postgres createuser --interactive
# login into posstgres shell
psql
# change passwod
ALTER USER username WITH PASSWORD 'mypass';
```

# Postgres commands
* switch to postgres user
`sudo -i -u postgres`



## PostGis
```shell
sudo apt install postgis postgresql-12-postgis-3
```
## restore from tar file
```
pg_restore -c -U postgres -d client03 -v "/tmp/client03.tar" -W
```
## restore from psql
```
psql databasename < data_base_dump
```

## Slots in PG

### View slots
```sql
select slot_name, pg_size_pretty(pg_wal_lsn_diff(pg_current_wal_lsn(),restart_lsn)) as replicationSlotLag, active from pg_replication_slots ;
```
### Drop slot
```
select pg_drop_replication_slot('mydb');
```

## truncate table and reset sequence
```
TRUNCATE  TABLE  users RESTART IDENTITY CASCADE;
```

> https://www.postgresql.org/docs/current/sql-truncate.html


## Query JSON
```
select row_to_json(da) from (select * from company)da;
```




# Keywords
https://www.postgresql.org/docs/current/sql-keywords-appendix.html
https://www.postgresql.org/download/linux/debian/
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04
https://enterprise.arcgis.com/en/server/10.3/cloud/amazon/change-default-database-passwords-on-linux.htm
https://www.postgresql.org/docs/8.0/sql-alteruser.html
