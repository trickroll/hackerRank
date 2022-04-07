function findEvenIndex(arr)
{
  let l = 0
  let r = 0
  if (arr.reduce((sum,e) => sum + e) - arr[0] === 0) {
      return 0
  }
  for (let i = 0; i < arr.length; i++) {
      l += arr[i]
      r = 0
      for (let j = i + 2; j < arr.length; j++) {
        r += arr[j]
      }
      if (l === r) {
          return i + 1
      }
  }
  return -1
}

console.log(findEvenIndex([1,2,3,4,5,6]))