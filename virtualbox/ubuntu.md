---
title: "installing virtualbox in ubuntu"
description: installing virtualbox in ubuntu
---


## Installing Guest addon in ubuntu
Before installing the guest addon install.
```
sudo apt-get install -y gcc make perl
sudo apt install linux-headers-$(uname -r) build-essential dkms
sudo /usr/bin/VBoxClient --clipboard
```

> Reference
https://superuser.com/questions/1318231/why-doesnt-clipboard-sharing-work-with-ubuntu-18-04-lts-inside-virtualbox-5-1-2

## virtualbox addon depedency:

sudo apt-get install virtualbox-guest-utils virtualbox-guest-x11 virtualbox-guest-dkms vim vim-gtk emacs git

