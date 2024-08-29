# Square Every Digit
```typescript
export class Kata {
  static squareDigits(num: number): number {
    const numArray = [...num.toString()];
    return +(numArray.map((num) => (+num) ** 2).join(''));
  }
}
```

_I don't think i have the better solution I can do here. The + can be difficult to understand for some developer not aware of this syntax to convert the result to a number. Maybe the Number would be a better practice for more readability._