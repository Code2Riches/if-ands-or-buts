const prompt = require('prompt-sync')({sigint: true});


let Player1Choice = (prompt("Player 1 - Enter rock, paper or scissors: "));
let Player2Choice = (prompt("Player 2 - Enter rock, paper or scissors: "));

// ?How to display "failure" for anything other than rock, paper, scissors?

// Rock > Scissors, Scissors > Paper, Paper > Rock

if (Player1Choice === "rock" && Player2Choice === "scissors"){
    console.log("Player 1 wins!");
}
if (Player1Choice === "scissors" && Player2Choice === "paper"){
    console.log("Player 1 wins!");
}
if (Player1Choice === "paper" && Player2Choice === "rock"){
    console.log("Player 1 wins!");
}


if (Player2Choice === "rock" && Player1Choice === "scissors"){
    console.log("Player 2 wins!");
}
if (Player2Choice === "scissors" && Player1Choice === "paper"){
    console.log("Player 2 wins!");
}
if (Player2Choice === "paper" && Player1Choice === "rock"){
    console.log("Player 2 wins!");
}


if (Player2Choice === "rock" && Player1Choice === "rock"){
    console.log("It's a tie!");
}
if (Player2Choice === "scissors" && Player1Choice === "scissors"){
    console.log("It's a tie!");
}
if (Player2Choice === "paper" && Player1Choice === "paper"){
    console.log("It's a tie!");
}
