// Given an array, nums, of n integers, find all unique triplets(three numbers, a, b, & c) in nums such that a + b + c = 0.
// Note that there may not be any triplets that sum to zero in nums, and that the triplets must not be duplicates.

// Example:
// Input: nums = [0, -1, 2, -3, 1]
// Output: [0, -1, 1], [2, -3, 1]
// Here's a starting point:

// class Solution(object):
//   def threeSum(self, nums):
//     # Fill this in.

// # Test Program
// nums = [1, -2, 1, 0, 5]
// print(Solution().threeSum(nums))
// # [[-2, 1, 1]]

// вернуть все возможные массивы из трёх цифр, которые в сумме дают ноль

var arr = [0, 0, 0, 2, 3, -3, -1, 0, 4, -2];

function sum(arr) {
    let sumZeroArr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    var everyZeroArr = [];
                    everyZeroArr.push(arr[i]);
                    everyZeroArr.push(arr[j]);
                    everyZeroArr.push(arr[k]);
                    const sortedArr = everyZeroArr.sort((a, b) => a - b);
                    sumZeroArr.push(sortedArr);
                }
            }
        }
    }
    let existCombinations = {};
    const res = sumZeroArr.filter(function (arr) {
        if (existCombinations[`${arr[0]}:${arr[1]}:${arr[2]}`]) { // Проверяю был ли раньше такой элемент "013" 0 12 2, 0 1 22 = 0122, 0:12:2
            return false; // если элемент был удаляю
        }
        existCombinations[`${arr[0]}:${arr[1]}:${arr[2]}`] = true;// запоминаю что такой элемент был
        return true; // Если не был оставляю
    })
    return res;
}
sum(arr);