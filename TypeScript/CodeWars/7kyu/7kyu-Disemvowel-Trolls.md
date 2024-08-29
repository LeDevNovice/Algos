# Disemvowel Trolls
```typescript
export class Kata {
  static disemvowel(str: string): string {
    return str.replace(/[aeiou]/gi, "");
  }
}
```