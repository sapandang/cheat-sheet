# Linux

## Getting lines from files
```bash
output | sed -n '1p'  #prints the 1st line of output
output | sed -n '1,3p'  #prints the 1st, 2nd and 3rd line of output
```
> Reference: https://stackoverflow.com/questions/2601922/getting-n-th-line-of-text-output
