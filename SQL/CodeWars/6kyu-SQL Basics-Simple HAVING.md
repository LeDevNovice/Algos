# SQL Basics: Simple HAVING
```sql
SELECT
    age,
    COUNT(*) AS total_people
FROM
    people
GROUP BY
    age
HAVING
    COUNT(*) >= 10;
```
_It seems to have some solutions that use a `COUNT(1)` instead of the `COUNT(*)` instruction. Hisotrically, it seems to have some database systems that handle this two instructions differently but modern database systems not execute them differently._

_I was wondering why I can't use the total people alias in the `HAVING` statement ans it seems to be related to the order of the execution where the `SELECT` statement is the last to be executed and so at the time of the `HAVING` statement the alias as not being set yet._