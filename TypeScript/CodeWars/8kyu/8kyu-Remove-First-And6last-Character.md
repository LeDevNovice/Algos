# Remove First and Last Character
```typescript
export function removeChar(str: string): string {
  const splitString = str.split('');
  
  splitString.shift();
  splitString.pop();
  
  return splitString.join('');
}
```

_I don't see it at first but my solution is very verbose and I can use slice method to have the same result in a one line solution._