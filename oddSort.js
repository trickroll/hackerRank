// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
    let odd = []
    let all = []
    array.forEach(e => {
        if (e % 2 !== 0) {
            odd.push(e)
            all.push(null)
        }
        else {
            all.push(e)
        }
    });
    console.log(odd)
    odd.sort((a,b) => a- b)
    all.forEach((e,i) => {
        if (e === null) {
            all[i] = odd.shift()
        }
    })
    return all
  }

console.log(sortArray([5, 3, -1, 8, 0]))