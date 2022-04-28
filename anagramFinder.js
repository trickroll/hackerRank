// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
function anagrams(word, words) {
    const ans =[]
    let check = word.split("").sort().join("")
    words.forEach(e => {
        if (check === e.split("").sort().join("")) {
            ans.push(e)
        }
    });
    return ans
}
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))