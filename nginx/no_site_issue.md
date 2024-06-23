---
title: "nginx do not accept not linked domains"
description: nginx resolve issue when un mapped domain are redirecting to other domain
tags: nginx

---

# issue when un mapped domain goes to existing domain.

* create conf `/etc/nginx/sites-available/noserver`
```lua
server {
    listen 80 default_server;
    listen 443 ssl default_server;
    server_name _;
    ssl_certificate /home/sapan/ssl/nginx-selfsigned.crt;
    ssl_certificate_key /home/sapan/ssl/nginx-selfsigned.key;
    return 444;
}
```
* link the file to enable it
```bash
sudo ln -s /etc/nginx/sites-available/noserver /etc/nginx/sites-enabled/
```

* generate self signed cert & key
```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./nginx-selfsigned.key -out ./nginx-selfsigned.crt
```
