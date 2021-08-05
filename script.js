
const plays = ["rock", "paper", "scissors", "lizard", "spock"];

function computerPlay() {
    let computerIndexSelection = Math.floor(plays.length * Math.random());
    let computerPlaySelection = plays[computerIndexSelection];
}
computerPlay();

// figure out scope to output the computerplayselection
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
//https://www.w3schools.com/js/js_if_else.asp

//game function play contnues for 5 rounds and keeps score and returns winner//
//function game(){
    
    //create playRound function//
    /*function playRound(playerSelection,computerPlaySelection){
        //prompt for player slection (WORKS!), make case insensitive
        let playerSelection = prompt("Choose rock, paper, or scissors!");
        playerSelection = playerSelection.toLowerCase()*/

        /* Look up if then syntax!
        if ((playerSelection === "spock" && (computerPlaySelection === "scissors" || "rock"))
        || (playerSelection === "scissors" && (computerPlaySelection === "paper" || "lizard"))
        || (playerSelection === "paper" && (computerPlaySelection === "rock" || "spock"))
        || (PlayerSelection === "rock" && (computerPlaySelection === "scissor" || "lizard"))
        || (PlayerSelection === "lizard" && (computerPlaySelection === "paper" || "spock"))) */

        //test code below
        //let playerSelection = 'Marmot';
        //alert(`${playerSelection} beats ${computerPlaySelection!} You Won!`);
        // } Else
        // alert(`${computerPlaySelection} beats ${player selection}... You lost.`)

        //function code end//
    //}
//}