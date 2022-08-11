// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

function areYouPlayingBanjo(name) {
    const first = name[0]
    if (first === 'R' || first === 'r') {
        return name + ' plays banjo'
    } 
    else {
        return name + ' does not play banjo'
    }
  }

console.log(areYouPlayingBanjo('Adam'))