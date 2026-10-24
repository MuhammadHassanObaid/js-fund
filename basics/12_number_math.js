
// number
const score = 12

// if you want variable of any particular daata type then USE new 
const playersCount = new Number(0);

console.log(score);

console.log(playersCount);

// convrson to string

const playersCountStr = playersCount.toString();
console.log(playersCountStr);

console.log("typeof playersCount ", typeof(playersCount));

let balance = 100.2999;

console.log(balance.toFixed(2));

let anotherBalance = 1123.8966

console.log(anotherBalance.toPrecision(4));

let hundredNo = 1000000;

console.log(hundredNo.toLocaleString('en-PK'));

// to find max and min

console.log("MIN AND MAX VALUES");


console.log(Number.MIN_VALUE);

console.log(Number.MAX_VALUE);

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);



// Maths in js

// comes from default

console.log("---------------------MATHS-------------------------");

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.7));

console.log(Math.ceil(4.6));

console.log(Math.floor(4.2));

console.log(Math.max(1,45,988));

console.log(Math.min(1,45,988));

// IMP is random

console.log("--------------------- MATH . RANDOM() ---------------");


console.log(Math.random()); // gives from 0 to 1 including both

// in below * 10 is the range starting from >0 to 10
   // and adding 1 to it ensures aswer be greater or equal to min value which is 1 in below
console.log((Math.random() * 10) + 1);

console.log("to remove decimals and have a integer USE Math.floor");

console.log(Math.floor(Math.random() * 10) + 1);

let min = 1
let max = 6

// for(let i=0; i<9; i++){
//     console.log("SHOWING RAND BETEWEEN 1 and 6");
    
//     console.log(Math.floor(Math.random()*(max-min+1)) + min);
// }

