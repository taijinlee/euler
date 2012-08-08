
var max = 100;

var sumOfSquares = 0;
for (var i = 1; i <= max; i++) {
  sumOfSquares += i * i;
}

var sumUpToMax = max * (max + 1) / 2;
console.log(sumUpToMax * sumUpToMax - sumOfSquares);
