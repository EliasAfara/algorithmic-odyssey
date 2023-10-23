/**
 * Encodes a given string using run-length encoding.
 *
 * Run-length encoding is a lossless data compression technique where runs of
 * consecutive identical characters are replaced with a count and the character itself.
 *
 * @param {string} string - The input string to be encoded.
 * @returns {string} - The run-length encoded string.
 *
 * @example
 * const input = "AAAAAAAAAAAAABBCCCCDD";
 * const encodedString = runLengthEncoding(input); // Output: "9A4A2B4C2D"
 *
 * @complexity
 * Time Complexity: O(n), where n is the length of the input string. We iterate through the string once.
 * Space Complexity: O(m), where m is the length of the encoded string. In the worst case, each character is encoded separately.
 */
function runLengthEncoding(string) {
  let encoded = [];
  let run = 1;

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (letter === string[i + 1] && run < 9) {
      run++;
    } else {
      encoded.push(`${run}${letter}`);
      run = 1;
    }
  }

  return encoded.join("");
}

export { runLengthEncoding };
