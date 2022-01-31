# Automate SSL Gen.
Automate generation of ssl in server.

## Setup the nginx
* create the file
```
server {    
     	 listen 80; 
     	 server_name yourdomainname.com;
        

	location ^~ /.well-known/acme-challenge/ {
	  default_type "text/plain";
	  rewrite /.well-known/acme-challenge/(.*) /$1 break;
	  root /home/sapan/yourdomainname.com/.well-known/acme-challenge;
	}

}
```
> setup your root path
* enable the nginx path
```
sudo ln -s /etc/nginx/sites-available/certgen /etc/nginx/sites-enabled/
```
* reload the nginx `sudo service nginx reload`
## Generate the Cert
```
./bacme -w /home/sapan/yourdomainname.com yourdomainname.com
```
