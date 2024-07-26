# Collect Tuition (SQL for Beginners #4)
```sql
SELECT 
  name, age, semester, mentor, tuition_received
FROM 
  students 
WHERE 
  NOT tuition_received;
```
_I have first define a solution that use a syntax like `WHERE tuition_received = 'false';` but I think the use of the `NOT` keyword is more consistent with the declarative philosophy that is the one of SQL language._