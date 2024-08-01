# SQL Basics: Simple JOIN with COUNT
```sql
SELECT 
    people.id,
    people.name,
    COUNT(*) AS toy_count
FROM
    people
JOIN 
    toys ON people_id = people.id
GROUP BY
    people.id;
```

_I have initially made a mistake because I have not implemented a `GROUP BY` statement. I understood after that when there is some non aggregated selections in the `SELECT` statement with aggregation such as `COUNT` here, we need to specify how to groups these columns to SQL engine before performing aggregations. I haven't added the people.name column because in this case of the problem it seems that there is a one-to-one relationship with the column people.id._
