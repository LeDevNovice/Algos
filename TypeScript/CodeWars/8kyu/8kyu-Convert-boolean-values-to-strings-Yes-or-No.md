# Convert boolean values to strings 'Yes' or 'No'.
```typescript
export const boolToWord = (bool: boolean): "Yes" | "No" => {
  return bool ? "Yes" : "No";
};
```