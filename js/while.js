"use strict";
//while loop
var i = 1 , y = 2;
while(y < 65536){
    y = Math.pow(2,i);
    console.log(y);
    i++;
}

// let num = 1;
// while(num < 65536){
//     num *= 2;
//     console.log(num);
// }

// do while loop
var allCones = Math.floor(Math.random() * (50)) + 50;
console.log(allCones);

do{
    var coneSold = Math.floor(Math.random() * 5) + 1;

    if( allCones >= coneSold){
        allCones = allCones - coneSold;
        console.log(coneSold + " cones sold...");
    } else {
        console.log("cannot sell you " + coneSold + " cones I only have " + allCones + "...");

    }

} while(allCones > 0);
console.log("Yay! I sold them all!")
