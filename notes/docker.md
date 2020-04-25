docker exec -it mysql bash
mysql -h mysql-u yourmysqlusername -p

## change the host to blank
update mysql.user set host = ' '  where user = 'root';
flush privileges;

https://github.com/docker-library/mysql/issues/527
https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql
