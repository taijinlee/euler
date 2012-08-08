

var fib = (function() {
  var memoize = { 1: 1, 2: 2 };
  return function(n) {
    if (memoize[n] === undefined) {
      memoize[n] = fib(n-1) + fib(n-2);
    }
    return memoize[n];
  }
})();

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
