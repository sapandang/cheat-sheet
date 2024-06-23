---
title: apktool
description: Some usefull links for using the apktool
tags: apktool,android
---


## generate keystore and sign the apk

```
keytool -genkey -keystore name.keystore -validity 10000 -alias name -keyalg rsa
jarsigner -keystore name.keystore -verbose fb.apk name
```

# tut
* https://www.hebunilhanli.com/wonderland/mobile-security/decompile-modify-smali-recompile-and-sign-apk/
* https://www.hackers-arise.com/post/2018/01/22/android-hacking-how-to-embed-a-backdoor-into-an-android-apk
* https://pentestlab.blog/2017/03/13/injecting-metasploit-payloads-into-android-applications/
* https://www.bulbsecurity.com/backdooring-apks-programmatically/
* https://pentestlab.blog/2017/06/26/injecting-metasploit-payloads-into-android-applications-manually/
* activity
* * https://forum.xda-developers.com/t/tutorial-adding-new-activity-header-sub-menu-to-settings-apk.2712474/
* * https://forum.xda-developers.com/t/guide-how-to-create-a-new-activity-in-settings.2472042/
