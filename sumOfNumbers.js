function getSum( a,b )
{
  if (a>b) {
    [a,b] = [b,a] //destructuring swap
  }
  let ans = 0
  for (let i = a; i<=b;i++) {
    ans += i
  }
  return ans
}

console.log(getSum(0,2),3)