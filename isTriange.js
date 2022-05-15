// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

function isTriangle(a,b,c){
   return (a + b > c) && (a + c > b) && (b + c > a)
}


console.log(isTriangle(7,2,2))