// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
function anagrams(word, words) {
    const ans =[]
    let check = word.split("")
    words.forEach(e => {
        let remainder = e.split("").filter(n => !check.includes(n))
        if (remainder.length === 0) {
            ans.push(e)
        }
    });
    return ans
}
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))