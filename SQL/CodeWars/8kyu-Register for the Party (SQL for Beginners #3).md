# Register for the Party (SQL for Beginners #3)
```sql
INSERT INTO 
    participants (name, age, attending)
VALUES 
    ('LeDevNovice', 32, true);

SELECT 
    name, age, attending 
FROM 
    participants;
```
_It is possible to remove the `(name, age, attending)` part in the `INSERT` instruction but I think that keeping it ensure more clarity and understanding for the reader of the SQL instruction. For me, It helps to be sure too that the values entered corresponds to the right fields._

_I have also modified the default `SELECT * FROM participants` instruction to be more specific on the columns values retrieved and improve performance with retrieving only desired values._