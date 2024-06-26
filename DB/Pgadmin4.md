---
title: "Pgadmin snippets"
description: Snippets for the pgadmin
tags: pgadmin

---


# Running installed pgadmin4

```shell
 chown sapan: /var/log/pgadmin /var/lib/pgadmin -R
 sapan@sapan-D:/usr/pgadmin4$ /usr/pgadmin4/venv/bin/python3 /usr/pgadmin4/web/pgAdmin4.py
```
# Running pgadmin inside subdir with nginx
```
location /pgadmin4/ {
    include proxy_params;
    proxy_pass http://localhost:5050/;
    proxy_set_header X-Script-Name /pgadmin4;
}

```



# install pgadmin
```
# install curl
# Install the public key for the repository (if not done previously):
curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add

# incase of errors
sudo apt-get install apt-transport-https

# Create the repository configuration file:
sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'

# Install for web mode only: 
sudo apt install pgadmin4-web 

# Configure the webserver, if you installed pgadmin4-web:
sudo /usr/pgadmin4/bin/setup-web.sh

```

