/**
 * Determines whether the 'sequence' is a valid subsequence of the 'array'.
 *
 * A subsequence is a set of elements that appear in the same order in the 'array' but not necessarily adjacent.
 *
 * @param {number[]} array - The original array of integers.
 * @param {number[]} sequence - The sequence to be checked as a subsequence.
 * @returns {boolean} - True if 'sequence' is a valid subsequence of 'array'; otherwise, False.
 */
function isValidSubsequence(array, sequence) {
  let tempSequence = [...sequence];
  for (let i = 0; i < array.length; i++) {
    if (tempSequence[0] === array[i]) tempSequence.shift();
  }

  if (tempSequence.length === 0) return true;
  return false;
}

exports.isValidSubsequence = isValidSubsequence;
