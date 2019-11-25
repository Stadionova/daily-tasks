// You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.

// Example:
// Given [4, 7, 1 , -3, 2] and k = 5,
// return true since 4 + 1 = 5.

// def two_sum(list, k):
//   # Fill this in.

// print two_sum([4,7,1,-3,2], 5)
// # True

// Try to do it in a single pass of the list.

let arr = [4, 7, 1, -3, 2];
let target = 5;

function find(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return true;
            }
        }
    }
    return false;
}

find(arr, target); // true