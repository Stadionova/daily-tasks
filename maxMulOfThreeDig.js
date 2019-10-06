// You are given an array of integers. Return the largest product that can be made by multiplying any 3 integers in the array.
// Example:
// [-4, -4, 2, 8] should return 128 as the largest product can be made by multiplying -4 * -4 * 8 = 128.
// Here's a starting point:
// def maximum_product_of_three(lst):
//   # Fill this in.
// print maximum_product_of_three([-4, -4, 2, 8])
// # 128

// нужно вернуть самое большое число, которое является результатом умножения трёх цифр массива

// длинное решение

var arr = [4, 5, 1];
var newArray = arr.slice();
var minusArr = [];
var plusArr = [];

if (newArray.length == 3) { // длина массива == 3
    var sorted = newArray;
    mulArrElem(sorted);
    console.log('first ' + sorted); // актуально
} else {
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] < 0) {
            minusArr.push(newArray[i]);
        } else {
            plusArr.push(newArray[i]);
        }
    }

    if (plusArr.length <= 1 && minusArr.length != newArray.length) { // одно положительное
        var minus = minusArr.sort(function (a, b) {
            return a - b;
        });
        minus = minus.slice(0, 2);

        var plused = plusArr.sort(function (a, b) {
            return b - a;
        });
        plused = plused.slice(0, 1);

        var sorted = minus.concat(plused);
        // console.log('fourth ' + sorted); // актуально
        mulArrElem(sorted);
    } else if (plusArr.length == newArray.length) { // все положительные
        var sorted = newArray.sort(function (a, b) {
            return b - a; // [-4,- 2, 8, 4]
        });
        // console.log('fifth ' + sorted); // актуально
        mulArrElem(sorted);
    } else if (minusArr.length == newArray.length) { // если все отрицательные
        var sorted = newArray.sort(function (a, b) {
            return b - a; // [-4,- 2, 8, 4]
        });
        // console.log('sixth ' + sorted); // актуально
        mulArrElem(sorted);
    } else if (minusArr.length % 2 == 0 && plusArr.length > 1 || plusArr.length == 0) { // чётное количество отрицательных
        var minus = minusArr.sort(function (a, b) {
            return a - b;
        });
        var plused = plusArr.sort(function (a, b) {
            return b - a;
        });
        var concated = minus.concat(plused);
        var concatedThree = concated.slice(0, 3);
        var mulConcated = 1;
        for (var i = 0; i < concatedThree.length; i++) {
            mulConcated *= concatedThree[i];
        }
        var mulPlussArr = 1;
        for (var i = 0; i < plused.length; i++) {
            mulPlussArr *= plused[i];
        }
        if (mulConcated > mulPlussArr) {
            sorted = concated;
        } else {
            sorted = plused;
        }
        // console.log('seven ' + sorted); // актуально
        mulArrElem(sorted);
    } else if (minusArr.length == 1 || minusArr.length == 0) { // одно отрицательное
        var sorted = plusArr.sort(function (a, b) {
            return Math.abs(b) - Math.abs(a);
        });
        // console.log('eight ' + sorted); // актуально
        mulArrElem(sorted);
    } else if (minusArr.length % 2 != 0) { // нечётное количество отрицательных
        var minus = minusArr.sort(function (a, b) {
            return a - b;
        });
        minus = minus.slice(0, 2);
        var plused = plusArr.sort(function (a, b) {
            return b - a;
        });
        plused = plused.slice(0, 1);
        var sorted = plused.concat(minus);
        // console.log('nine ' + sorted); // актуально
        mulArrElem(sorted);
    }
}

function mulArrElem(sorted) {
    sorted = sorted.slice(0, 3);
    var mul = 1;
    for (var i = 0; i < sorted.length; i++) {
        mul *= sorted[i];
    }
    return mul;
}

// короткое решение:

var arr = [4, -4, -2, -8, -9];
var newArray = arr.slice();
var mulArr = [];
for (var i = 0; i < newArray.length; i++) {
    for (var j = i + 1; j < newArray.length; j++) {
        for (var k = j + 1; k < newArray.length; k++) {
            var mul = 1;
            mul *= newArray[i] * newArray[j] * newArray[k];
            mulArr.push(mul);
        }
    }
}

var sorted = mulArr.sort(function (a, b) {
    return b - a;
});

sorted = sorted.slice(0, 3);
// console.log(sorted);
console.log(sorted[0]);