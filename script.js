const plays = ["rock", "paper", "scissors", "lizard", "spock"];;
const winnerDeclaration = document.querySelector('.winnerDeclaration');
const score = document.querySelector('.score');
const playButtons = document.querySelectorAll('.playButton');



const testButton = document.querySelector('.testButton');

function computerPlay() {
    return plays[Math.floor(plays.length * Math.random())];
    }

//revise function below to return the winner
function playRound(e) {
    const computerSelection = computerPlay();
    const playerSelection = this.id;
    console.log('the computer picked: ' + computerSelection);
    console.log('you picked: ' + playerSelection);
    if (playerSelection === 'marmot') {
        winnerDeclaration.textContent ='The Marmot wins the fox\'s heart!';
    } else if (playerSelection === computerSelection) {
        winnerDeclaration.textContent = 'You tied! Try again!';
    } else if ((playerSelection === 'spock' && (computerSelection === 'scissors' ||computerSelection === 'rock')
    || (playerSelection === 'scissors' && (computerSelection === 'paper' || computerSelection === 'lizard'))
    || (playerSelection === 'paper' && (computerSelection === 'rock' || computerSelection === 'spock'))
    || (playerSelection === 'rock' && (computerSelection === 'scissors' || computerSelection === 'lizard'))
    || (playerSelection === 'lizard' && (computerSelection === 'paper' || computerSelection ===  'spock')))) {
        winnerDeclaration.textContent = `${playerSelection} beats ${computerSelection}. You won!`; 
        //playerWins += 1;
        //score.textContent = `Youre score: ${playerWins}        Computer score: ${computerWins}`;
    } else {
        winnerDeclaration.textContent = `${playerSelection} loses to ${computerSelection}. You lost!`;
        //computerWins += 1;
        //score.textContent = `Youre score: ${playerWins}        Computer score: ${computerWins}`;
    }
}

// execute playGame when page when clicks play game and play again
function playGame(e) {
    let playerWins = 0;
    let computerWins = 0; 
    playRound('rock');
    // some counter function
    playRound('scissors');
    // some counter function
    if (playerWins > computerWins) {
        winnerDeclaration.textContent="You won. Congratulations on winning a game the requires absolutely no critical thinking skills. You must be so proud of yourself"; 
    } else {
        winnerDeclaration.textContent="You're a loser and your parents don't even love you.";
    }
};


playButtons.forEach(button => button.addEventListener('click' , playRound));


//addEventListener('click', playRound(button identifier))

