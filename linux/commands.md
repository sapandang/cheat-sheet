---
title: "usefull linux commands"
description: usefull linux commands
---

# Linux

## Getting lines from files
```bash
output | sed -n '1p'  #prints the 1st line of output
output | sed -n '1,3p'  #prints the 1st, 2nd and 3rd line of output
```
> Reference: https://stackoverflow.com/questions/2601922/getting-n-th-line-of-text-output

## Install opendjk8
```bash
sudo apt-get install openjdk-8-jre
sudo apt-get install openjdk-8-jdk
```

## Create User
```bash
useradd username  `lowlevel does not create home dir`
passwd username `add the password`
userdel username `delete user`
adduser username `add user with home dir`
```
## Give sudo acccess

```bash
sudo visudo
# Add entry
# User privilege specification
root    ALL=(ALL:ALL) ALL
username    ALL=(ALL:ALL) ALL
```

## Setup nginx

```
sudo apt-get install nginx
```

## Chaning java alternatives
```shell
sudo update-alternatives --config java
sudo update-alternatives --config javac
```
## view running port
```
sudo netstat -tulpn
```
* https://www.cyberciti.biz/faq/what-process-has-open-linux-port/

## find file greater than 50mb
```
find ./ -size +50M
````
