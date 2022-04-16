// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words){
    if (words === "") {
        return ""
    }
    let ans = []
    let arr = words.split(" ")
    arr.forEach(e => {
        let i = e.match(/\d+/g).map(Number)
        ans[i-1] = e
    })

    return ans.join(" ")
  }

console.log(order("4of Fo1r pe6ople g3ood th5e the2"))