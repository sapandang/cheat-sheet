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
> * https://levelup.gitconnected.com/how-to-write-function-with-n-number-of-parameters-in-javascript-a916de1be7a2
