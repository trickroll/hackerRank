// https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript
function rot13(str) {
    const dict = {
        'n':'a',
        'o':'b',
        'p':'c',
        'q':'d',
        'r':'e',
        's':'f',
        't':'g',
        'u':'h',
        'v':'i',
        'w':'j',
        'x':'k',
        'y':'l',
        'z':'m',
        'a':'n',
        'b':'o',
        'c':'p',
        'd':'q',
        'e':'r',
        'f':'s',
        'g':'t',
        'h':'u',
        'i':'v',
        'j':'w',
        'k':'x',
        'l':'y',
        'm':'z',
    }
    const arr = str.split("")
    const letters = /^[A-Za-z]+$/
    let ans = arr.map(element => {
        let rep
        if (!letters.test(element)) {
            return element
        }
        if (element === element.toLowerCase()) {
            rep = dict[element]
        }
        else {
            rep = dict[element.toLowerCase()].toUpperCase()
        }
        return rep
    });
    return ans.join("")
}

console.log(rot13("EBG13 rknzcyr"))