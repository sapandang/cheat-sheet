# Vuejs Reference

## Disable the Eslint
```javascript
"eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {
      "no-console": 1,
      "no-unused-vars": 1,
      "no-mixed-spaces-and-tabs": 0,
      "vue/no-unused-components": 1
    }
  },
 ```
> In package.json

## Setup the root path of URI while bulding production bundle
* in `vue.config.js`
```javascript
module.exports = {
  publicPath: '',
  pluginOptions: {
    
  },
};
```

## splitting route file
* route1.js
```
import BookedList from '../views/orders/views/BookedList.vue';

export default [

        {
        path: '/bookedlist',
        name: 'bookedlist',
        component: BookedList
      },

]
   
```
* main router `index.js`
```javascript
//import the splitted routes
import route1 from './route1'

 {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      ...OrdersRoutes,
      {
        path: '/dash',
        name: 'dash',
        component: Dash
      }, 
      ]

```




> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals
> https://stackoverflow.com/questions/48264980/splitting-routes-into-separate-files




