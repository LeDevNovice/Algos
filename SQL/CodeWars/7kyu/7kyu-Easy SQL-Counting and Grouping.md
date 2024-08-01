# Easy SQL: Counting and Grouping
```sql
SELECT 
    race,
    COUNT(*) AS count
FROM 
    demographics
GROUP BY
    race
ORDER BY
    count DESC;
```