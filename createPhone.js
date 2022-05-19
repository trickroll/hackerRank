// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers){
    let ans = "("
    numbers.forEach( e => {
        if (ans.length === 4) {
            ans += ") "
        }
        else if (ans.length === 9) {
            ans += "-"
        }
        ans += e
    });
    return ans
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))