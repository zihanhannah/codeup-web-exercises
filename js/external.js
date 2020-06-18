"use strict";
console.log("Hello from external JavaScript.");
alert("Welcome to my Website!");
let color = prompt("what's your favorite color?");
alert("That's awesome. " + color + " is my favorite color, too.");


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let littleMermaid = Number(prompt("How many days did you rent the Little Mermaid?"));
let brotherBear = Number(prompt("How many days did you rent the Brother Bear?"));
let hercules = Number(prompt("How many days did you rent the Hercules?"));
const price = 3;
alert("Your total renting price is: $" + price*( littleMermaid + brotherBear + hercules));

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
const googlePay = 400;
const amazonPay = 380;
const facebookPay = 350;
let hoursinFacebook = Number(prompt("How many days do you work in Facebook?"));
let hoursinGoogle = Number(prompt("How many days do you work in Google?"));
let hoursinAmazon = Number(prompt("How many days do you work in Amazon?"));
let totalpayment = googlePay*hoursinGoogle + amazonPay*hoursinAmazon + facebookPay*hoursinFacebook;
alert("Your total payment is: $" + totalpayment );

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.


let notFull = confirm("Is there room in the class?");
let notConflict = confirm("Does the class schedule work with your current schedule");
let enrolled = notFull && notConflict ;
if(enrolled){
    alert("Congrats, you registered the class successfully!");
} else{
    alert("Sorry, you can't register the class!");
}

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let MoreThan2 = confirm("Do you have more than Two items?");
let notExpired = confirm("Press Ok, if the offer is Not expired.");
let premiumNumber = confirm("Press Ok, if you are the Premium Member.");

let offerApplied = notExpired && (MoreThan2 || premiumNumber);
if (offerApplied){
    alert("Congrets, you are qualified to have the exclusive product offer!");
}


