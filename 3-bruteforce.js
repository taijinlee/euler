
function someFactors(n) {
  var i = 2;
  var multiples = [];
  while (i < n) {
    var dividedByI = n/i;
    if (dividedByI === Math.floor(dividedByI)) {
      multiples.unshift(i);
      n = dividedByI;
      continue;
    }
    i++;
  }
  multiples.unshift(i);
  return multiples;
}

var multiples = [600851475143];
for (var i = 0; i < multiples.length; i++) {
  Array.prototype.push.apply(multiples, someFactors(multiples.shift()));
}
console.log(Math.max.apply(null, multiples));
