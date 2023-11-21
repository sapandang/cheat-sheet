---
title: "setting up dynamic subdomain with nginx"
description: setting up dynamic subdomain with nginx
---

## Dynamic port

```
server {
    listen 80;
    listen [::]:80;
  #  server_name *.codeport.my.in;
        server_name ~^(?<port>.+)\.codeport\.my\.in;

    location / {
      proxy_pass http://127.0.0.1:$port;
		
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      		proxy_set_header X-Forwarded-Proto $scheme;
      		proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header Host $http_host;

    }
}

server {
   # server_name *.codeport.my.in;
      server_name ~^(?<port>.+)\.codeport\.my\.in;

    location / {
      proxy_pass http://127.0.0.1:$port;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      		proxy_set_header X-Forwarded-Proto $scheme;
      		proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header Host $http_host;

    }

    
listen 443 ssl;

ssl_certificate /etc/letsencrypt/live/codeport.my.in/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/codeport.my.in/privkey.pem; # managed by Certbot

	include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

}

```
## Refernce
 > https://codex.so/resolving-subdomains-dynamically-via-nginx

  
