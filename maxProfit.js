// You are given an array.Each element represents the price of a stock on that particular day.
// Calculate and return the maximum profit you can make from buying and selling that stock only once.
// For example: [9, 11, 8, 5, 7, 10]
// Here, the optimal trade is to buy when the price is 5, and sell when it is 10, so the return value should be 5(profit = 10 - 5 = 5).
// Here's your starting point:
// def buy_and_sell(arr):
// #Fill this in.
// print buy_and_sell([9, 11, 8, 5, 7, 10])
// # 5

// найти максимальную прибыль
// например, покупаю за 9 и продать могу за любую сумму после 9 (самая выгодная продажа при покупке за 9 будет продать за 11)
// например, покупаю за 5 и самое выгодное будет продать за 10, прибыль получится == 5

var arr = [1, 2, 1, 2];
var profirArr = [];

function func(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var z = i + 1; z < arr.length; z++) {
            var nextPriseMinusPrev = arr[z] - arr[i];
            profirArr.push(nextPriseMinusPrev);
        }
    }
    var sorted = profirArr.sort(function (a, b) {
        return b - a;
    });
    return sorted[0];
}
func(arr);