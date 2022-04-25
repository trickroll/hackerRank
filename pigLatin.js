// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
    const arr = str.split(" ")
    let ans = arr.map( e => {
        if (e.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)) {
            return e
        }
        let word = e.slice(1) + e.slice(0,1) + 'ay'
        return word
    })
    return ans.join(' ')
  }

console.log(pigIt('Pig latin is cool !'))