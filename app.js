const playerScreen = document.querySelector('.player');
const computerScreen = document.querySelector('.computer');
const resultScreen = document.querySelector('.score')
const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.p-score');
const computerScore = document.querySelector('.c-score');
const finalResult = document.querySelector('.final');

let playerSelection;
let computerSelection;
let result;
function computerPlay() {
    let array = ['👊', '🖐', '✌'];
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}


// for checks who is winner.
let winner;
function playRound(playerSelection, computerSelection) {


    if ((playerSelection === '' || playerSelection === null)) {
        return '';
    } else if (playerSelection === computerSelection) {
        return resultScreen.textContent = 'Match Tied';

    } else if ((playerSelection === '👊' && computerSelection === '✌') ||
        (playerSelection === '🖐' && computerSelection === '👊') ||
        (playerSelection === '✌' && computerSelection === '🖐')) {
        winner = 'you'
        resultScreen.textContent = 'you won';

        return `${resultScreen.textContent} won the game`;
    }
    else {
        winner = 'computer'
        resultScreen.textContent = 'computer won';
        // console.log(resultScreen.textContent)
        return `${resultScreen.textContent} won the game`;
    }

}

// function game() {
//     let yourScore = 0;
//     let compScore = 0;

//     for (let i = 0; i < 5; i++) {
//         playRound(yourPlay(), computerPlay());
//         if (winner === 'you') {
//             ++yourScore;
//             console.log(yourScore);
//         } else if (winner === 'computer') {
//             ++compScore;
//             console.log(compScore);
//         } else if (winner === undefined) {


//             continue;
//         }
//     }
// }

// This function is for game ending.
function gameOver() {
    buttons.forEach(button => {
        button.style.display = 'none';
    })
}

let yourScore = 0;
let compScore = 0;

buttons.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.textContent;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if (winner == 'you') {
        playerScore.textContent = ++yourScore;
    } else if (winner == 'computer') {
        computerScore.textContent = ++compScore;
    }
    if (yourScore == 5) {
        finalResult.textContent = 'you won the game,game over.';

    } else if (compScore == 5) {
        finalResult.textContent = 'you lost the game,game over.';

    }
    if (yourScore == 5 || compScore == 5) {
        gameOver();
    }
}));