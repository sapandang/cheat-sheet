# Docker file for postgres and pgadmin

## docker-compose.yml
```
version: "3.9"
services:
   db:
    image: postgres:12
    # ports:
    #   - 5432:5432
    network_mode: "host"  
    environment:
      - POSTGRES_PASSWORD=a
    volumes:
      - /home/sapan/volumes/postgres12:/var/lib/postgresql/data/
   pgadmin:
    image: dpage/pgadmin4 
    network_mode: "host"  
    environment:
      - PGADMIN_LISTEN_PORT=5444
      - PGADMIN_DEFAULT_EMAIL=a@a.com
      - PGADMIN_DEFAULT_PASSWORD=a
```

> starting the containers `sudo docker-compose up` <br>
> service will be accessible in `postgres:5432` and `pgadmin:5444`


## Note
some how volume mount does not work
