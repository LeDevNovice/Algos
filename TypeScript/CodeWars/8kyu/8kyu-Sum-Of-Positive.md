# Sum of Positive
```typescript
export function positiveSum(arr:number[]):number {
  const sumOfPositive: number = arr.reduce((acc: number, curr: number) => {
    return curr > 0 ? acc + curr : acc;
  }, 0)
  
  return sumOfPositive
}
```