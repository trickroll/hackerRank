// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript
function listSquared(m, n) {
    const ans = []
    function findFactors(x) {
        let factors = []
        for (let i =1; i < x ** (0.5); i++) {
            if (x % i === 0) {
                factors.push(i)
                factors.push(x/i)
            }
        }
        if (x === 1) {
            factors.push(x)
        }
        let tot = factors.reduce((acc,e) => acc + (e*e))
        let sqrt = Math.sqrt(tot)
        if (sqrt % 1 === 0) {
            ans.push([x, tot])
        }
    }
    for (let i = m; i <= n; i++) {
        findFactors(i)
    }

    return ans
}
console.log(listSquared(250, 500))