---
title: "python snippet"
description: rough python snippet
---


## Variable scope

### Global Variable
```python
x = None  #--> declared and assign null. No seperate declare and assign in python
listx = ["yoo"] #--> List

def hello():  #--> method
    print(x)
    print(listx)

def changex(): #--> method
    global x  #--> access the global x, without 'global' keyword unable to access global variable
    x="byee"  #--> change the value
    listx.append("item2") #--> list method can be accessed, However cannot be reassigned
   
if __name__=='__main__':  #--> Main method in python
    hello()
    changex()
    hello()
```


## Classes
Declare class in python and access
```python
#apis.py

import requests
import json
import time

#endpoints
MAIN_URL="https://myapp.co"
API_AUTH=MAIN_URL+"/app/authentication"
API_ACCOUNT=MAIN_URL+"/app/rest/account"
API_DYNAMIC_ROUTING_SYNC=MAIN_URL+"/v1/app/rest/pathoftheroute";

# API classes
class apis:
  API_TOKEN=""
  API_COOKIES=None

  def __init__(self):  #--> must have self, Since python will inject the self variable
    self.API_TOKEN = "hello" #--> access with self

  def login(self): #--> methods must have self, Since python will inject the self variable
    r1 = requests.post(API_AUTH, data = {'j_username':'admin','j_password':'312c2dd0b8bc61d02e5539c650f5911488a844e2f8cecc0b237cd38c8400bff3','remember-me':'false','submit':'Login'})
    print("login -->"+str(r1.status_code))
    self.API_COOKIES = r1.cookies #--> access with self

  def account(self):
      print(self.API_COOKIES)
      r1 = requests.get(API_ACCOUNT,cookies=self.API_COOKIES)
      print("acount-->"+str(r1.status_code))
```
> import using the above file in another file
```python
#mainfile.py
import requests
import json
import time

from requests import api
import apis  #--> import the file

apisObj = apis.apis()  #--> class object
apisObj.login() #--> class method
apisObj.account()
```




