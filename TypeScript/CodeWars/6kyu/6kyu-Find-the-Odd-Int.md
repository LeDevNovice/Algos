# Find the odd int
```typescript
export const findOdd = (xs: number[]): number => {
  return xs.reduce((acc, num) => acc ^ num, 0);
};
```

_Even if i think I would never use it in a codebase, I used the XOR operator here to have a concise solution. It compares the bits to decide which value between 0 and 1 it adds in the reduce array method._