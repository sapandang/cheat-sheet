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



```

## PostGis
```shell
sudo apt install postgis postgresql-12-postgis-3
```

# Keywords
https://www.postgresql.org/docs/current/sql-keywords-appendix.html
https://www.postgresql.org/download/linux/debian/
