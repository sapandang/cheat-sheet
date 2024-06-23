---
title: "ssh commands cheatsheet"
description: ssh commands cheatsheet
tags: linux,ssh

---


# SSH commands

### Setting up config file
* create file `touch ~/.ssh/config`
* file content example
```
Host jmeter
    HostName 192.168.1.10
    User ubuntu
    Port 22
    IdentityFile ~/servers/jmeter.pem
```
