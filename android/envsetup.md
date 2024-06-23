---
title: android sdk setup helps
description: Some usefull tips for androidsdk
tags: android

---

Some usefull tips for android skd

# set the PATH for the linux

export ANDROID_HOME="/home/<username>/Android/Sdk"
export PATH="${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/${PATH}"

# accept all the liscense
~/Android/Sdk/tools/bin/sdkmanager --licenses
