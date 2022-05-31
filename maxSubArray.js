// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

function maxSequence(arr){
    let ans =0, sum = 0, min = 0
    arr.forEach((e, i) => {
        sum += e
        min = Math.min(sum, min)
        ans = Math.max(ans, sum - min)
        console.log(`e: ${e}, sum: ${sum}, min: ${min}, ans: ${ans}`)   
    });
    // for (let i = 0; i < arr.length; ++i) {

    return ans
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))