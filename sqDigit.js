// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    const arr = num.toString().split("")
    const newArr = arr.map(e => Math.pow(+e,2)).join("")
    return +newArr;
  }

console.log(squareDigits(3212))