# SQL: Concatenating Columns
```sql
SELECT
    CONCAT_WS(' ', prefix, first, last, suffix) AS title
FROM 
    names;
```