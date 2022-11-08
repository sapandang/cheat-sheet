# User Management



## Add User
```
useradd sapan  `lowlevel does not create home dir`
passwd sapan `add the password`
userdel sapan `delete user`
adduser sapan `add user with home dir`
```

## Give user sudo access
```
sudo visudo
# Add entry
# User privilege specification
root    ALL=(ALL:ALL) ALL
sapan    ALL=(ALL:ALL) ALL
```
