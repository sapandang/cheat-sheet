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

