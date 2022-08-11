// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
    let ans = Math.ceil(year / 100)
    return ans;
  }

console.log(century(1700))