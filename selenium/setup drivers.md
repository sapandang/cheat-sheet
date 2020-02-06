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

### Chrome Capabilities & ChromeOptions

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

