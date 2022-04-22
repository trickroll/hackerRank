//  https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript


function expandedForm(num) {
    // Your code here
    const numStr = String(num).split("")
    let ans = []
    for (let i = numStr.length - 1 ; i >= 0; i--) {
        let zeroPad = ''
        while (zeroPad.length <= numStr.length - i - 2) {
            zeroPad += '0'
        }
        ans.unshift([+`${numStr[i]}${zeroPad}`])
    }
    ans = [].concat.apply([], ans)
    ans = ans.filter(e => e!==0)
    return ans.join(" + ")
  }

console.log(expandedForm(70304))