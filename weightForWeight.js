// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
function orderWeight(strng) {
    const arr = strng.split(" ")

    function getSum(str) {
        const num = str.split("")
        return num.reduce((sum, e) => +e + sum, 0)
    }

    arr.sort((a, b) => {
        const diff = getSum(a) - getSum(b)
        return diff === 0 ? (a > b ? 1 : -1) : diff
    })
    return arr.join(" ")
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))