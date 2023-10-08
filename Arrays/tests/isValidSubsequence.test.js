import { isValidSubsequence } from "../IsValidSubsequence.js";

test("isValidSubsequence", () => {
  const output = isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [1, 6, -1, 10]
  );
  expect(output).toBeTruthy();
});
