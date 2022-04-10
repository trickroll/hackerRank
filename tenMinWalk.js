// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
const DIRECT = {
    'n' : [1,0],
    's' : [-1,0],
    'w' : [0,-1],
    'e' : [0,1]
}

function isValidWalk(walk) {
    let ans = [0,0]
    walk.forEach(e => {
        ans = [ans[0] + DIRECT[e][0], ans[1] + DIRECT[e][1]]
    });
    return (ans[0] === 0 && ans[1] === 0 && walk.length === 10) ?  true : false
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))