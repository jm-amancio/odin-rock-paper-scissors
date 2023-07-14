// ROCK-PAPER-SCISSORS GAME

function getComputerChoice() {
    let computerChoice;

    let randomNumber = Math.floor(Math.random() * 10);
    while (randomNumber === 0 || randomNumber > 3) {
        randomNumber = Math.floor(Math.random() * 10);
    }

    if(randomNumber === 1){
        computerChoice = "rock";
    } else if(randomNumber === 2){
        computerChoice = "paper";
    } else { // (randomNumber === 3)
        computerChoice = "scissors";
    }

    console.log(randomNumber);

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let playerWin = true;

    if(playerSelection === "rock"){
        if(computerSelection === "paper")
            playerWin = false;
    } else if(playerSelection === "paper"){
        if(computerSelection === "scissors")
            playerWin = false;
    } else if(playerSelection === "scissors"){
        if(computerSelection === "rock")
            playerWin = false;
    }

    if(playerWin === true){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    let playerScore = 0, computerScore = 0;
    let gameRound = 1;

    while((playerScore < 3 && computerScore < 3) && (gameRound <=5)){
        let playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result===`You Win! ${playerSelection} beats ${computerSelection}`)
            playerScore++;
        else 
            computerScore++;
        gameRound++;
    }

    if(playerScore > computerScore) 
        console.log(`[Score: ${playerScore}] You won against a computer. Congrats!`);
    else 
        console.log(`[Score: ${playerScore}] You failed against a computer. Try Again!`);

}

game();