let fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let h = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let cook = Number(input[1]);

let cookHour = Math.floor((h*60 + m + cook) / 60);
let cookMinute = Math.floor((h*60 + m + cook) % 60);

console.log(cookHour >= 24 ? cookHour-24 : cookHour, cookMinute)
