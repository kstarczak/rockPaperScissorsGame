
const plays = ["rock", "paper", "scissors", "lizard", "spock"];

//computerPlay Works!
function computerPlay() {
    let computerIndexSelection = Math.floor(plays.length * Math.random());
    let computerPlaySelection = plays[computerIndexSelection];
}
computerPlay();
//game function play contnues for 5 rounds and keeps score and returns winner//
//function game(){
    
    //create playRound function//
    function playRound(playerSelection,computerPlaySelection){
        //prompt for player slection (WORKS!), make case insensitive// */
        //let playerSelection = prompt("Choose rock, paper, or scissors!");
        //If playerSelection === spock && computerPlaySelection === scissors || rock
        //or playerSelection === scissors && computerPlaySelection === paper || lizard
        //or playerSelection === paper && computerPlaySelection === rock || spock
        //or PlayerSelection === rock && computerPlaySelection === scissor || lizard
        //or PlayerSelection === lizard && computerPlaySelection === paper || spock
        // Return '{player selection} beats {computerPlaySelection}! You Won!'
        // Else
        // Return '{computerPlaySelection} beats {player selection}... You lost.

        //function code end//
    //}
//}