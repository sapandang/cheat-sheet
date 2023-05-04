# adb commands

## get the current activity details
```
adb shell dumpsys window windows | grep -E 'mCurrentFocus|mFocusedApp|mInputMethodTarget|mSurface'
```

## get all packages with version
```
adb shell dumpsys package | awk '/^[ ]*Package \[.*\] (.*)/ { i = index($0, "[") + 1; pkg = substr($0, i, index($0, "]") - i); } /[ ]*versionName=/ { { print pkg "\t" substr($0, index($0, "=") + 1); pkg = ""; } }' | grep setting
```

## capture screenshot
```
adb exec-out screencap -p > screen.png
```
