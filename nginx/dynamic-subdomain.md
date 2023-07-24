## Dynamic port

  ```
  server {
    listen 80;
    listen [::]:80;
  #  server_name *.codeport.my.in;
        server_name ~^(?<port>.+)\.codeport\.my\.in;

    location / {
      proxy_pass http://localhost:$port/;
      proxy_set_header Host $host;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection upgrade;
      proxy_set_header Accept-Encoding gzip;
    }
}

server {
   # server_name *.codeport.my.in;
      server_name ~^(?<port>.+)\.codeport\.my\.in;

    location / {
      proxy_pass http://localhost:$port/;
      proxy_set_header Host $host;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection upgrade;
      proxy_set_header Accept-Encoding gzip;
    }

    
listen 443 ssl;
  server_name *.codeport.my.in;

ssl_certificate /etc/letsencrypt/live/codeport.my.in/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/codeport.my.in/privkey.pem; # managed by Certbot

	include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

}
```
## Refernce
 > https://codex.so/resolving-subdomains-dynamically-via-nginx

  
