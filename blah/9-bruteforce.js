var a = 1;
var b, c;
// with some math:
// b = (500000 - 1000a) / (1000 - a)
// c = 1000 - a - b

while (a < 1000) {
  b = (500000 - 1000 * a) / (1000 - a);
  if (Math.floor(b) !== b) { a++; continue; }
  c = 1000 - a - b;
  break;
}
console.log([a,b,c]);
console.log(a*b*c);
