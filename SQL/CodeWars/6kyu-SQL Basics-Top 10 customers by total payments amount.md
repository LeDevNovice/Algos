# SQL Basics: Top 10 customers by total payments amount
```sql
SELECT
    customer.customer_id,
    customer.email,
    COUNT(payment.payment_id) AS payments_count,
    CAST(SUM(payment.amount) AS float) AS total_amount
FROM 
    customer
JOIN
    payment ON customer.customer_id = payment.customer_id
GROUP BY
    customer.customer_id
ORDER BY
    total_amount DESC
FETCH FIRST 10 ROWS ONLY;
```
_I have learned that by default a JOIN keyword implicitly define an inner join that only includes rows where there is a match in both tables._

_For me, the database first identifies the tables to be queried (customer and payment) and performs the join operation on the customer id columns. This produces a combined result set where each row includes data from both tables for matching customer id values. The database then groups the rows resulting from the join by customer id. Each group contains all rows with the same customer id. For each group, the database calculates the aggregate values : Count the number of payments for each customer and sum the total amount spent by each customer, which is then cast to a float. The grouped and aggregated results are sorted by the total amount in descending order. After sorting, the database fetches only the first 10 rows from the sorted result set._

_I have include the customer.email column in the `GROUP_BY` statement in my first solution but it seems that because this column has a one-to-one relationship with the customer id column it is not necessary to include it. It seems that any column that is not wrapped in an aggregate function like `SUM` and `COUNT` here must be included in the `GROUP BY` clause. In this query, we are selecting customer.customer id and customer.email, along with aggregated columns payments count and total amount. Since customer id is unique and each customer id corresponds to exactly one email, the email is implicitly unique within each group of customer id. There cannot be multiple different emails within a single group of the same customer id._