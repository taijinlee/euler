
var fib = function(n) {
  if (n === 1) { return 1; }
  if (n === 2) { return 2; }
  return fib(n-1) + fib(n-2);
}

var i = 1;
var sum = 0;

while (true) {
  var fibI = fib(i);
  if (fibI > 4000000) {
    break;
  }
  if (fibI % 2 === 0) {
    sum += fibI;
  }
  i++;
}

console.log(sum);
