const moveArray = ["rock", "paper", "scissors", "lizard", "spock"];
const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');
const roundResult = document.querySelector('.roundResult');

const moves = document.querySelectorAll('.move');
const gameStats = document.querySelector(".gamestats");

let playAgainButton = document.createElement('button');
playAgainButton.className ='playAgainButton';
playAgainButton.textContent = "Play Again?";

let playerWins = 0;
let compWins = 0;


//revise function below to return the winner
function playRound(e) {
    const compMove = compPlay();
    const playerMove = e.target.id;
    playerScore.textContent = 'Your score: 0';
    compScore.textContent = 'Computer score: 0'
    //if (playerMove  === 'marmot') {
        //roundResult.textContent ='The Marmot wins the fox\'s heart!';
        // gameEnd();
    if (playerMove === compMove) {
        return; 
    } else if (playerMove === 'spock' && (compMove === 'scissors'||compMove === 'rock')
            || playerMove  === 'scissors' && (compMove === 'paper' || compMove === 'lizard')
            || playerMove  === 'paper' && (compMove === 'rock' || compMove === 'spock')
            || playerMove  === 'rock' && (compMove === 'scissors' || compMove === 'lizard')
            || playerMove  === 'lizard' && (compMove === 'paper' || compMove ===  'spock')) {
        playerWins += 1;
        playerScore.textContent = `Your score: ${playerWins}`;
        roundResult.textContent = `${playerMove } beats ${compMove}. You won!`; 
        if (playerWins > 4) {
            roundResult.textContent = "You beat the computer. Congratulations on winning a game the requires absolutely no skill. You must be so proud of yourself"; 
            //gameEnd();
            }
    } else {
        compWins += 1;
        compScore.textContent = `Computer score: ${compWins}`;
        roundResult.textContent = `${playerMove } loses to ${compMove}. You lost!`;
        if (compWins > 4) {
            roundResult.textContent = 'Surprise, suprise.. the computer beat your ass. You\'re a loser and your parents don\'t even love you.';
            // gameEnd();
        }
    }

}
function compPlay() {
    return moveArray[Math.floor(moveArray.length * Math.random())];
    }


function gameEnd() { 
    // lock the buttons an make them translucent or black;
    playRound(compWins, playerWins, e);
    container.appendChild(playAgainButton);
};

function restGame (){
    let playerWins = 0;
    let compWins = 0
    //unlock bbuttns and clear paras
};

moves.forEach((move) => {move.addEventListener('click', playRound);});



/*playButtons.forEach(button => { button.addEventListener('click', playRound)}; */