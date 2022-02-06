# truncate table and reset sequence
```
TRUNCATE  TABLE  users RESTART IDENTITY CASCADE;
```
> https://www.postgresql.org/docs/current/sql-truncate.html


# Query JSON
```
select row_to_json(da) from (select * from company)da;
```
