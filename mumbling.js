function accum(s) {
	let ans = ""
    for (let i = 0; i<s.length; i++) {
        for (let x = 1; x <= i+1; x++) {
            if (x===1) {
                ans += s[i].toUpperCase()
            }
            else {
                ans += s[i].toLowerCase()
            }
        }
        if (i + 1 !== s.length) {
            ans += "-"
        }
        
    }
    return ans
}
console.log(accum("abcd"))