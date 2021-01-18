# Setup Drivers

## Setup Chrome Driver

```java
public class Driver {
	
	public static WebDriver chromeDriver;
	
	static public void setUpDriver() {
		
		System.setProperty("webdriver.chrome.driver", "D:\\tools\\selenium\\chromedriver_win32\\chromedriver.exe");
		chromeDriver = new ChromeDriver();
		
	}

}

```

## Chrome Capabilities & ChromeOptions

https://chromedriver.chromium.org/capabilities

```java 
public class Driver {
	
	public static WebDriver chromeDriver;
	
	static public void setUpDriver() {
		
		ChromeOptions options = new ChromeOptions();
		options.addArguments("start-maximized");
		
		System.setProperty("webdriver.chrome.driver", "D:\\tools\\selenium\\chromedriver_win32\\chromedriver.exe");
		chromeDriver = new ChromeDriver(options);
		
	}

}

```

## Full snippet
```java

System.setProperty("webdriver.chrome.driver", "D:\\tools\\selenium\\chromedriver_win32\\chromedriver.exe");
WebDriver driver = new ChromeDriver();

//open url
driver.get("google.com");

//get element
WebElement donwloadLink = driver.findElement(By.xpath("//a[@id='dlbutton']"));

//get multiple elements
List<WebElement> links =   driver.findElements(By.xpath("//div[@id='dle-content']//div[@class='news-title']//a"));

//get attribute
donwloadLink.getAttribute("href")

//get the text
WebElement allLinks = driver.findElement(By.xpath("//div[@class='quote']"));		
allLinks.getText()

//javascript executor
String zippylink =	(String)javascriptExecutor.executeScript("var xs = document.evaluate(\"//*[@id='dle-content']//*/text()[contains(string(),'zippy')]\", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);\r\n" + 
					"var dd = xs.snapshotItem(0);\r\n" + 
					"return dd.textContent;");	


```


