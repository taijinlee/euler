

var isPalindrome = function(n) {
  return n === Number(String(n).split('').reverse().join(''));
};


var palindromes = [];
for (var first = 999; first > 0; first--) {
  for (var second = 999; second > 0; second--) {
    var product = first*second;
    if (isPalindrome(first*second)) {
      palindromes.push(product);
    }
  }
}

console.log(Math.max.apply(null, palindromes));
