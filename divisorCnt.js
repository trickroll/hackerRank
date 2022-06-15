// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n){
    let ans = 0
    for (let i = 1 ; i <= n; i++) {
        if (n % i === 0 ) {
            ans++
            console.log(i)
        }
    }
    return ans
}

console.log(getDivisorsCnt(4))