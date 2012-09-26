
var sum = 0;
var MAX = 2000000;
var sieve = new Array(MAX);
var multiplier;
sieve[0] = sieve[1] = false;

for (var i = 0; i < MAX; i++) {
  if (sieve[i] !== undefined) { continue; } // we already know if it is prime or not
  // furthermore, since we are going in order, it must be prime if we don't know what it is
  sum += i;

  multiplier = 2;
  while (multiplier * i < MAX) { // mark all multiples false
    sieve[multiplier * i] = false;
    multiplier;
  }
}

console.log(sum);
