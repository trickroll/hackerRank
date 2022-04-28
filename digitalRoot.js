// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
    // ...
    let arr = String(n).split("")
    let tot = 0
    while (arr.length > 1) {
        tot = arr.reduce((acc, e) => acc + +e,0)
        arr = String(tot).split("")
    }
    return tot
  }

console.log(digital_root(493193))