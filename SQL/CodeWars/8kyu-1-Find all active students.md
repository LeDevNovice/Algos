# 1. Find all active students
```sql
SELECT
    id,
    FirstName,
    LastName,
    IsActive
FROM
    students
WHERE
    IsActive = 1;
```

_With boolean column it seems that we can, like in JavaScrip logic, make a `WHERE IsActive` statement without the `1` value. Is it better to explicitly enter the value desired for the column ? At this time of my learning and experiments, I would say yes._