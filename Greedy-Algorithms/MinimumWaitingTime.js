/**
 * Calculates the minimum amount of total waiting time for a set of queries.
 *
 * @description
 * Given a non-empty array of positive integers representing the amounts of time that specific queries take to execute, this function computes the minimum total waiting time that would occur if the queries were executed in an order that minimizes waiting time.
 *
 * The waiting time for a query is defined as the total time it must wait before its execution starts, considering all preceding queries. The function sorts the input array of query durations in ascending order to minimize waiting time and then iterates through the queries, calculating the waiting time for each query based on the cumulative duration of previous queries.
 *
 * @param {number[]} queries - An array of positive integers representing the durations of queries to be executed.
 * @returns {number} - The minimum total waiting time for the given queries.
 *
 * @complexity
 * The time complexity of this function is O(n log n) due to the sorting operation (where 'n' is the number of queries). The subsequent loop runs in O(n) time. Thus, the overall time complexity is dominated by the sorting step, O(n log n).
 *
 * The space complexity is O(1), as the function uses a constant amount of additional space for variables and does not create any new data structures.
 *
 * @mutatesInput
 * The function mutates the input array 'queries' by sorting it in ascending order. If you need to preserve the original order of the queries, make a copy of the array before calling this function.
 */
function minimumWaitingTime(queries) {
  // Sort the queries in ascending order to minimize waiting time.
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;

  // Calculate waiting time for each query and accumulate the total waiting time.
  for (let i = 1; i < queries.length; i++) {
    let currentQueryDuration = queries[i - 1];
    let queriesLeft = queries.length - i;
    totalWaitingTime += queriesLeft * currentQueryDuration;
  }

  return totalWaitingTime;
}

export { minimumWaitingTime };
