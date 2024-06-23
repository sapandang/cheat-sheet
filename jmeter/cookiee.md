---
title: "running selenium with jmeter"
description: running selenium with jmeter and manipulate the cookiess
tags: jmeter
---


## retrive the cookiee
> this only works with JSR223PostProcessor
> Must add the cookemanager sampler
```java
import org.apache.jmeter.protocol.http.control.* 
import java.util.*;   
//Get cookie manager
CookieManager cm = sampler.getCookieManager();

//System.out.println(prev.getResponseDataAsString());
System.out.println(cm.getCookieCount());

HashMap<String,String> ma = new HashMap<>();

for(int i=0;i<cm.getCookieCount();i++)
{
 Cookie c = cm.get(i);	
 System.out.println(c.getName()+" "+c.getValue());
 ma.put(c.getName(),c.getValue());
}

vars.putObject("c",ma);
```

# Pass cookiee to chromedriver
```
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.*;


def m = vars.getObject("c");

System.setProperty("webdriver.chrome.driver", "chromedriver");
WebDriver driver = new ChromeDriver();
driver.get("https://domains");

m.each { key, val ->
    driver.manage().addCookie(new Cookie(key, val));
}
```
