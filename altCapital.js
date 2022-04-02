// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

function capitalize(s){
    let even = '', odd = ''
    for (let i = 0; i < s.length; i++) {
        if (i%2===0){
            even += s[i].toUpperCase()
            odd += s[i].toLowerCase()
        }
        else {
            even += s[i].toLowerCase()
            odd += s[i].toUpperCase()
        }
    }
    return [even, odd];
  };

console.log(capitalize("abcdef"))