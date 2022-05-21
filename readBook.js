// https://www.codewars.com/kata/570c560c15944a98e9000fd2/train/javascript

function sc(w){
    let m = 0, d = {}, a = w.toLowerCase().replace(/[^a-z\s]/gi, '').split(" ")
    a.forEach(e => {
        m += !d[e] ? e.length : 1
        d[e] = 1
    })
    return m
  }

console.log(sc("Related Articles: Ruby Environment, Coffee Script Environment, Java Script Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment."))