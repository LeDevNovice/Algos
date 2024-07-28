# SQL Basics: Simple JOIN and RANK
```sql
SELECT 
    people.id,
    people.name,
    COUNT(sales.id) AS sale_count,
    RANK() OVER (ORDER BY COUNT(sales.id) DESC) AS sale_rank
FROM 
    people
JOIN 
    sales ON people.id = sales.people_id
GROUP BY 
    people.id;
```
_The `RANK` statement is what we call a window function, a statement that will impact each rows of a table if i understand properly. It is different of a `SUM` or `COUNT` statement that will make an aggregation of the rows._