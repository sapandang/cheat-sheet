## Generate Runner shell script
`add in the build.gradle`

```groovy

ext.generateFile ={ className ->

    println "Generating runner script v1 for "+className;
    new File(projectDir, "${className}_Runner.sh").text = """
#!/usr/bin/env bash
#classpath
cpath=${sourceSets.main.runtimeClasspath.asPath}
#logFile
logfile=${className}_run.log

#classToRun
runclass=${className}

#Running command line
nohup java -Xms1g -Xmx15g -XX:MaxMetaspaceSize=13g -Dfile.encoding=UTF-8 -Duser.country=US -Duser.language=en -Duser.variant -cp \${cpath} \${runclass} > \${logfile} &


"""

}

task generateAllScripts() {
    doLast {


        def classLists = [
                "Parrot",
                "Cockatiel",
                "Pigeon"
                     ] as String[];

        for(int i=0;i<classLists.length;i++)
        {
            println(classLists[i])
            generateFile(classLists[i]);
        }


    }
}
```

## Change source set
Add below to build.gradle
```java
sourceSets {
    main.java.srcDirs = ['chalba']
    main.resources.srcDirs = ['chalba/resources']
}
```




