---
title: "Publish jar to github pacakages via gradle"
description: guide to publish jar packages to github packages with gradle
tags: gradle,build tool,package publishing,github

---

## Requirement
1. Gradle
2. java project

## Steps
1. Open `build.gradle`
2. add plugins
```groovy
plugins {
    id 'java'
    id 'maven-publish'
    id 'java-library'
}
```
3. add publishing 
```groovy
publishing {
    repositories {
        maven {

            name = "GitHubPackages"
            url = "https://maven.pkg.github.com/myuserName/reponame"
            credentials {
                username = "username" // System.getenv("USERNAME")
                password = "user_token" // System.getenv("PASSWORD")
            }
        }
    }

    publications {
        maven(MavenPublication) {

            versionMapping {
                usage('java-api') {
                    fromResolutionOf('runtimeClasspath')
                }
                usage('java-runtime') {
                    fromResolutionResult()
                }
            }
            from components.java
            groupId = project.group
            artifactId = "fareye.core"
            version = project.version
        }
    }
}
```
4. open gradle task and got to `publishing` and run `publishAllPublicationsToGitHubPackagesRepository`

## Using github packages in gradle
1. add the following repo in build.gradle
```groovy
repositories {
    mavenCentral()
    maven {

        name = "GitHubPackages"
        url = "https://maven.pkg.github.com/username/reponame"
        credentials {
            username = "username" // System.getenv("USERNAME")
            password = "user_token" // System.getenv("PASSWORD")
        }
    }
}
```
2. Add the required dependecy in the gradle `depedencies` section