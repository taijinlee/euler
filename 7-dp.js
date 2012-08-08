
// only works for n > 2
var primes = [];
var isPrime = function(n) {
  for (var i = 0; i < primes.length; i++) {
    if (n % primes[i] === 0) { return false; }
  }
  primes.push(n);
  return true;
};

var count = 0;
var number = 1;
while (count < 10001) {
  number++;
  if (isPrime(number)) { count++; }
}
console.log(number);
