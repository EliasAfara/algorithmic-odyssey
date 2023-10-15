/**
 * Encrypt a string using the Caesar Cipher.
 *
 * @param {string} string - The input string to be encrypted.
 * @param {number} key - The non-negative integer representing the shift value.
 * @returns {string} - The encrypted string obtained by shifting letters by the given key.
 *
 * @description
 * The Caesar Cipher is a simple encryption technique that shifts each letter in the
 * input string by 'key' positions in the alphabet. It wraps around the alphabet, so
 * shifting 'z' by 1 position results in 'a'. This function works with lowercase letters
 * and preserves non-alphabetic characters.
 *
 * @complexity
 * - Time Complexity: O(n), where n is the length of the input string.
 *   The function iterates through the string once to perform the character substitutions.
 * - Space Complexity: O(n), as the function builds a new string of the same length as
 *   the input string for the result.
 */
function caesarCipherEncryptor(string, key) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (/[a-z]/.test(char)) {
      // Convert the character to its ASCII code, subtract 97 to map 'a' to 0, add the key,
      // take the modulo 26 to ensure wrapping, and add 97 to get the ASCII code of the
      // resulting character. Then convert it back to a character.
      result += String.fromCharCode(
        ((char.charCodeAt(0) - 97 + key) % 26) + 97
      );
    } else {
      // Preserve non-alphabetic characters as they are
      result += char;
    }
  }

  return result;
}

export { caesarCipherEncryptor };
