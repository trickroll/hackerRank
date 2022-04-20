//  https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
function solution(list){
    // TODO: complete solution 
    const ans = []
    let minTwo, minOne, curr
    for (let i = 2; i < list.length; i++) {
        minTwo = list[i-2]
        minOne = list[i-1]
        curr = list[i]

        if (!(minTwo + 1 === minOne && minOne + 1 === curr)) {
            ans.push(minTwo)
        }
    }
    return ans
   }

console.log(solution([-7, -5, -3, -2, -1]))