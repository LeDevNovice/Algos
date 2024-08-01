# Easy SQL: Square Root and Log
```sql
SELECT
    SQRT(number1) AS root,
    LOG10(number2) AS log
FROM
    decimals;
```

_Apparently, `|/` is a unary operator for the square root and can be used instead of the `SQRT` keyword. It is supposed to look like the mathematical symbol `√`. But I think the `SQRT` keyword is more explicit when reading the SQL instruction._