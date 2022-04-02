// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
function smallEnough(a, limit){
    let ans = a.filter(e => e <= limit)
    return ans.length === a.length
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))