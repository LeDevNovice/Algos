# Register for the Party (SQL for Beginners #3)
```sql
SELECT 
    MIN(age) AS age_min,
    MAX(age) AS age_max
FROM
    people;
```
_Apparently it is possible to make the same thing without the `AS` keyword but again I think personnaly that we have to follow the declarative way prone by SQL to be more readable and understandable at the first read._