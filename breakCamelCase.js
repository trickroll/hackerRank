// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
    let ans =""
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase() && i !== 0) {
            ans += " "
        }
        ans += string[i]
    }
    return ans
}

console.log(solution("camelCasing"))