import { getNthFib } from "../NthFibonacci";

describe("getNthFib", () => {
  it("should return the correct Fibonacci number for a given position", () => {
    expect(getNthFib(0)).toBe(0);
    expect(getNthFib(1)).toBe(0);
    expect(getNthFib(2)).toBe(1);
    expect(getNthFib(3)).toBe(1);
    expect(getNthFib(4)).toBe(2);
    expect(getNthFib(5)).toBe(3);
    expect(getNthFib(6)).toBe(5);
    expect(getNthFib(7)).toBe(8);
    expect(getNthFib(8)).toBe(13);
    expect(getNthFib(9)).toBe(21);
    expect(getNthFib(10)).toBe(34);
    expect(getNthFib(15)).toBe(377);
    expect(getNthFib(20)).toBe(4181);
    expect(getNthFib(25)).toBe(46368);
    expect(getNthFib(30)).toBe(514229);
  });
});
