# working with existing local code
```bash
echo "# IonoxGrocery-PHP-AdminPanel-" >> README.md
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

# .gitignore not working after update
```
git rm -r --cached .
git add .
git commit -m "fixed untracked files"
```
> https://stackoverflow.com/questions/11451535/gitignore-is-ignored-by-git
