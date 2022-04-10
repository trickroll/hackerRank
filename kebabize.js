function kebabize(str) {
    let newStr = str.replace(/\d+/g, '')
    let ans =newStr[0].toLowerCase()
    for (let i = 1; i < newStr.length; i++) {
        if (!newStr[i].match(/^[A-Za-z]+$/)) {
            
        }
        else if (newStr[i]===newStr[i].toUpperCase()) {
            ans += '-'
            ans += newStr[i].toLowerCase()
        }
        else {
            ans += newStr[i]
        }
    }
    return ans
  }

console.log(kebabize('myCamelCased3String'))