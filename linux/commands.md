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
useradd sapan  `lowlevel does not create home dir`
passwd sapan `add the password`
userdel sapan `delete user`
adduser sapan `add user with home dir`
```
## Give sudo acccess

```bash
sudo visudo
# Add entry
# User privilege specification
root    ALL=(ALL:ALL) ALL
sapan    ALL=(ALL:ALL) ALL
```

## Setup nginx

```
sudo apt-get install nginx
```

# Chaning java alternatives
```shell
sudo update-alternatives --config java
sudo update-alternatives --config javc
```
