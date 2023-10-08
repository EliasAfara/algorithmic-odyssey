import { twoNumberSum } from "../TwoNumberSum.js";

test("twoNumberSum", () => {
  const output = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  expect(output.length === 2).toBeTruthy();
  expect(output.includes(11)).toBeTruthy();
  expect(output.includes(-1)).toBeTruthy();
});
