
var isPrime = function() {
  var MAX = 2000000;
  var sieve = new Array(MAX);

  sieve[0] = sieve[1] = false;
  for (var i = 2; i < MAX; i++) {
    if (sieve[i] !== undefined) { continue; } // we already know if it is prime or not
    sieve[i] = true;

    var multiplier = 2;
    while (multiplier * i < MAX) { // mark all multiples false
      sieve[multiplier * i] = false;
      multiplier++;
    }
  }

  return function(n) {
    return sieve[n];
  };

}();


var sum = 0;
for (var i = 0; i < 2000000; i++) {
  sum += (isPrime(i) ? i : 0);
}
console.log(sum);
