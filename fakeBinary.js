//  https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x){
    let ans = []
    x.split('').forEach(e => {
        if (+e > 4) {
            ans.push('1')
        }
        else {
            ans.push('0')
        }
    });
    return ans.join('')
}

console.log(fakeBin('45385593107843568'))