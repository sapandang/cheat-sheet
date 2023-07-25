# Certbot ssl generator

## install
```
$ apt-get update
$ sudo apt-get install certbot
$ apt-get install python3-certbot-nginx
```

## Steps
1. create nginx conf file in `/etc/nginx/sites-available`
2. link this to `/etc/nginx/sites-enabled/` using eg `sudo ln -s /etc/nginx/sites-available/track.example.in /etc/nginx/sites-enabled/`
3. enter the content in this file. :serve_name is necessary
```
server {
    listen 80;
    listen [::]:80;
    server_name track.example.in;
}
```
4. run the certbot.  `sudo certbot --nginx -d track.example.in`

## wild card domain
```
sudo certbot --server https://acme-v02.api.letsencrypt.org/directory -d *.codeport.mydomain.in --manual --preferred-challenges dns-01 certonly
```
