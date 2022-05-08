// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n){
    return +n.toString().split("").map(e => +e).sort((a,b) => b -a ).join("")
  }

console.log(descendingOrder(1235))