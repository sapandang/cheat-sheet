---
title: adb commands
description: List of usefull adb commands
tags: adb,android
---

## get the current activity details
```bash
adb shell dumpsys window windows | grep -E 'mCurrentFocus|mFocusedApp|mInputMethodTarget|mSurface'
```

## get all packages with version
```bash
adb shell dumpsys package | awk '/^[ ]*Package \[.*\] (.*)/ { i = index($0, "[") + 1; pkg = substr($0, i, index($0, "]") - i); } /[ ]*versionName=/ { { print pkg "\t" substr($0, index($0, "=") + 1); pkg = ""; } }' | grep setting
```

## capture screenshot
```bash
adb exec-out screencap -p > screen.png
```
