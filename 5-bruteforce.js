
var _ = require('underscore');

var divisibleBy = [];
for (var i = 2; i <= 20; i++) {
  divisibleBy.push(i);
}

var primeFactors = function(n) {
  var factors = [];
  var i = 2;
  while (n > 1) {
    if (n % i === 0) {
      factors.push(i);
      n = n / i;
    } else {
      i++;
    }
  }
  return factors;
};

var product = 1;
while (divisibleBy.length) {
  var first = divisibleBy.shift();
  var factors = primeFactors(first);
  divisibleBy = _.map(divisibleBy, function(n) {
    _.each(factors, function(factor) {
      n = n % factor === 0 ? n / factor : n;
    });
    return n;
  });
  product *= first;
}

console.log(product);
