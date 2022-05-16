// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
    // your code
    let pop = p0
    let cnt = 0
    console.log(percent / 100 )
    while (pop < p) {
        cnt++
        pop = Math.floor(pop + (pop * percent / 100) + aug)
    }
    return cnt
}

console.log(nbYear(1500, 5, 100, 5000))