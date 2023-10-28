/**
 * Returns the index of the first non-repeating character in a given string.
 * If there are no non-repeating characters, returns -1.
 *
 * @param {string} string - The input string to search for non-repeating characters.
 * @returns {number} - The index of the first non-repeating character, or -1 if none exist.
 *
 * @description
 * This function takes a string as input and finds the index of the first non-repeating character in the string. It uses two objects, 'characters' and 'repeatingChars,' to keep track of characters encountered in the string.
 * 'characters' stores characters that have not repeated yet, and 'repeatingChars' stores characters that have repeated. The function iterates through the string, updating these objects accordingly, and returns the index of the first non-repeating character found.
 *
 * @complexity
 * Time Complexity: O(n), where 'n' is the length of the input string. The function iterates through the string once to build the character objects.
 * Space Complexity: O(1), as the number of characters in the alphabet is constant (26 lowercase letters), and the 'characters' and 'repeatingChars' objects can store a limited number of unique characters.
 */
function firstNonRepeatingCharacter(string) {
  let index = -1;
  let characters = {};
  let repeatingChars = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in characters) {
      repeatingChars[char] = 1;
      delete characters[char];
    } else if (!(char in repeatingChars)) {
      characters[char] = i;
    }
  }

  if (Object.keys(characters).length > 0) {
    return Object.values(characters)[0];
  }

  return index;
}

export { firstNonRepeatingCharacter };
