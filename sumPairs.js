//  https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
function sumPairs (ints, s) {
    // This object will keep track of the numbers seen and their first indexes
    // For an array like [42, 5, 5, 7] we will get { '42': 0, '5': 1, '7': 3 }
    const numbersSeen = {};
  
    for (let i = 0; i < ints.length; i += 1) {
      // For every number...
      const currentNumber = ints[i];
      // Find the pair it needs to add up to "s"
      const pair = s - currentNumber;
  
      // If we've seen the pair before, we have our best set of numbers!
      if (numbersSeen[pair] !== undefined) {
        return [ pair, currentNumber ];
      }
  
      // Otherwise save this number's index if we haven't seen it before
      if (numbersSeen[currentNumber] === undefined) {
        numbersSeen[currentNumber] = i;
      }
    }
  
    // Return "null" if we find nothing after our loop
    return null;
}
console.log(sumPairs([5, 9, 13, -3], 10))
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))