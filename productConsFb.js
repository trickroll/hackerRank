// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

function productFib(prod){
    // (1) create an array of FB numbers (2) check if product is above the prod
    let fb = [0,1,1]
    let i = 2
    let tot = fb[i-1] * fb[i]
    let ans = []
    while (tot < prod) {
        fb[i + 1] = fb[i - 1] + fb[i]
        tot = fb[i + 1] * fb[i]
        ans = [fb[i], fb[i + 1], tot === prod]
        i++
    }
    return ans
  }

console.log(productFib(84049690))