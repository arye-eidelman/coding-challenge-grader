# coding_challenge_grader

A function for running TypeScript/JavaScript leet code chalenges.

Runs on deno.

The grade function accepts your solution function, an array of test cases and an
optional options object.

The test cases array should be in the format:

```typescript
Array<{
  name?: string;
  input: any[],
  output: any
}>
```

For example if the chalenge is to get the square of the input number and you
wrote the following:

```typescript
import { grade } from "https://deno.land/x/coding_challenge_grader@v0.2.0/mod.ts";
const testCases: { input: [number]; output: number }[] = [
  [{ input: [1], output: 1 }],
  [{ input: [2], output: 4 }],
  [{ input: [3], output: 9 }],
  [{ input: [-3], output: 9, name: "negetive inputs" }],
];

function solution(n: number): number {
  return n * Math.abs(n);
}
grade(solution, testCases);
```

you'de get the following output:

![passed in 0 milliseconds
passed in 0 milliseconds
passed in 0 milliseconds
failed in 0 milliseconds
{ expected: 9, result: -9 }
3 of 4 passed](./example-result.png)
