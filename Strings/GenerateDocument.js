/**
 * Determines if a document can be generated using the available characters.
 *
 * This function checks if the frequency of unique characters in the characters string
 * is greater than or equal to the frequency of unique characters in the document string.
 *
 * @param {string} characters - The string of available characters.
 * @param {string} document - The string representing the document to be generated.
 * @returns {boolean} - True if the document can be generated, false otherwise.
 *
 * @description:
 * You're given a string of available characters and a string representing a document that you need to generate.
 * Write a function that determines if you can generate the document using the available characters.
 * If you can generate the document, your function should return true; otherwise, it should return false.
 * You're only able to generate the document if the frequency of unique characters in the characters string is greater
 * than or equal to the frequency of unique characters in the document string.
 * The document that you need to create may contain any characters, including special characters, capital letters,
 * numbers, and spaces. You can always generate the empty string.
 *
 * @complexity
 * Analysis:
 * - Time Complexity: O(N + M), where N is the length of the characters string and M is the length of the document string.
 *   We iterate through both strings once to count the character frequencies.
 * - Space Complexity: O(K), where K is the number of unique characters in the characters string.
 *   We use a dictionary to store the character frequencies, which can have at most K unique characters.
 */
function generateDocument(characters, document) {
  const charactersCount = {};

  for (const character of characters) {
    if (!(character in charactersCount)) charactersCount[character] = 0;

    charactersCount[character]++;
  }

  for (const character of document) {
    if (!(character in charactersCount) || charactersCount[character] === 0)
      return false;

    charactersCount[character]--;
  }

  return true;
}

export { generateDocument };
