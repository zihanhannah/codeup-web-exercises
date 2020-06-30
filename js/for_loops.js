"use strict";
//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(num){
    for( var i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }
}

showMultiplicationTable(7);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

for (var i = 0; i < 10; i ++){
    var num =Math.floor(Math.random() * (181)) + 20;

    if (num % 2 ===0){
        console.log( num + " is a even number");
    } else {
        console.log(num + " is a odd number.");
    }
}

//Create a for loop that uses console.log to create the output to repeat the number like below.
// for (var i = 1 ; i < 10 ; i++) {
//     console.log((i + "").repeat(i));
// }

for(let i = 1; i <= 9; i++){
    let str = "";
    for( let j = 1; j <= i ; j++){
        str += i;
    }
    console.log(str);
}


//from 100 to 5
for (i = 100 ; i >=5 ; i-=5){
    console.log(i);
}
