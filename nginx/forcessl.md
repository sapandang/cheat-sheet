---
title: "nginx force ssl"
description: forcing the ssl with the nginx
tags: nginx

---


```
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com; 
    return 301 https://example.com$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name www.example.com; 

ssl on;

ssl_certificate /root/certs/APPNAME/APPNAME_nl.chained.crt;
ssl_certificate_key /root/certs/APPNAME/ssl.key;

ssl_session_timeout 1d;
ssl_session_cache shared:SSL:20m;
ssl_session_tickets off;

ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_prefer_server_ciphers on;

ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK'; 

ssl_stapling on; 
ssl_stapling_verify on;

ssl_trusted_certificate /root/certs/APPNAME/APPNAME_nl.chained.crt;

root   /srv/users/serverpilot/apps/APPNAME/public;

access_log  /srv/users/serverpilot/log/APPNAME/APPNAME_nginx.access.log  main;
error_log  /srv/users/serverpilot/log/APPNAME/APPNAME_nginx.error.log;

proxy_set_header    Host              $host;
proxy_set_header    X-Real-IP         $remote_addr;
proxy_set_header    X-Forwarded-For   $proxy_add_x_forwarded_for;
proxy_set_header    X-Forwarded-SSL on;
proxy_set_header    X-Forwarded-Proto $scheme;

include /etc/nginx-sp/vhosts.d/APPNAMEd/*.nonssl_conf;
include /etc/nginx-sp/vhosts.d/APPNAME.d/*.conf;

return 301 https://example.com$request_uri;
}

server {
listen 443 ssl;
listen [::]:443 ssl;
server_name example.com;

ssl on;

ssl_certificate /root/certs/APPNAME/APPNAME_nl.chained.crt;
ssl_certificate_key /root/certs/APPNAME/ssl.key;

ssl_session_timeout 1d;
ssl_session_cache shared:SSL:20m;
ssl_session_tickets off;

ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_prefer_server_ciphers on;

ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK'; 

ssl_stapling on; 
ssl_stapling_verify on;

ssl_trusted_certificate /root/certs/APPNAME/APPNAME_nl.chained.crt;

root   /srv/users/serverpilot/apps/APPNAME/public;

access_log  /srv/users/serverpilot/log/APPNAME/APPNAME_nginx.access.log  main;
error_log  /srv/users/serverpilot/log/APPNAME/APPNAME_nginx.error.log;

proxy_set_header    Host              $host;
proxy_set_header    X-Real-IP         $remote_addr;
proxy_set_header    X-Forwarded-For   $proxy_add_x_forwarded_for;
proxy_set_header    X-Forwarded-SSL on;
proxy_set_header    X-Forwarded-Proto $scheme;

include /etc/nginx-sp/vhosts.d/APPNAME.d/*.nonssl_conf;
include /etc/nginx-sp/vhosts.d/APPNAME.d/*.conf;
}
```
