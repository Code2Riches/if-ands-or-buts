const prompt = require('prompt-sync')({sigint: true});

let pinCode = "1234";

let input = prompt("Please enter your 4 digit pin code: ");


if (input === pinCode){
    console.log("You're in!"); 
}
    else (console.log("Error!"));
    







