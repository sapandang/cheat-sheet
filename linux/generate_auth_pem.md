---
title: "linux generate ssh key or pem file"
description: generate SSL key file to by pass password while loggin into the server
---

generate SSL key file to by pass password while loggin into the server

## Generate public key to access the server
* https://www.ssh.com/ssh/copy-id
```shell
$ ssh-keygen
$ ssh-copy-id -i jmeterx.pub sapan.kumar@ip
$ ssh -i jmeterx sapan.kumar@ip
```
> change file permission to 400
> chmod 400 jmeter.pub

## remove autorization key
```shell
$ cd /home/sapan.kumar/.ssh
$ rm authorized_keys
```
## run without passing key
https://stackoverflow.com/questions/17846529/could-not-open-a-connection-to-your-authentication-agent
eval `ssh-agent -s`
ssh-add jemter


## access data
sudo chmod o+rw /var/log/nginx/access.log

## symbolic link
https://www.tecmint.com/create-hard-and-symbolic-links-in-linux/

## soft link
ln -s /var/log/nginx/access.log access.log

## chmod permission
https://www.pluralsight.com/blog/it-ops/linux-file-permissions

## execute command on remote computer
> ssh -t sapan.kumar@ip 'touch a.txt'

## access relative path
https://stackoverflow.com/questions/24112727/relative-paths-based-on-file-location-instead-of-current-working-directory


## average
cat add_process_th_5.csv | grep 'process' | awk 'BEGIN { ORS=" " }; {sum+=$12} END {print "Count: ",NR;print "Avg :",sum/NR}'

## same line output
https://stackoverflow.com/questions/24331687/is-it-possible-to-print-the-awk-output-in-the-same-line/24331902
