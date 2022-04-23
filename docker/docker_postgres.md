# Docker file for postgres and pgadmin

## docker-compose.yml
```yaml
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
      - /home/sapan/volumes/postgres12:/var/lib/postgresql/data
   pgadmin:
    image: dpage/pgadmin4 
    network_mode: "host"  
    volumes:
     - /home/sapan/volumes/pgadmin4:/var/lib/pgadmin
    environment:
      - PGADMIN_LISTEN_PORT=5444
      - PGADMIN_DEFAULT_EMAIL=a@a.com
      - PGADMIN_DEFAULT_PASSWORD=a

# volumes:
#   pgdata:
#     driver: local
#     driver_opts:
#       o: bind
#       type: none
#       device: 

# postgres earlier was started so sudo docker-compose down is necessary to release the resources
# removed the volume in /var/lib/docker/volumes/
# to point to the desired volume

# docker-compose version 1.29.2, build 5becea4c
# Docker version 20.10.14, build a224086

#pgadmin reuires the mount volume to be 
# sudo chown -R 5050:5050 <host_directory>
# https://www.pgadmin.org/docs/pgadmin4/development/container_deployment.html
```

> starting the containers `sudo docker-compose up` <br>
> service will be accessible in `postgres:5432` and `pgadmin:5444`



