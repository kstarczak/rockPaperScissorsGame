const plays = ["rock", "paper", "scissors", "lizard", "spock"];;
let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    return plays[Math.floor(plays.length * Math.random())];
    }

function playerPlay() {
    return prompt("Choose rock, paper, scissors, lizard, or Spock").toLowerCase();
    // delete code above and let playerPlay equal be reassigned to button with event listener and start game
}


function playRound(playerSelection,computerSelection) {
    if (playerSelection === 'marmot') {
        alert("The Marmot wins the fox's heart!");
    } else if (playerSelection === computerSelection) {
        alert('You tied! Try again!');
    } else if ((playerSelection === 'spock' && (computerSelection === 'scissors' ||computerSelection === 'rock')
    || (playerSelection === 'scissors' && (computerSelection === 'paper' || computerSelection === 'lizard'))
    || (playerSelection === 'paper' && (computerSelection === 'rock' || computerSelection === 'spock'))
    || (playerSelection === 'rock' && (computerSelection === 'scissors' || computerSelection === 'lizard'))
    || (playerSelection === 'lizard' && (computerSelection === 'paper' || computerSelection ===  'spock')))) {
        alert(`${playerSelection} beats ${computerSelection}. You won!`); 
        playerWins += 1;
    } else {
        alert(`${playerSelection} loses to ${computerSelection}. You lost!`);
        computerWins += 1;
    }
}


function game() {
    playRound (playerPlay(),computerPlay());
    playRound (playerPlay(),computerPlay());
    playRound (playerPlay(),computerPlay());
    playRound (playerPlay(),computerPlay());
    playRound (playerPlay(),computerPlay());
    if (playerWins === computerWins) {
        alert('You tied 5 times! What are the chances!?');
    } else if (playerWins > computerWins) {
        alert ('You beat the computer!');
    } else {
        alert ('You lost to the computer.')
    }
};

game();