---
title: "jmeter generating files"
description: Generating files with jmeter JSR223Sampler using groovy
tags: jmeter
---


```groovy
 // DELETE THE generated file

import groovy.io.FileType;
String fileName = "gendata/data1_${hubid}.csv";
new File(fileName).delete();
```


```groovy
import java.io.FileWriter;
import java.util.Arrays;
import java.io.Writer;
import java.util.List;
import groovy.json.JsonSlurper;
//Default separator
char SEPARATOR = ',';

//function write line in csv
public void writeLine(FileWriter writer, String[] params, char separator)
{
   boolean firstParam = true;

   StringBuilder stringBuilder = new StringBuilder();
   String param = "";
   
   for (int i = 0; i < params.length; i++)
   {
      //get param
      param = params[i];
      log.info(param);
       
         //if the first param in the line, separator is not needed
       if (!firstParam) 
       {
           stringBuilder.append(separator);
       }

         //Add param to line
       stringBuilder.append(param);
      
       firstParam = false;
   }

   //prepare file to next line
   stringBuilder.append("\n");

   //add to file the line
   log.info(stringBuilder.toString());
   writer.append(stringBuilder.toString());

}

//get path of csv file (creates new one if its not exists)
String csvFile = "gendata/data1_${hubid}.csv"; // for example '/User/Downloads/blabla.csv'


String[] params = {};

FileWriter fileWriter = new FileWriter(csvFile, true);

//Get the previous response and write it to file
String s = prev.getResponseDataAsString();; 
//Parse the JOSN from the response
def jsonSlurper = new JsonSlurper();
def jsonObject = jsonSlurper.parseText(s);


for(i=0;i<jsonObject.content.size();i++)
{
	
params = [""+jsonObject.content[i].job.id,""+jsonObject.content[i].job.referenceNo] as String[];
writeLine(fileWriter,params, SEPARATOR);
}
//proper close to file
fileWriter.flush();
fileWriter.close();
```
