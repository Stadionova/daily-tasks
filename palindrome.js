// A palindrome is a sequence of characters that reads the same backwards and forwards.
// Given a string, s, find the longest palindromic substring in s.

// Example:
// Input: "banana"
// Output: "anana"
// Input: "million"
// Output: "illi"

// class Solution: 
//     def longestPalindrome(self, s):
//       # Fill this in.

// # Test program
// s = "tracecars"
// print(str(Solution().longestPalindrome(s)))
// # racecar

var str = "banana";
var strToArr = str.split('');
var copyArr = strToArr.slice();
var palindrome = [];

function func(copyArr) {
    for (var i = 0; i < copyArr.length;) {
        var j = copyArr.length - 1;
        for (; j > i;) {
            if (copyArr[i] == copyArr[j]) {
                palindrome.push(copyArr[i]);
                j--;
                i++;
                if (i == j) {
                    palindrome.push(copyArr[i]);
                }
            } else if (copyArr[i] != copyArr[j]) {
                j--;
            }
        }
        i++;
    }
    if (palindrome.length % 2 == 0) {
        var copyPalindrome = palindrome.slice();
        var reversedArr = copyPalindrome.reverse();
        var twoArr = palindrome.concat(reversedArr);
        return twoArr;
    } else {
        var copyPalindrome = palindrome.slice(1);
        var twoArr = palindrome.concat(copyPalindrome);
        return twoArr;
    }
}
func(copyArr);