# Jmeter Scripting 

## Getting the property
```groovy
System.out.println("hii");
String a = props.get("API")
System.out.println("hii ${__property(API)} "+a);
```

## Passing the prop file

```bash
 jmeter -q test.prop 
```

## Running in Grid
* Set the grid host
```bash
Running grid with host
```

## Time Function
```bash
${__time(yyyy-MM-dd HH:mm:ss)}
```

## Access cookiee 
```groovy
${COOKIE_XSRF-TOKEN}
```
> First set CookieManager.save.cookies=true  in jmeter properties



