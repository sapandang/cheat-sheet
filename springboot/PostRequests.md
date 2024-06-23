---
title: "Handling post requests"
description: guide to handle the post calls
---


## Create post request mapping

```java
    @PostMapping("/cmd")
    public String executeCommand(){

        return "";
    }
```

## Get the post request body
```java
    @PostMapping("/cmd")
    public String executeCommand(@RequestBody String payload){


        return payload;
    }
```