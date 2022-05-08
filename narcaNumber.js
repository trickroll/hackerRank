// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
    // Code me to return true or false
    const cnt = value.toString().length
    const arr = value.toString().split("")
    const tot = arr.reduce((sum, e) => {
        sum += Math.pow(+e, cnt)
        return sum
    }, 0)
    return value === tot
  }

console.log(narcissistic(371))