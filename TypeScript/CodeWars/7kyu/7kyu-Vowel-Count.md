# Vowel Count
```typescript
export class Kata {
  static getCount(str: string): number {
    return str.split("").reduce((acc: number, curr: string) => {
      return 'aeiou'.includes(curr) ? acc + 1 : acc;
    }, 0);
  }
}
```