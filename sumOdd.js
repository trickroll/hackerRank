// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
	let start = 1
    let end
    let ans = 0
    for (let i = 1; i <= n; i++) {
        start += (2 * (i - 1))
        end = start + (2 * (i))
    }
    // console.log(start)
    for (let j = start; j < end; j += 2) {
        ans += j
        // console.log(ans)
    }
    return ans
}

console.log(rowSumOddNumbers(3))