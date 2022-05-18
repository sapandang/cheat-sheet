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
## Delete in middle items 
```
DELETE from es_preadmission_details WHERE `es_preadmission_detailsid` NOT IN (  SELECT MAX(`es_preadmission_detailsid`)  FROM `bak_es` GROUP BY es_preadmissionid) AND `es_preadmission_detailsid` NOT IN (  SELECT MIN(`es_preadmission_detailsid`)  FROM `bak_es` GROUP BY es_preadmissionid)
```

## Join multiple tables
```sql
SELECT address.* , country.*,state.*  FROM address 
LEFT JOIN country ON address.country_id=country._id
LEFT JOIN state ON address.state_id=state._id;
```

# Alter Table
## add column with default value
```sql
ALTER TABLE users
ADD COLUMN category varchar DEFAULT 'bronze'
```
## add only the default value
```sql
ALTER TABLE orders_v2
ALTER COLUMN task_status set  DEFAULT 'open';
```
## Add JSON object column
```
ALTER TABLE orders_v3
ADD COLUMN customer_price jsonb DEFAULT '{}'
```


## PG: delete with constraint
```
# trick : disable the triggers 
ALTER TABLE table1 DISABLE TRIGGER ALL;
ALTER TABLE table2 DISABLE TRIGGER ALL;

# perform the delete
DELETE FROM table1;
DELETE FROM table2;

# enable the triggers
ALTER TABLE table1 ENABLE TRIGGER ALL;
ALTER TABLE table2 ENABLE TRIGGER ALL;
```



