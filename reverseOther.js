// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
function reverse(str){
    const startArr = str.split(" ")
    const endArr = startArr.map((e, i) => {
        let word = e
        if (i%2 === 1) {
            word = e.split("").reverse().join("")
        }
        return word
    })
    const ans = endArr.join(" ").trim()
    return ans
  }

console.log(reverse(" "))