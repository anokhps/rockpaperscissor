function computerPlay() {
    let array = ['rock', 'paper', 'scissor'];
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}

function yourPlay() {
    let userInput = prompt('whats your take on this game,rock,paper or scissor').toLowerCase();
    if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissor') {
        alert('Wrong take.Please enter rock or paper or scissor!!');
    } else {
        return userInput;
    }
}

function playRound(playerSelection, computerSelection) {

    let winner=''
    if (playerSelection === computerSelection) {
        console.log('Match tied');
    } else if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
            winner='you'
        console.log(`${winner} win the game`);

    } else {
        winner='computer'
        console.log(`${winner} win the game`);

    }
}



function game() {
    let yourScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {

        
    }
}
