// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    let maxPrice = 0
    for (let i = 0; i < prices.length; i++) {
        let buy = prices[i]
        let newPrices = prices.slice(i).filter(e => e > buy)
        // console.log(newPrices)
        for (let j = 0; j < newPrices.length; j++) {
            let sell = newPrices[j]
            let price = sell - buy
            // console.log(`buy: ${buy} sell: ${sell} i: ${i}`)
            maxPrice = Math.max(maxPrice, price)
        }
    }
    return maxPrice
};

console.log(maxProfit([7,1,5,3,6,4]))