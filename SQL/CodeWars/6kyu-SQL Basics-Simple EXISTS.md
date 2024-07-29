# SQL Basics: Simple EXISTS
```sql
SELECT
    id,
    name
FROM
    departments
WHERE EXISTS (
    SELECT 
      NULL
    FROM 
      sales
    WHERE 
      sales.department_id = departments.id
    AND 
      sales.price > 98.00
);
```
_I have a little bit of difficulties to understand the `EXISTS` keyword and its purpose, especially the purpose of the `SELECT 1` statement. It seems that it is a common practice in SQL that indicates that we are not interested in the actual data returned by the subquery. We just want to know if any rows exist that match the condition. The database engine understands that the subquery is part of an `EXISTS` condition and optimizes accordingly. It stops processing as soon as it finds the first matching row. I prefer the `SELECT NULL` that seems more understandable to me to explain that we don't really care about the actual value in this `EXISTS` block._

_So for each row of the departments table, the instruction inside the `EXISTS` instruction is executed to return true or false in function of the correspondance between id column in departments table and the departments id column in the sales table and if the according price is greater than 98.00. If the `EXISTS` instruction return true, the departments row is part of the result._