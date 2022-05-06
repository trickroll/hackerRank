// https://www.codewars.com/kata/54df2067ecaa226eca000229/train/javascript
function f(n){
    //insert your code here.... and go crazy!
    if (typeof n !== 'number' || Math.round(n) !== n|| n<=0) {
        return false
    }
    let ans = 0
    for (let i = n; i > 0; i--) {
        ans += i
    }
    return ans
};

console.log(f())