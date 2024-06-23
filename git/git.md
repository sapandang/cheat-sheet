---
title: "GIT tricks"
description: usefull tips realted to git
tags: git,github
---

# Git Tricks

### working with existing local code
```bash
echo "# -PHP-AdminPanel-" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/sapandang/customPhpIntepreter.git
git push -u origin master
```

* or push an existing repository from the command line
```bash
git remote add origin https://github.com/sapandang/customPhpIntepreter.git
git push -u origin master
```

### .gitignore not working after update
```
git rm -r --cached .
git add .
git commit -m "fixed untracked files"
```
> https://stackoverflow.com/questions/11451535/gitignore-is-ignored-by-git

### Git create orphan branch
```
cd repository
git checkout --orphan orphan_name
git rm -rf .
rm '.gitignore'
echo "#Title of Readme" > README.md
git add README.md
git commit -a -m "Initial Commit"
git push origin orphan_name
```

### Create Git branch using checkout

```
git checkout -b <branch-name>
```

### checkout branch
```
git checkout master
```

### remove from git cache and FILESYSTEM
```
 git rm -rf .
```
