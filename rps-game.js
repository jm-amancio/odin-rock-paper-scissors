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

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let playerWin = true;

    if(playerSelection === computerSelection){
        return `It's a tie! ${playerSelection} is equal to ${computerSelection}`;
    }
    else if(playerSelection === "rock"){
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

// Limit the game to 5 rounds regardless if there were tie results: (1) change while conditions and (2) change code executed when tie

function game(){
    let playerScore = 0, computerScore = 0;
    let gameRound = 1;

    while((gameRound <=5) && (playerScore < 3 && computerScore < 3)){
        let playerSelection, computerSelection;
        
        let invalidInput = true;
        while(invalidInput) {
            playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();
            if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
                invalidInput = false;
                break;
            }
            console.log("Invalid Input. Try again.");
        }

        computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result===`You Win! ${playerSelection} beats ${computerSelection}`) {
            playerScore++;
        } else if (result===`You Lose! ${computerSelection} beats ${playerSelection}`) {
            computerScore++;
        } else { // if (result===`It's a tie! ${playerSelection} is equal to ${computerSelection}`)
            // do nothing
        } 
        gameRound++;
    }

    if(playerScore > computerScore) {
        console.log(`[Score: ${playerScore} vs ${computerScore}] You won against a computer. Congrats!`);
    } else {
        console.log(`[Score: ${playerScore} vs ${computerScore}] You failed against a computer. Try Again!`);
    }

}

game();