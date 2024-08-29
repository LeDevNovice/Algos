# Convert a string to a number!
```typescript
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.reduce((acc, curr) => {
    return curr ? acc + 1 : acc;
  }, 0)
}
```