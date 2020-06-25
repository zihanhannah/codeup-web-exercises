"use strict";
//while loop
var i = 1 , y = 2;
while(y < 65536){
    y = Math.pow(2,i);
    console.log(y);
    i++;
}

// do while loop
var allCones = Math.floor(Math.random() * (50)) + 50;
console.log(allCones);

do{
    var coneSold = Math.floor(Math.random() * 5) + 1;
    var allCones = allCones - coneSold;
    console.log(allCones);
    console.log(coneSold);
    if( allCones > coneSold){

        console.log("there are enough cones");

    } else if(allCones < coneSold){

        console.log("There are not enough cones.Yay! I sold them all!")
    }

} while(allCones > 0)

