// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// не решённое:

// первый вариант:

var firstNumArr = [2, 4, 3];
var secondNumArr = [5, 6, 4];
var full = [];

let strFirst = firstNumArr.join('');
let strSecond = secondNumArr.join('');
let sum = (+strFirst) + (+strSecond);
var strNow = String(sum);
var separatedStr = strNow.split('');
separatedStr.forEach(function (item, index, separatedStr) {
    var num = Number(item);
    full.push(num);
});
full.reverse();
console.log(full);

// второй вариант:

var l1 =
{
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null,
        }
    }
};

var l2 =
{
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null,
        }
    }
};

var addTwoNumbers = function (firstNumLinkedList, secondNumLinkedList) {
    var full = [];
    let strFirst = firstNumLinkedList.join('');
    let strSecond = secondNumLinkedList.join('');
    let sum = (+strFirst) + (+strSecond);
    var strNow = String(sum);
    var separatedStr = strNow.split('');
    separatedStr.forEach(function (item, index, separatedStr) {
        var num = Number(item);
        full.push(num);
    });
    full.reverse();
    return full;
};

addTwoNumbers(l1, l2);

// третий вариант:

var l1 =
{
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null,
        }
    }
};

var l2 =
{
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null,
        }
    }
};

var addTwoNumbers = function (firstNumLinkedList, secondNumLinkedList) {
    debugger;
    var full = [];
    let strFirst = firstNumLinkedList.join('');
    let strSecond = secondNumLinkedList.join('');
    let sum = (+strFirst) + (+strSecond);
    var strNow = String(sum);
    var separatedStr = strNow.split('');
    separatedStr.forEach(function (item, index, separatedStr) {
        var num = Number(item);
        full.push(num);
    });
    full.reverse();
    return full;
};

addTwoNumbers(l1, l2);
