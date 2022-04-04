//  https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
var uniqueInOrder=function(iterable){
    if (iterable.length === 0) {
        return []
    }
    else{        
        let ans = [iterable[0]]
        for (let i = 1; i < iterable.length; i++) {
            if (iterable[i] !== iterable[i-1]) {
                ans.push(iterable[i])
            }
        }
        return ans
    }
  }

  console.log(uniqueInOrder('AAAABBBCCDAABBB'))