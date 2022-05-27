## generate keystore and sign the apk

```
keytool -genkey -keystore name.keystore -validity 10000 -alias name -keyalg rsa
jarsigner -keystore name.keystore -verbose fb.apk name
```


# tut
* https://www.hebunilhanli.com/wonderland/mobile-security/decompile-modify-smali-recompile-and-sign-apk/
