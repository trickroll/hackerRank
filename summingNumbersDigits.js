function sumDigits(number) {
    let arr = number.toString().split("")
    let numArr = arr.filter(e => e !== "-")
    return numArr.reduce((sum, e) => sum + Number(e), 0)
}

console.log(sumDigits(-11))





