let fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let h = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
m = m - 45;

if (m < 0) {
  h--;
  m = 60 + m;
  
  if (h < 0) h = 23
}

console.log(h, m);