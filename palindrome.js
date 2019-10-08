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

var str = "mim";
var strToArr = str.split('');
var copyArr = strToArr.slice();
var palindrome = [];
var count = 0;

function func(copyArr) {
    for (var i = 0; i < copyArr.length - 1;) {
        var j = copyArr.length - 1;
        for (; j > 0;) {
            if (copyArr[i] == copyArr[j]) {
                palindrome.push(copyArr[i]);
                palindrome.unshift(copyArr[j]);
                j--;
                i++;
            } else if (copyArr[i] != copyArr[j]) {
                count += 1;
                j--;
            }
        }
        i++;
    }
    if (count != 0) {
        palindrome = palindrome.slice(palindrome.length / 2);
        return palindrome;
    } else {
        return copyArr;
    }
}
func(copyArr);