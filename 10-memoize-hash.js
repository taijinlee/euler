
var isPrime = function() {
  var MAX = 2000000;
  var sieve = {};

  return function(n) {
    if (sieve[n] !== undefined) { return sieve[n]; }

    var foundPrime = true; // innocent until guilty

    if (n < 2) { return false; }
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) { foundPrime = false; }
    }

    // memoize it and its multiples
    sieve[n] = foundPrime;

    var multiplier = 2;
    while (multiplier * n < MAX) { // mark all multiples false
      sieve[multiplier * n] = false;
      multiplier++;
    }

    return foundPrime;
  };

}();


var sum = 0;
for (var i = 0; i < 2000000; i++) {
  sum += (isPrime(i) ? i : 0);
}
console.log(sum);
