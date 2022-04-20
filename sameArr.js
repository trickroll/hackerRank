//  https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2){
    //your code here
    const arrSq = array1.map(e => e*e)
    if (array1 === null || array2 === null){
        return false
    }
    arrSq.forEach(element => {
        if (array2.includes(element)) {
            array2.splice(array2.indexOf(element), 1)
        }
        else {
            return false
        }
    });

    return (array2.length === 0) ? true : false
  }

const a = [121, 144, 19, 161, 19, 144, 19, 11] 
const b = [121, 14641, 20736, 361, 25921, 361, 20736]
console.log(comp(a, b))