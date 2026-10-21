// there are 2 types of variables
// (non primitive)Reference and Value(primitive) types

// PRIMITIVE (value)
// S N B B S N U

// NON PRIMITIVE (reference)
// arrays, functions and objects

// let vs var vs const

console.log(age);

var age = 2;

{
    const PIE = 3.14;

    console.log(PIE);

    // PIE = 3.1;

    let no;

    console.log(no);

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a number: ', (no) => {
        no = Number(no);
        console.log('You entered number : ' + (no));
        rl.close();
    });
    
    
}

var age = 4

// console.log(PIE);
// console.log(no);

console.log("\n");

console.log(age);



// 

