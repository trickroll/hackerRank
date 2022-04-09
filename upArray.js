//  https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/solutions/javascript
function upArray(arr){
    if (arr.length=== 0 || arr.filter(e => e<0).length>0 || arr.filter(e => e>9).length>0) {
        return null
    }
    let num = 0
    for (let i = 1; i <=arr.length; i++){
        num = arr[arr.length-i]
        if (num !== 9) {
            num++
            arr[arr.length-i] = num
            return arr
        }
        else {
            arr[arr.length-i] = 0
            if (i === arr.length) {
                arr.unshift(1)
                return arr
            }
        }
    }
    
  }

console.log(upArray([9,9,9]))