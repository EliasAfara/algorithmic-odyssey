/**
 * Check if a given string is a palindrome.
 *
 * @param {string} str - The input string to be checked for palindrome.
 * @returns {boolean} - True if the input string is a palindrome, false otherwise.
 *
 * @description
 * A palindrome is a string that reads the same forwards and backwards. This function
 * checks whether the input string is a palindrome, ignoring spaces, punctuation, and
 * letter casing. It handles single-character strings as palindromes as well.
 *
 * @complexity
 * - Time Complexity: O(n), where n is the length of the input string.
 *   The function iterates through the string once to check for palindromic properties.
 * - Space Complexity: O(1), as the function only uses a constant amount of extra memory.
 */
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleaned string is the same when reversed
  return str === str.split("").reverse().join("");
}

export { isPalindrome };
