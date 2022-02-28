const moveArray = ["rock", "paper", "scissors", "lizard", "spock"];
const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');
const roundResult = document.querySelector('.roundResult');

const moves = document.querySelectorAll('.move');
const gameStats = document.querySelector('.gameStats');
const gameEndDiv = document.querySelector('.gameEndDiv');

let playAgainButton;
let quitButton;

let playerWins = 0;
let compWins = 0;


//revise function below to return the winner
function playRound(e) {
if (!this.classList.contains('disabled')) {
    const compMove = compPlay();
    const playerMove = e.target.id;
    playerScore.textContent = 'Your score: 0';
    compScore.textContent = 'Computer score: 0'
    //if (playerMove  === 'marmot') {
        //roundResult.textContent ='The Marmot wins the fox\'s heart!';
        // gameEnd();
    if (playerMove === compMove) {
        roundResult.textContent =`It's a tie! you both chose ${playerMove}`;
        playerScore.textContent = `Your score: ${playerWins}`;
        compScore.textContent = `Computer score: ${compWins}`;
    } else if (playerMove === 'spock' && (compMove === 'scissors'||compMove === 'rock')
            || playerMove  === 'scissors' && (compMove === 'paper' || compMove === 'lizard')
            || playerMove  === 'paper' && (compMove === 'rock' || compMove === 'spock')
            || playerMove  === 'rock' && (compMove === 'scissors' || compMove === 'lizard')
            || playerMove  === 'lizard' && (compMove === 'paper' || compMove ===  'spock')) {
        playerWins += 1;
        playerScore.textContent = `Your score: ${playerWins}`;
        compScore.textContent = `Computer score: ${compWins}`;
        roundResult.textContent = `${playerMove } beats ${compMove}. You won!`; 
        if (playerWins > 4) {
            roundResult.classList.add('gameOver');
            roundResult.textContent = "You beat the computer. Congratulations on winning a game the requires absolutely no skill. You must be so proud of yourself"; 
            gameEnd();
            }
    } else {
        compWins += 1;
        playerScore.textContent = `Your score: ${playerWins}`;
        compScore.textContent = `Computer score: ${compWins}`;
        roundResult.textContent = `${playerMove } loses to ${compMove}. You lost!`;
        if (compWins > 4) {
            roundResult.classList.add('gameOver');
            roundResult.textContent = 'Surprise, suprise.. you couldn\'t beat and inanimate object. You\'re a loser and your parents don\'t even love you.';
            gameEnd();
        }
    }
}
}
function compPlay() {
    return moveArray[Math.floor(moveArray.length * Math.random())];
}


function gameEnd() { 
    moves.forEach((move) => {move.classList.add('disabled');});
    // add classlists for all to apply grey font and dim effect;
    playAgainButton = document.createElement('button');
    playAgainButton.classList.add('gameEndButton');
    playAgainButton.textContent = "Play Again?"
    quitButton = document.createElement('button');
    quitButton.classList.add('gameEndButton')
    quitButton.innerHTML = '<a href="https://medium.com/@justin_plambert/how-to-quit-being-a-quitter-and-do-something-with-your-life-d8ecfe11be05">Quit</a>'
 
    gameEndDiv.appendChild(playAgainButton);
    gameEndDiv.appendChild(quitButton);
    playAgainButton.addEventListener('click',resetGame);

    
}

function resetGame() {
    moves.forEach((move) => {move.classList.remove('disabled');});
    playerWins = 0;
    compWins = 0;
    gameEndDiv.removeChild(playAgainButton);
    gameEndDiv.removeChild(quitButton);
    playerScore.textContent = '';
    compScore.textContent = '';
    roundResult.textContent = '';
    //unlock bbuttns and clear paras
}

moves.forEach((move) => {move.addEventListener('click', playRound);});



