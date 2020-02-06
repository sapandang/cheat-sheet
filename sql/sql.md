# SQL cheat sheet

## Get duplicate count
```
SELECT COUNT(`title`) as tile from products GROUP by title HAVING tile > 1
```
```
SELECT * from products GROUP by title HAVING COUNT(`title`) > 1
```

## Create table from another table
```
CREATE TABLE new_tbl LIKE orig_tbl;
```


## Insert from another table
```
INSERT INTO tmp_table SELECT * from products GROUP by title HAVING COUNT(`title`)  > 1
```

## Delete from another table
```
DELETE FROM `products` WHERE title in (SELECT title from tmp_table)
```
