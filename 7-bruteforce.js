
// only works for n > 2
var isPrime = function(n) {
  var i = 2;
  while (i <= n/2) {
    if (n % i === 0) { return false; }
    i++;
  }
  return true;
};

var count = 0;
var number = 1;
while (count < 10001) {
  number++;
  if (isPrime(number)) { count++; }
}
console.log(number);
