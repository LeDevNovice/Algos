# SQL Basics: Simple GROUP BY
```sql
SELECT
    age,
    COUNT(*) as people_count
FROM
    people
GROUP BY 
    age;
```
_If I correctly understand the behavior of such a SQL instruction, it starts by identifying the table from which data will be selected with `FROM` keyword. Then, it looks at the `GROUP BY` clause and groups all rows in the people table by the values in the age column. This means all rows with the same age are put into one group. For each group, the `COUNT(*)` function counts the number of rows in that group. This count represents the number of people who have that specific age. The `SELECT` clause specifies that the output should include the age column and the count of rows in each group._