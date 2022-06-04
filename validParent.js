// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
    let cntr = 0
    for (let i = 0; i <parens.length; i++){
        if (parens[i] === "(") {
            cntr++
        }
        else {
            cntr--
        }
        if (cntr <0) {
            return false
        }
    }
    return cntr === 0 ? true : false
  }
console.log(validParentheses( "("))