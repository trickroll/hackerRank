// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
    let dict =A.reduce((obj,e) => {
      if (!obj[e]) {
          obj[e] = 0
      }
      obj[e]++
      return obj
    },{});
    for (let p in dict) {
        if ((dict[p] %2 !== 0 )|| dict[p] === 1){
            return Number(p)
        }
    }
  }

console.log(findOdd([1,1,2,2,3]))