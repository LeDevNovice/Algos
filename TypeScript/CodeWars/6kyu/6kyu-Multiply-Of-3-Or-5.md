# Multiply of 3 or 5
```typescript
export class Challenge {
  static solution(number: number) {
    let sum = 0;
    
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0) sum += i;
      else if (i % 5 === 0 && i % 3 !== 0) sum += i;
    }
    
    return sum;
  }
}
```

_There seems to have a solution that involve some mathematics knowledge with arithmetic progression and improve readability and avoir the use of a for loop. That is some knowledge that I dont have and can be helpful at some time to have some solution like this at some problems._