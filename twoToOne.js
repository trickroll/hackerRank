// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
    // your code
    let str = s1 + s2
    let arr = str.split("").sort().filter((e, i, a) => {
        return a.indexOf(e) == i
    })
    return arr.join("")
  }

console.log(longest("aretheyhere", "yestheyarehere"))