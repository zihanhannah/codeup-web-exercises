"use strict";
var num ;

    while(true){
    num = prompt("Please choose a ODD number from 1 to 50");
    num = parseInt(num);
    if(num % 2 !== 0 && num >=1 && num <50){
        break;
    }
    alert("this is not the valid input");
    }
    console.log("number to skip is: " + num);
    console.log("");
    for (var i = 1; i < 50; i= i+2) {
        if (i === num) {
            console.log("Yikes! Skipping number: " + i);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }

