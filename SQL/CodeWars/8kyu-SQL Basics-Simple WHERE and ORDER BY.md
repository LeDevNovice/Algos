# SQL Basics: Simple WHERE and ORDER BY
```sql
SELECT id,name,age 
FROM people
WHERE age > 50
ORDER BY age DESC
```
_With this implementation instead of the use of `SELECT *`, we prevent the changes in the data retrieved if the table changed in the future with a new column added for example._