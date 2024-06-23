---
title: "user management command in linux"
description: user management command in linux
tags: linux

---


# User Management



## Add User
```
useradd username  `lowlevel does not create home dir`
passwd username `add the password`
userdel username `delete user`
adduser username `add user with home dir`
```

## Give user sudo access
```
sudo visudo
# Add entry
# User privilege specification
root    ALL=(ALL:ALL) ALL
username    ALL=(ALL:ALL) ALL
```

## give user login access
```
usermod -s /bin/bash www-data
```

## block user from login
```
usermod -s /sbin/nologin <username>
```

## change user id &  group id
```
usermod -u 1000 www-data
groupmod -g 1000 www-data
```

## change user home directory
```bash
RUN usermod -d /app www-data
```


