// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str){
    if (str.length % 2 === 1){
        str += '_'
    }
   const arr = []
   for (let i = 0; i < str.length - 1; i += 2) {
       arr.push(str[i] + str[i+1])
   }
   return arr
}

console.log(solution('abcdefg'))