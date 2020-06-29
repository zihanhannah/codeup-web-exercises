"use strict";
var num = prompt("Please choose a ODD number from 1 to 50");
function oddNum(num) {
    while(num % 2 == 0 || num >50){
    num = prompt("Please choose a ODD number from 1 to 50");
    };
    for (var i = 1; i < 50; i= i+2) {
        if (i == num) {
            console.log("Yikes! Skipping number: " + i);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}
oddNum(num);