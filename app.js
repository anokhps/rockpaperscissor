function playRound(playerSelection,computerSelection){


}



const playerSelection=prompt("Enter your take on this game!!").toLowerCase;
const computerSelection=computerPlay();

console.log(playRound(playerSelection,computerSelection));



function computerPlay(){
    let array=['rock','paper','scissor'];
   let random= array[ Math.floor(Math.random()*array.length)]
   console.log(random);
}

function game(){

    for(let i=0; i<1; i++){
        playRound(playerSelection,computerSelection);
    }
}
game();