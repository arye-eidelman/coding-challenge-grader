# coding-challenge-grader

A function for running TypeScript/JavaScript leet code chalenges and logging all
the results to the console.

the grade function accepts your solution function, an array of test cases and an
optional options object

The test cases array should be in the format:

```typescript
type TestInputArgs = any[]
type TestResult = any
type TestCase = [TestInputArgs, TestResult]
type Solution = (...TestInputArgs) => TestResult
type grade = (solution, TestCase[]) => Promise<void>
```

For example if the chalenge is to get the square of the input number and you
wrote the following:

```typescript
import { grade } from "...";
const testCases: [[number], number][] = [
  [[1], 1],
  [[2], 4],
  [[3], 9],
  [[-3], 9],
];

function solution(n: number): number {
  return n * Math.abs(n);
}
grade(solution, testCases);
```

you'de get the following output:

[image placeholder]

```json
passed in 0 milliseconds
passed in 0 milliseconds
passed in 0 milliseconds
failed in 0 milliseconds
{ expected: 9, result: -9 }
3 of 4 passed
```
