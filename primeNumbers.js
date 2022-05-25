// https://www.codewars.com/kata/54d512e62a5e54c96200019e/solutions


function primeFactors(n){
  for (let i=2, res="",l f; i <= n; i++) {
    f=0;
    while (n%i == 0) {
        f++; n/=i 
    }
    res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
  }
  return res || "("+n+")"
}


console.log(primeFactors(7775460))