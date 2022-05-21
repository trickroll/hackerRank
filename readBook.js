// https://www.codewars.com/kata/570c560c15944a98e9000fd2/train/javascript

function sc(words){
    let min = 0
    const dict = {}
    const arr = words.toLowerCase().replace(/[^a-z\s]+/gi, '').split(" ")
    arr.forEach(e => {
        if (!dict[e]) {
            for (let _ = 0; _ < e.length; _++){
                min++
            }
            dict[e] = true
        }
        else {
            min += 1
        }
    });
    return min
  }

console.log(sc("Related Articles: Ruby Environment, Coffee Script Environment, Java Script Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment."))