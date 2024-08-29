# Descending Order
```typescript
export function descendingOrder(n: number): number {
    return +n
        .toString()
        .split('')
        .map(Number)
        .sort((a, b) => b - a)
        .join('');
}
```