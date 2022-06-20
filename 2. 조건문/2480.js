let fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])
let price = 0;

if (a == b && b == c && a == c)
  price = 10000 + a * 1000;

else if (a == b && b != c)
  price = 1000 + a * 100
else if (b == c && a != c)
  price = 1000 + b * 100
else if (a == c && a != b)
  price = 1000 + a * 100

else {
  let arr = [a, b, c].sort();
  price = arr[2] * 100
}

console.log(price);