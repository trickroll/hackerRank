// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s){
    let upper = 0, lower = 0
    for (let i = 0; i<s.length; i++) {
        if (s[i] >= "A" && s[i] <= "Z") {
            upper++
        }
        else {
            lower++
        }
    }
    if (upper > lower) {
        return s.toUpperCase()
    }
    else {
        return s.toLowerCase()
    }
}

console.log(solve("codE"))