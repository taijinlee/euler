
// only works for n >= 2
var primes = [2];
var isPrime = function(n) {
  for (var i = 0; i < primes.length; i++) {
    if (n % primes[i] === 0) { return false; }
  }
  primes.push(n);
  return true;
};

var count = 1;
var number = 1;
while (count < 10001) {
  number += 2; // since all primes > 2 are odd
  if (isPrime(number)) { count++; }
}
console.log(number);
