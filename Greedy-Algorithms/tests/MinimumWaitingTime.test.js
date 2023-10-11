import { minimumWaitingTime } from "../MinimumWaitingTime";

describe("minimumWaitingTime", () => {
  it("calculates the minimum waiting time for queries in ascending order", () => {
    const queries = [1, 4, 5];
    const result = minimumWaitingTime(queries);
    expect(result).toBe(6);
  });

  it("calculates the minimum waiting time for queries in descending order", () => {
    const queries = [5, 4, 1];
    const result = minimumWaitingTime(queries);
    expect(result).toBe(6);
  });

  it("calculates the minimum waiting time for queries in random order", () => {
    const queries = [4, 1, 5];
    const result = minimumWaitingTime(queries);
    expect(result).toBe(6);
  });

  it("calculates the minimum waiting time for a single query", () => {
    const queries = [7];
    const result = minimumWaitingTime(queries);
    expect(result).toBe(0);
  });

  it("calculates the minimum waiting time for an empty array of queries", () => {
    const queries = [];
    const result = minimumWaitingTime(queries);
    expect(result).toBe(0);
  });
});
