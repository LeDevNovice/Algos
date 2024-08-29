# Stop gninnipS My sdroW!
```typescript
export function spinWords(words: string): string {
  
 return words.split(" ").map((word : string) => {
   return  word.length >= 5 ? word.split("").reverse().join("") : word
   }).join(" ")  
  }
}
```