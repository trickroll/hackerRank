//  https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number){
    if (number < 0) {
        return 0
    }
    const ans =[]
    for (let i = 0; i < number; i++) {
        if (i%3===0 || i%5===0) {
            ans.push(i)
        }
    }
    let mult = ans.reduce((acc,e) => acc + e, 0)
    return mult
}

console.log(solution(10))