# Date Time
# JAVA

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
