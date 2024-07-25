# Best-Selling Books (SQL for Beginners #5)
```sql
SELECT name, author, copies_sold
FROM books
ORDER BY copies_sold DESC 
FETCH FIRST 5 ROWS ONLY;
```
_It seems that there is multiple solutions to retrieve only the 5 first rows of the data retrieved but I like the declarative form of the `FETCH FIRST 5 ROWS ONLY` instead of the `LIMIT 5` instruction._