# Generating LetsEncrypt certificate

## clinet
https://gitlab.com/sinclair2/bacme/-/tree/master


## Generate the certificate
* `./bacme mydomain.com`
* now execute the command displayed like echo 'sasas' > .well-known/acme-challenge/sass
* configure the nginx
* generate the file `certgen` in nginx sites-avaliable
* generate the link in sites-enabled
* `ln -s /etc/nginx/sites-available/certgen /etc/nginx/sites-enabled/`
* nginx conf
```
server {
    listen 80;
    server_name mydomian.com; 
    root /home/myuser/;
}
```
* acame challange must be accessible by the URL
* press enter the bacme


## configure nginx with ssl
```
server {    
       listen 80; 
       listen 443;
        ssl on;
        ssl_certificate /home/myuser/ssl_certificates/mydomian.com.crt;
        ssl_certificate_key /home/myuser/ssl_certificates/mydomain.com.key;
	


       server_name mydomain.com;
	

           location / 
               {
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      		proxy_set_header X-Forwarded-Proto $scheme;
      		proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header Host $http_host;
                proxy_pass http://127.0.0.1:8051;
               }
	       
location ^~ /.well-known/acme-challenge/ {
  default_type "text/plain";
  rewrite /.well-known/acme-challenge/(.*) /$1 break;
  root /home/myuser/.well-known/acme-challenge;
}


}
```



