function digPow(n, p){
    // ...
    let arr = n.toString().split("")
    const red = arr.reduce((sum, e, i) => {
        sum = sum + Math.pow(+e, p+i)
        return sum
    }, 0)
    if (red%n === 0) {
        return red/n
    }
    else {
        return -1
    }
  }

console.log(digPow(46288,3))