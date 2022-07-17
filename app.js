function computerPlay() {
    let array = ['rock', 'paper', 'scissor'];
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}

function yourPlay() {
    let userInput = prompt('whats your take on this game,rock,paper or scissor').toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
        return userInput;
    } else {
        alert('Wrong take, enter rock, paper or scissor')
    }
}

let winner;
function playRound(playerSelection, computerSelection) {

    winner = ''
    if ((playerSelection === '' || playerSelection === null) && (computerSelection === 'rock' ||
        computerSelection === 'paper' ||
        computerSelection === 'scissor')) {
        return null;
    } else if (playerSelection === computerSelection) {
        return 'Match Tied';

    } else if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
        winner = 'you';
        console.log(winner)
        return `${winner} won the game`;
    }
    else {
        winner = 'computer';
        console.log(winner)
        return `${winner} won the game`;
    }

}

function game() {
    let yourScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound(yourPlay(), computerPlay());
        if (winner === 'you') {
            ++yourScore;
            console.log(yourScore);
        } else if (winner === 'computer') {
            ++compScore;
            console.log(compScore);
        } else if (winner === undefined) {

            
            continue;
        }
    }
}

game();
