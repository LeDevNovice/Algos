# Create Phone Number
```typescript
export function createPhoneNumber(numbers: number[]): string {
  const firstPart = `(${numbers[0]}${numbers[1]}${numbers[2]})`;
  const secondPart = `${numbers[3]}${numbers[4]}${numbers[5]}`;
  const thirdPart = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  
  return `${firstPart} ${secondPart}-${thirdPart}`
}
```

_I think this is not the best practice for such a problem. I have tried to keep the code understandable but I have three variables in memory that is not the better use in terms of memory. Even when watching the solutions I don't found a good solution for me._