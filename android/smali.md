---
title: "android smali assembly"
description: snippets for the smali
---
# add taoast

```
const/4 v0, 0x1

    const-string v1, "Your text here"

    invoke-static {p0, v1, v0}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;

    move-result-object v0

    invoke-virtual {v0}, Landroid/widget/Toast;->show()V
```
