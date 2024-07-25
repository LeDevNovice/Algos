# Adults only (SQL for Beginners #1)
```sql
SELECT name, age 
FROM users 
WHERE age >= 18;
```
_With this solution, we fetch only the requested columns. So we don't retrieved all the data of each row in the table `users` that would happened with the use of `*` instead of the use of `name, age` in the `SELECT` instruction. I think we improve performance with such an implementation._