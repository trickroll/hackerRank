// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

function findLongest(array){
    let max = 0
    let ans = array[0]
    array.forEach((element) => {
        if (element.toString().length > max) {
            max = element.toString().length
            ans = element
        }
    });
    return ans
  }

console.log(findLongest([1, 10, 100]))