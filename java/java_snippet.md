---
title: "java cheatsheet"
description: Usefull java snippets
tags: java
---

# Date Time

## Get timestamp
```java
SimpleDateFormat s = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss:SSS");
String timestamp = s.format(new Date());
```

## convert date
```
        DateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        Date date = (Date)formatter.parse("12-11-2022");

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String mydate = dateFormat.format(date);

        System.out.println(mydate);
```

# install openjdk 11 in ubuntu 16


* Add the repository
```
sudo add-apt-repository ppa:openjdk-r/ppa
```
* Update package list
```
sudo apt-get update
```
* Install openjdk-11-jdk
```
sudo apt install openjdk-11-jdk
```

# Setting up the visual vm for the remote

* Download jvisualVM.
* In java app add the following paramas
> Add the jmxremote params
```
DEFAULT_JVM_OPTS='"-Xms1g" "-Xmx25g" "-XX:MaxMetaspaceSize=13g" "-Dcom.sun.management.jmxremote.port=7091" "-Dcom.sun.management.jmxremote.rmi.port=7091" "-Dcom.sun.management.jmxremote.authenticate=false" "-Dcom.sun.management.jmxremote.ssl=false" "-Djava.rmi.server.hostname=127.0.0.1"'
```
* Local Farward the tunnel request
```
ssh -L 127.0.0.1:7091:127.0.0.1:7091 sapan@remotemachine
// if remote machine is in ssh config
ssh -L 127.0.0.1:7091:127.0.0.1:7091 remotemachine
// syntax
ssh -L <Localhost>:<localPort>:<remotehost>:<remateport> <remotemachine>
```
* now open visualvm and add the jmx with `localhost:7091`
