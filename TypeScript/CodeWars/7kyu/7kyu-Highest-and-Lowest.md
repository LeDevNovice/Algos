# Highest and Lowest
```typescript
export class Kata {
  static highAndLow(numbers: string): string {
    const numArray = numbers.split(' ').map(Number);
    return `${Math.max(...numArray)} ${Math.min(...numArray)}`;
  }
}
```