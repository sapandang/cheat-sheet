# Android Termux app cheatsheet
> https://github.com/termux/termux-app#github

## setting up ssh
```bash

# install openssh server
pkg install openssh

# 2. view current user
whoami

# start server
sshd

# stop server
pkill sshd

# set the user password which you got from `2.` line
passwd u0_a298

# now connect to the termux shell using
ssh -p 8022 u0_a123@192.168.1.54

```
