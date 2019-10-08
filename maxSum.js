// You are given an array of integers. Find the maximum sum of all possible contiguous subarrays of the array.
// Example: [34, -50, 42, 14, -5, 86]
// Given this input array, the output should be 137. The contiguous subarray with the largest sum is [42, 14, -5, 86].
// Your solution should run in linear time.
// Here's a starting point:
// def max_subarray_sum(arr):
//   # Fill this in.
// print max_subarray_sum([34, -50, 42, 14, -5, 86])
// # 137

// найти непрерывный подмассив с наибольшей суммой равен [42, 14, -5, 86]

var arr = [34, 50, 42, -14, 5, -86];
var newArr = [];

function func(arr) {
    for (var j = 0; j < arr.length; j++) {
        var currentStart = arr[j];
        for (var i = j + 1; i < arr.length; i++) {
            currentStart += arr[i];
            newArr.push(currentStart);
        }
        currentStart = 0;
    }
    var sorted = newArr.sort(function (a, b) {
        return b - a;
    });
    return sorted[0];
}
func(arr);