//  https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
    let arr = str.toLowerCase().split("")
    let x = arr.reduce((dict, e) => {
        if (dict[e] === undefined) {
            dict[e] = 0
        }
        else {
            return false
        }
        return dict
    },{})
    return x === false? false : true
}
console.log(isIsogram("ab"))