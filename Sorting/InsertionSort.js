/**
 * Sorts an array in ascending order using the Insertion Sort algorithm.
 *
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - The sorted array.
 *
 * @description
 * Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.
 * It works by repeatedly taking an unsorted element and inserting it into its correct position within the sorted part of the array.
 *
 * @complexity
 * Time complexity:
 *   - Best-case time complexity: O(n) - This occurs when the input array is already sorted, and the algorithm only needs to make one pass through the array to determine that no swaps are needed.
 *   - Average-case time complexity: O(n^2) - In typical scenarios, where the input data is not in any particular order, the algorithm performs comparisons and swaps, leading to a quadratic time complexity.
 *   - Worst-case time complexity: O(n^2) - The worst-case scenario happens when the input array is sorted in reverse order, causing the maximum number of comparisons and swaps.
 * Space complexity: O(1) - Constant space complexity, as the sorting is done in-place.
 */
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // Store the current element to be inserted
    const currentElement = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than currentElement one position ahead of their current position
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the currentElement in its correct position
    arr[j + 1] = currentElement;
  }
  return arr;
}

export { insertionSort };
