/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let prev = Number.MAX_VALUE
    let max = -Number.MAX_VALUE

    for (let i = 0; i < prices.length - 1; i++) {
        let difference
        if (prices[i] >= prev) continue
        prev = prices[i]
        for (let j = i + 1; j < prices.length; j++) {
            difference = prices[j] - prices[i]
            if (difference > max) max = difference
        }
    }

    return max < 0 ? 0 : max
};

