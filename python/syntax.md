# Python Syntax


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


