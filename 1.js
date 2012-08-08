
//var multiple3and5 = module.exports = function() {
  var sum = 0;
  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
console.log(sum);
  //return sum;
//}
//console.log(multiple3and5());
