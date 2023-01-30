# Firewall

## Firewall using ufw
by default it is present in ubuntu server

1. Check the status 
```
sudo ufw status
```
2. enable ssh first else you will be locked out
```
sudo ufw allow 22
```
3. now enable the service
```
sudo ufw enable
```
4. enable 443 & 80
```
sudo ufw allow 80
sudo ufw allow 443
```

> https://ubuntu.com/server/docs/security-firewall

## enable docker internal network
```
sudo ufw allow from 172.17.0.1/12 to any port  3306
```
> `172.17.0.1` resolved to `host.docker.internal` => run ifconf inside docker to view ip



