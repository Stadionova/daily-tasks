// Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

// Example 1:
// Input: [3, 3, 2, 1, 3, 2, 1]
// Output: [1, 1, 2, 2, 3, 3, 3]
// def sortNums(nums):
//   # Fill this in.

// print sortNums([3, 3, 2, 1, 3, 2, 1])
// # [1, 1, 2, 2, 3, 3, 3]

// Challenge: Try sorting the list using constant space.

let arr = [3, 3, 2, 1, 3, 2, 1];
arr.sort(function(a, b) {
    return a - b;
}); // [1, 1, 2, 2, 3, 3, 3]