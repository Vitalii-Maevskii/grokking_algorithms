"use strict";

/**
 * Sums values in the array by loop "for"
 * @param {Array} array Array of numbers
 * @returns {total} Sum of the numbers
 */
function sum(array) {
  let total = 0;
  for (const value of arr) {
		total += value;
	}
  return total;
}

console.log(sum([1, 2, 3, 4])); // 10
