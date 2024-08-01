# Easy SQL: Convert to Hexadecimal
```sql
SELECT
    TO_HEX(legs) AS legs,
    TO_HEX(arms) AS arms
FROM 
    monsters;
```