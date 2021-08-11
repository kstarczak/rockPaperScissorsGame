
const plays = ["rock", "paper", "scissors", "lizard", "spock"];

function computerPlay() {
    let computerIndexSelection = Math.floor(plays.length * Math.random());
    let computerPlaySelection = plays[computerIndexSelection];
}

function playRound(playerSelection,computerPlaySlection) {
    computerPlay();
 //prompt for player slection (WORKS!), make case insensitive
 let computerWins = 0;
 let playerWins = 0;
 let playerSelection = prompt("Choose rock, paper, or scissors!");
 playerSelection = playerSelection.toLowerCase()
 /* Look up if then syntax!
 https://www.w3schools.com/js/js_if_else.asp
 if ((playerSelection === "spock" && (computerPlaySelection === "scissors" || "rock"))
 || (playerSelection === "scissors" && (computerPlaySelection === "paper" || "lizard"))
 || (playerSelection === "paper" && (computerPlaySelection === "rock" || "spock"))
 || (PlayerSelection === "rock" && (computerPlaySelection === "scissor" || "lizard"))
 || (PlayerSelection === "lizard" && (computerPlaySelection === "paper" || "spock"))) */

}

function game() {
    //for....
    //play contnues for 5 rounds and keeps score and returns winner//
    // invoke play round function to continue for until 3 wins?
    // let playerWins;
    // let computerWins;
    // Return you won or you lost... try again
    playRound;
}

    
    //create playRound function//
    /*function playRound(playerSelection,computerPlaySelection){
       
        //test code below
        //let playerSelection = 'Marmot';
        //alert(`${playerSelection} beats ${computerPlaySelection!} You Won!`);
        // } Else
        // alert(`${computerPlaySelection} beats ${player selection}... You lost.`)

        //function code end//
    //}
//}