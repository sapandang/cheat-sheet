---
title: "Setting up springboot with gradle"
description: guide to setup spring boot with gradle
---


## Setting up the gradle build
1. Add depedency in the build.gradle
```gradle
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.session:spring-session-core'
    implementation group: 'org.postgresql', name: 'postgresql', version: '42.7.1'
    //need to store the json types
    implementation 'io.hypersistence:hypersistence-utils-hibernate-63:3.7.0'

```

2. Add the plugins
```groovy
plugins {
    id 'java'
    id 'application'
    id 'org.springframework.boot' version '3.2.1'
    id 'io.spring.dependency-management' version '1.1.4'
}
```

## Starting the server
1. create `application.properties` inside `resources` directory with below content
```python
server.port=8081
spring.datasource.url= jdbc:postgresql://localhost:5432/automata
spring.datasource.username= postgres
spring.datasource.password= a
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true
spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect
# Hibernate ddl auto (create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto= update
```
2. In the above code database is required if database not needed then remove the depedency
3. Lets create a `MainServer` class with the content

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MainServer {
    public static void main(String[] args) {
        SpringApplication.run(MainServer.class, args);
    }
}
``` 
This will start the application at port 8081

4. Create a rest controller `HelloController`
```java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class HelloController {

    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
```
5. Now restart the app and open 'http://localhost:8081'