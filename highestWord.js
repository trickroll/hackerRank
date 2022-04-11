function high(x){
    const arr = x.split(" ")
    const obj = {
        'a' : 1,
        'b' : 2,
        'c' : 3,
        'd' : 4,
        'e' : 5,
        'f' : 6,
        'g' : 7,
        'h' : 8,
        'i' : 9,
        'j' : 10,
        'k' : 11,
        'l' : 12,
        'm' : 13,
        'n' : 14,
        'o' : 15,
        'p' : 16,
        'q' : 17,
        'r' : 18,
        's' : 19,
        't' : 20,
        'u' : 21,
        'v' : 22,
        'w' : 23,
        'x' : 24,
        'y' : 25,
        'z' : 26,
    }
    let max = 0
    let ans = ''
    let temp = 0
    arr.forEach(e => {
        temp = 0
        for (let i = 0; i < e.length; i++) {
            temp += obj[e[i]]
        }
        if (temp > max) {
            max = temp
            ans = e
        }
    });
    return ans
}

console.log(high('aa b'))