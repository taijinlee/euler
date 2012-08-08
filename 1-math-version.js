
var max = 1000 - 1;

var sumToN = function(n) {
  return (n*(n+1))/2;
}
var sum3Multiples = 3 * sumToN(Math.floor(max / 3));
var sum5Multiples = 5 * sumToN(Math.floor(max / 5));
var sum15Multiples = 15 * sumToN(Math.floor(max / 15));
console.log(sum3Multiples + sum5Multiples - sum15Multiples);
