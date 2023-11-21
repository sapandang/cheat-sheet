---
title: "batch rename file using nodejs"
description: Snippet for batch renaming file using nodejs
---

# Batch rename file

```javascript

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory
//get the files in current dir 
const directoryPath = path.join(__dirname, '');
//passsing directoryPath and callback function
var index=0; //file number counter
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
		//rename the files
		if(file !='ren.js')
		{
		fs.renameSync(file, 'cover_'+index+'.jpg');
		index++;
		}		
    });
});
```
