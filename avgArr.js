// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    const sum = marks.reduce((s,e) => s + e)
    return Math.floor(sum / marks.length)
  }

console.log(getAverage([2,2,2,2]))