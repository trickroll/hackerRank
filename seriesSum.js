// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
function SeriesSum(n)
{
    const start = 1.00
    let i = 0
    ans = 0
    while (i < n) {
        ans += (1 / (start + (3 * i)))
        i++
    }


    return (Math.round(ans * 100) / 100.00).toFixed(2).toString()
}
console.log(SeriesSum(1))