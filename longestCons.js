function longestConsec(strarr, k) {
    const len = strarr.map(e => e.length)
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return ''
    }
    let max = 0
    let ans = ''
    for (let i = 0; i < len.length - k + 1; i++) {
        let sum = 0
        let hold = ''
        for (let j = 0; j < k; j++){
            sum += len[i+j]
            hold += strarr[i+j]
        }
        if (sum > max) {
            max = sum
            ans = hold
        }
    }
    return ans
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))