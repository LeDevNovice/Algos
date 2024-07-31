# Countries Capitals for Trivia Night (SQL for Beginners #6)
```sql
SELECT 
    capital
FROM
    countries
WHERE 
    continent IN ('Africa', 'Afrika') 
    AND country LIKE 'E%'
ORDER BY
    capital ASC
FETCH FIRST 3 ROWS ONLY;
```