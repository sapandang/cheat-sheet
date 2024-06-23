---
title: "Setting up the request mappings"
description: guide to setup request mapping
---

## Setup Request controller
Use annotation `@RestController` for creating

## Setupup base Request controller
use annotation `@RequestMapping("/exe")` 
> now all the requests in the class will start with prefix `/exe`

* to open `/exe` use  `@GetMapping("")` here the path need to be blank
* to open `/exe/` use `@GetMapping("/")` here the URL will have `http://localhost/exe/`



## Sample
```java
@RestController
@RequestMapping("/exe")
public class ExecutionController {



    @GetMapping("")
    public String index(){
       return "Hello";
    }

}
```


## Path mapping
```java
@GetMapping("/api/employees/{id}")
@ResponseBody
public String getEmployeesById(@PathVariable String id) {
    return "ID: " + id;
}
```
> In this example, we use the @PathVariable annotation to extract the templated part of the URI, represented by the variable {id}.

## Path mapping with variable
```java
@GetMapping("/api/employeeswithvariable/{id}")
@ResponseBody
public String getEmployeesByIdWithVariableName(@PathVariable("id") String employeeId) {
    return "ID: " + employeeId;
}
```

## Multiple Path Variables in a Single Request
```java
@GetMapping("/api/employees/{id}/{name}")
@ResponseBody
public String getEmployeesByIdAndName(@PathVariable String id, @PathVariable String name) {
    return "ID: " + id + ", name: " + name;
}
```

## Optional Path Variables
```java
@GetMapping(value = { "/api/employeeswithrequired", "/api/employeeswithrequired/{id}" })
@ResponseBody
public String getEmployeesByIdWithRequired(@PathVariable String id) {
    return "ID: " + id;
}
```

## making path in-case sensitive
add the configuraiton class
```java

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Bean
    public PathMatcher pathMatcher() {
        AntPathMatcher pathMatcher = new AntPathMatcher();
        pathMatcher.setCaseSensitive(false); // Set case-insensitive
        return pathMatcher;
    }

    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        configurer.setPathMatcher(pathMatcher());
    }
}
```