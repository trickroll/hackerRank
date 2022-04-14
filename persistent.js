function persistence(num) {
    let ans = 0
    let mult = String(num).split("")
    while (mult.length !== 1) {
        let cnt = 1
        ans += 1
        mult.forEach(element => {
            cnt *= +element
        });
        mult = String(cnt).split("")
    }
    return ans
 }

 console.log(persistence(4))