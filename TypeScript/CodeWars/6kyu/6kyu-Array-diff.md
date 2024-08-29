# Array.diff
```typescript
export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(item => !b.includes(item))
}
```