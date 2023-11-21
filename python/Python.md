---
title: "installing python in ubuntu"
description: installing python in ubuntu
---


# Installing Python3.8

```
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-get update
sudo apt-get install python3.8
sudo apt-get install python3.8-distutils
```
## Install python3.8 venv
```
 python3.8 -m pip install --user virtualenv
 sudo apt-get install python3.8-venv
 python3.8 -m venv env
```

## python 3.7 venv
```
python3.7 -m venv env
```

# setup python3 binary
```
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 1
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 2

sudo update-alternatives --config python3
```

# install the pip3
```
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py
```

> References
> * https://docs.python-guide.org/starting/install3/linux/
> * https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/


# pip generate requirement.txt
```
pip3 freeze > requirements.txt
```
