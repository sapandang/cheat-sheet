# Javascript cheatsheet

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


