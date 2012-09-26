
var isPrime = function(n) {
  if (n <= 0) { return false; }
  if (n < 2) { return false; }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { return false; }
  }
  return true;
};

var sum = 0;
for (var i = 0; i < 2000000; i++) {
  sum += (isPrime(i) ? i : 0);
}
console.log(sum);
