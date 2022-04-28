// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers){
    //your code here
    const even = integers.filter(e => e% 2 === 0)
    const odd = integers.filter(e => e% 2 !== 0)
    return even.length === 1 ? even[0] : odd[0]
  }

console.log(findOutlier([0,0,3,0,0]))