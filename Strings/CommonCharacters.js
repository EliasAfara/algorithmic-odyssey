/**
 * Finds characters that are common to all strings in the input array, ignoring multiplicity.
 *
 * @param {string[]} strings - An array of strings to compare.
 * @returns {string[]} An array of common characters in the input strings.
 */
function commonCharacters(strings) {
  // Create an object to store character counts.
  const charCounts = {};

  // Iterate through each string in the input array.
  for (const string of strings) {
    // Create a set of unique characters in the current string.
    const uniqueStringCharacters = new Set(string);

    // Update character counts for each character in the set.
    for (const character of uniqueStringCharacters) {
      if (!(character in charCounts)) {
        charCounts[character] = 0;
      }
      charCounts[character]++;
    }
  }

  // Initialize an array to store the final common characters.
  const finalCharacters = [];

  // Iterate through the character counts object.
  for (const [character, count] of Object.entries(charCounts)) {
    // If a character's count is equal to the number of strings, add it to the final array.
    if (count === strings.length) {
      finalCharacters.push(character);
    }
  }

  // Return the array of common characters.
  return finalCharacters;
}

export { commonCharacters };

/**
 * @description
 * The `commonCharacters` function takes an array of strings and finds characters that are common to all strings
 * in the input array. It creates a character count object to track the occurrence of characters in the strings
 * and then identifies characters with counts equal to the number of input strings.
 *
 * @complexity
 * Time Complexity: O(N * M) where N is the number of strings in the input array and M is the average length of strings.
 *   - The loop over the input strings takes O(N) time.
 *   - The inner loop over unique characters in each string takes O(M) time in the worst case.
 *   - Constructing the final character array takes O(K) time, where K is the number of common characters.
 *   - Overall, the time complexity is O(N * M).
 * Space Complexity: O(C) where C is the number of unique characters common to all strings.
 *   - The space required for the character count object is proportional to the number of unique characters.
 *   - The space used for the final character array also depends on the number of common characters.
 *   - Overall, the space complexity is O(C).
 */
