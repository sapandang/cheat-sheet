# Groovy JSON manipulation

## classes
```groovy
import groovy.json.JsonSlurper;
import groovy.json.JsonOutput;
```

## Read JSONObject
```groovy
import groovy.json.JsonSlurper;
import groovy.json.JsonOutput;

//Parse the JOSN from the response
def jsonSlurper = new JsonSlurper();
def jsonObject = jsonSlurper.parseText(s);

//parse the user object
def user_id = jsonObject.user.id;
def city_id = jsonObject.user.cityId;
def hub_id = jsonObject.user.hubId;
def company_id = jsonObject.user.company.id;

//parse arrary
//get the number of contents:
int number_of_contents = jsonObject.content.size();
def content_id = jsonObject.content[0].id;
System.out.println("got id as"+content_id);

//remove the key
jsonobj.remove("nodename")

```

## Output json
```groovy
def ax= JsonOutput.toJson(jsonObject);
System.out.println(ax);
```
