/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b); // Sort the input array

const result = []; // Initialize result array

// Recursive function to generate subsets
function generateSubsets(startIndex, currentSubset, nums) {
 result.push(currentSubset); // Add currentSubset to result array

 for (let i = startIndex; i < nums.length; i++) {
   // Skip duplicates
   if (i > startIndex && nums[i] === nums[i - 1]) {
     continue;
   }

   // Recursively generate subsets
   generateSubsets(i + 1, currentSubset.concat(nums[i]), nums);
 }
}

generateSubsets(0, [], nums); // Call the recursive function

return result; // Return the result array
};


console.log(subsetsWithDup([1, 2, 2])); // Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])); // Output: [[],[0]]
console.log(subsetsWithDup([-1, 2, -1])); // Output: [ [], [ -1 ], [ -1, -1 ], [ -1, -1, 2 ], [ -1, 2 ], [ 2 ] ]
module.exports = subsetsWithDup;