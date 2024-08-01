# Easy SQL - Ordering
```sql
SELECT 
    id, ceo, motto, employees 
FROM 
    companies 
ORDER BY 
    employees DESC;
```
_With this implementation instead of the use of `SELECT *`, we prevent the changes in the data retrieved if the table changed in the future with a new column added for example._