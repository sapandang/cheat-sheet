---
title: "javascript cheatsheet"
description: Usefull javascript snippets
tags: javascript
---

# Javascript cheatsheet


## DateTime manipulation

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


## Dynamic Function
```javascript
var x = new Function('a','console.log(a)');
x('hello');
```
> Reference:
> * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
> * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

## Get number of arguments passed to function
```javascript
var x = new Function('a','console.log(arguments)');
x('ff');
```
> Reference
> * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
> * https://levelup.gitconnected.com/how-to-write-function-with-n-number-of-parameters-in-javascript-a916de1be7a2

## Dynamic argument with parameter
```javascript
var x = new Function(['a','b','c'],'console.log(arguments); console.log(a+"==>"+b+"==>"+c);');
x('hello','byee','code');
```
> Reference
> * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

## Passing parameter to the function
```javascript
var x = new Function(['a','b','c'],'console.log(arguments); console.log(a+"==>"+b+"==>"+c);');
x.apply(null,[12,23,45]);
```
```javascript
var x = new Function(['a=12','b=34','c=56'],'console.log(arguments); console.log(a+"==>"+b+"==>"+c);');
x();
```
> Reference:
> * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply


## Execute expression
```javascript
 function executeExpression(expression){
        var fun = new Function('value','return ('+expression+')');
        return fun(12);
    }
executeExpression('12');
```



#  Vuejs
## expression parser

```javascript
new Vue({
	el:'#vue',
  data:{
  	greeting:'Hello',
    name:'Vue',
    string:'{{greeting+1}} {{name}} {{name}}! {{1 + 1}}'
  },
  methods:{
  evalInContext(string){
    try{
    	return eval('this.'+string)
    } catch(error) {
    	try {
      	return eval(string)
      } catch(errorWithoutThis) {
      	console.warn('Error en script: ' + string, errorWithoutThis)
      	return null
      }
    }
  },
  	parse(string){
    	return string.replace(/{{.*?}}/g, match => {
      	var expression = match.slice(2, -2)
        
        return this.evalInContext(expression)       
      })
    }
  }
})

//==>> HTML
<div id="vue">
  <div>
    {{parse(string)}}
  </div>
</div>

```


> Reference:
> * https://forum.vuejs.org/t/evaluate-string-as-vuejs-on-vuejs2-x/20392/3
> * https://jsfiddle.net/cpfarher/97tLLq07/3/


