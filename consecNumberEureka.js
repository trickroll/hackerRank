// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
  let ans = []
  for (let i = a; i <= b; i++) {
    if (i === digPow(i)) {
      ans.push(i)
    }
  }
  return ans
}

function digPow(num) {
    let arr = num.toString().split("")
    let sum = 0

    arr.forEach((e, i) => {
      sum += (+e)**(i+1)
    });
    return sum
}

console.log(sumDigPow(1, 100))