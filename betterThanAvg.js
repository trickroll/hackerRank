// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    const avg = classPoints.reduce((acc, e) => acc + e)/ classPoints.length
    return yourPoints > avg
  }
console.log(betterThanAverage([2, 3], 5))