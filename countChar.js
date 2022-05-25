// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count (string) {  
    // The function code should be here
    let ans = {};
    const arr = string.split("")
    arr.forEach( e => {
        if(!ans[e]) {
            ans[e] = 0
        }
        ans[e]++
    });

    return ans
  }

console.log(count(''))