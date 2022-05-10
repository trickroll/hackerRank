// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/javascript

function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 !== 0) {
        return -1;
    }
    else {
        let cond = true
        while (cond === true) {
            sq++
            if (Math.sqrt(sq) % 1 === 0) {
                return sq;
            }
        }
    }
  }

console.log(findNextSquare(120))