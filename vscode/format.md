---
title: "vscode view all html attributes in a single line"
description: vscode view all html attributes in a single line
---


## view all the html arrtibutes in a single line
> add the setting in the json file. can be viewed by going to setting(UI) vueter than go to default conf then add the line
```json
    "vetur.format.defaultFormatter.html": "prettyhtml",
        "vetur.format.defaultFormatterOptions": {
        "prettier": {},
        "js-beautify-html": {
            "wrap_attributes": "auto"
        },
        "prettyhtml": {
            "printWidth": 260,
            "singleQuote": false,
            "wrapAttributes": false,
            "sortAttributes": false
        }
    },
```
