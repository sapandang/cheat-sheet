# DateTime manipulation

```
new Date().toISOString().substr(0, 10)
"2020-11-07"

var d = new Date("2015-03-25");

undefined
d;
Wed Mar 25 2015 05:30:00 GMT+0530 (India Standard Time)
var d = new Date("2020-11-05T06:04:03Z");

undefined
d;
Thu Nov 05 2020 11:34:03 GMT+0530 (India Standard Time)
d.toISOString();
"2020-11-05T06:04:03.000Z"
d.toGMTString();
"Thu, 05 Nov 2020 06:04:03 GMT"
d.toDateString();
"Thu Nov 05 2020"
d;
Thu Nov 05 2020 11:34:03 GMT+0530 (India Standard Time)
d.toLocaleString();
"11/5/2020, 11:34:03 AM"

```
