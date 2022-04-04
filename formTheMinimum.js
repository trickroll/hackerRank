// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
function minValue(values){
    let sortedVal =  values.sort((a,b) => a - b)
    let dedupe = new Set(sortedVal)
    return Number(Array.from(dedupe).join(""))
  }

console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]))