//  https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
    let ans =[]
    let zero = []
    arr.forEach(e => {
        if (e===0) {
            zero.push(e)
        }
        else {
            ans.push(e)
        }
    });
    ans = ans.concat(zero)
    return ans
  }

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))