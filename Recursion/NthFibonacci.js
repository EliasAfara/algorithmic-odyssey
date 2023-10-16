/**
 * Get the nth Fibonacci number.
 *
 * @param {number} n - The position of the Fibonacci number to find.
 * @returns {number} - The nth Fibonacci number.
 *
 * @description
 * The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1,
 * and the nth number is the sum of the (n - 1)th and (n - 2)th numbers.
 *
 * For the purpose of this function, the first Fibonacci number is F0; therefore, getNthFib(1) is equal to F0,
 * getNthFib(2) is equal to F1, and so on.
 *
 * The function uses a recursive approach to calculate the Fibonacci number for a given position.
 *
 * @Complexity
 * The time complexity of this function is O(2^n), which makes it inefficient for large values of n.
 * This is because it recalculates Fibonacci numbers multiple times for the same values.
 */
function getNthFib(n) {
  if (n === 0) return 0;
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFib(n - 1) + getNthFib(n - 2);
}

export { getNthFib };
