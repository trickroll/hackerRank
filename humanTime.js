// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable (seconds) {
    let sec = 0, min = 0, hr = 0

    hr = Math.floor(seconds / 3600, 0)
    min = Math.floor((seconds - 3600 * hr) / 60, 0)
    sec = (seconds - 3600 * hr - 60 * min) % 60

    function pad2(num) {
        return (num < 10) ? "0"+String(num) : String(num)
    }

    return pad2(hr) + ":" + pad2(min) + ":" + pad2(sec);
  }

console.log(humanReadable(59))