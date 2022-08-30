# Groovy file operations

## write to file
```groovy
def writeToFile(def id,def refno,def dest){

	String filePath="gendata/${dest}.csv";
	//check if file exists or not
	File file = new File(filePath)
	if(!file.exists())
	{
		File file2 = new File(filePath);
		file2.write "id,refno,dest\n";
		file2.append "$id,$refno,$dest\n";
	}else{
		//file exists append to it
		File file2 = new File(filePath);
		file2.append "$id,$refno,$dest\n";
	}
	
}
```
