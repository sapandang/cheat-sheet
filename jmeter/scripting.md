# Jmeter Scripting 

## Getting the property
```groovy
System.out.println("hii");
String a = props.get("API")
System.out.println("hii ${__property(API)} "+a);
```

## Passing the prop file

```bash
 jmeter -q test.prop 
```

## Running in Grid
* Set the grid host
```bash
./jmeter-server -Djava.rmi.server.hostname=xxx.xxx.xxx.xxx
```

## Time Function
```bash
${__time(yyyy-MM-dd HH:mm:ss)}
```

## Access cookiee 
```groovy
${COOKIE_XSRF-TOKEN}
```
> First set CookieManager.save.cookies=true  in jmeter properties

## JSR233 sampler assertion
```groovy
/*
 * @author : sapan
 */
import groovy.json.JsonSlurper;

def failureMessage = "";
def jsonResponse = null;
boolean failed = false;

JsonSlurper JSON = new JsonSlurper ();

try {
    jsonResponse = JSON.parseText(prev.getResponseDataAsString());
    } catch (Exception e) {
    failureMessage += "Invalid JSON.\n"
}

// response check logic 

if (!jsonResponse.keySet().containsAll(["createdDate","lastModifiedDate","name","id","companyId"] )) {
          failureMessage += "City not created \n\n";
          failed = true;
}

if(!failed)
{
	vars.put("cityid",""+jsonResponse.id);
	vars.put("cityname",""+jsonResponse.name);

}

//===============================================================
// Assertion logic do not modify
if (failureMessage?.trim()) {
	AssertionResult.setFailureMessage(failureMessage);
     AssertionResult.setFailure(true);    
}

// Print error messages if any
if (failureMessage?.trim()) {
    failureMessage += "URL: " + SampleResult.getURL() + "\n\n";     
    failureMessage += "JSON RESPONSE: " + jsonResponse + "\n\n";
    failureMessage += "REQUEST HEADERS: " + SampleResult.getRequestHeaders() + "\n\n";

    AssertionResult.setFailureMessage(failureMessage);
    AssertionResult.setFailure(true);    
}
```

## Get request body and response
```groovy
System.out.println("Name : "+sampler.getName());
System.out.println("ResponseCode : "+prev.getResponseCode());
System.out.println("ResponseMessage : "+prev.getResponseMessage());
System.out.println("ResponseBODY : "+prev.getResponseDataAsString());
System.out.println("Protocal : "+sampler.getProtocol());
System.out.println("Method : "+sampler.getMethod());
System.out.println("Source : "+sampler.getDomain());
System.out.println("path : "+sampler.getPath());
System.out.println("URL : "+sampler.getUrl());
System.out.println("BODY : "+sampler.getArguments().toString());
```

## Get time minus minute
```groovy
${__groovy(use(groovy.time.TimeCategory) { (new Date() - 1.minutes).format('yyyy-MM-dd HH:mm:ss') })}
```

## Stop the jmeter Script `beanshell`
```groovy
import org.apache.jmeter.threads.JMeterContextService;
vars.put("stop_thread","true");
      JMeterContextService.getContext().getThread().stop();
```
## Custom JSR223 Listner
```groovy
if(!prev.getResponseCode().equalsIgnoreCase('200'))
{
	System.out.println("ERROR Response code "+prev.getResponseCode());
	//String request =sampler.getArguments().getArgument(0).getValue();
	System.out.println("==> "+sampler.getProtocol());
	System.out.println("==>x "+sampler.getPath());
	System.out.println("==>n "+sampler.getName());
	
}
```
## Custom listner 2
```groovy
if(!prev.getResponseCode().equalsIgnoreCase('200'))
{

try{
System.out.println("ERROR Response code "+prev.getResponseCode() +" | "+ prev.getURL() +" | " + " | "+ sampler.getArguments());

//+prev.getResponseDataAsString()
}catch(Exception e)
{

}
}
```


## Log header `working with jmeter 4`
```groovy
//  String request = ctx.getPreviousSampler().getArguments().getArgument(0).getValue();
//  the above does not work any more with jmeter 4

import org.apache.jmeter.config.Arguments;
import org.apache.jmeter.config.Argument;
String message = "";

if(!prev.getResponseCode().equalsIgnoreCase('200'))
{
	System.out.println("ERROR Response code "+prev.getResponseCode());
	String request =sampler.getArguments().getArgument(0).getValue();

/* 
	Arguments arguments =sampler.getArguments();
for (int i=0;i<arguments.getArgumentCount();i++)
{
    Argument argument = arguments.getArgument(i);
    String name = argument.getName();
    String value = argument.getValue();
    // do what you need
    message+="name"+name+" value "+value;
}
*/

	String header = ctx.getPreviousResult().getResponseHeaders();
	String responsedaa=  prev.getResponseDataAsString();
	message+= "requesrt header "+header;
	message+= "requesrt body "+request;	
	message+= "response bodyr "+responsedaa;
	log.info(""+message);

}
```

## Print into viewResult tree responseBody
```groovy
SampleResult.setResponseData("asd");
SampleResult.setDataType(org.apache.jmeter.samplers.SampleResult.TEXT);
```
## IF clause in the sampler
```groovy
${__javaScript("${callpagi}" != "success,1",)}
${__groovy("1".equals("${hasdelSync}"))}
${__jexl3(${lineno}%3 == 0)}
${__groovy( (${__threadNum}%2) != 0 )} //-- works

// test the expression by creating a jsr223 sampler and inserting the code
//eg:
System.out.println(""+"${__threadNum}");
System.out.println(""+"${__groovy( (${__threadNum}%2) != 0 )}");
```

## Jmeter Thread Number
```
${__threadNum}
```



