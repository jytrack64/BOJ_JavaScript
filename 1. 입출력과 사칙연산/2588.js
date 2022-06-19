let fs = require('fs');
let input = fs.readFileSync('dev/stdin')
.toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1].split('')[0]);
let c = Number(input[1].split('')[1]);
let d = Number(input[1].split('')[2]);

console.log(a*d);
console.log(a*c);
console.log(a*b);
console.log(a * input[1]);
