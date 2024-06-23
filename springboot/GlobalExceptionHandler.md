---
title: "Handle exception globally"
description: guide to handle the exceptions globally
---

use `@ControllerAdvice` to handle the exception globally

## sample class
```java
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

@ControllerAdvice
public class GlobalHandler {
    private static final Logger logger = Logger.getLogger(GlobalHandler.class.getName());
    private static final DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd-MM-yy HH:mm:ss");

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleException(Exception ex, HttpServletRequest request) {
        logger.log(Level.SEVERE, "Exception caught in handleCustomException", ex);

        Map<String, Object> body = new HashMap<>();
        body.put("message", "An error occurred");
        body.put("timestamp",LocalDateTime.now().format(dateFormatter));
        body.put("status",HttpStatus.INTERNAL_SERVER_ERROR.value());
        body.put("message",ex.getMessage());
        body.put("path",request.getRequestURI());

        return new ResponseEntity<>(body, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```
