// import { red, yellow, green } from "https://deno.land/std@0.126.0/fmt/colors.ts";

export default async function grade<In extends Array<unknown>, Out>(
  fn: (...args: In) => Out,
  testCases: [In, Out][],
  { timeout } = { timeout: 1000 },
): Promise<void> {
  async function abortTimeout<T extends Array<unknown>, R>(
    time: number,
    fn: (...args: T) => R,
    args: Parameters<typeof fn>,
  ): Promise<R> {
    let isDone = false;
    const result = await Promise.resolve().then(() => {
      isDone = true;
      return fn(...args);
    });
    setTimeout(() => {
      if (!isDone) {
        return new Error("Timeout");
      }
    }, time);
    return result;
  }

  let passed = 0;
  for (const testCase of testCases) {
    const startTime = performance.now();
    const result = await abortTimeout(timeout, fn, testCase[0]);
    const endTime = performance.now();

    if (result === testCase[1]) {
      passed++;
      console.log(
        `%cpassed in ${endTime - startTime} milliseconds`,
        "color: #1f1",
      );
    } else {
      console.log(
        `%cfailed in ${endTime - startTime} milliseconds`,
        "color: #f44",
      );
      console.log({ expected: testCase[1], result: result });
    }
  }
  console.log(
    `%c${passed} of ${testCases.length} passed`,
    `color: #${passed === testCases.length ? "1f1" : "f44"}`,
  );
}
