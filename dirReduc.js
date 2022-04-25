//  https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
function dirReduc(arr){
    let act = arr.map(e => e.toUpperCase())
    let i = 1
    while ( i <= act.length - 1) {
        if ((act[i-1] === 'NORTH' && act[i] === 'SOUTH') || (act[i-1] === 'SOUTH' && act[i] === 'NORTH') || (act[i-1] === 'WEST' && act[i] === 'EAST') || (act[i-1] === 'EAST' && act[i] === 'WEST')) {
            act = act.slice(0, i - 1).concat(act.slice(i + 1))
            console.log('hi')
            i = 0
        }
        i++
    }
    return act
  }
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))