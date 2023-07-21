let playerScore, holoScore, gameRound;
const choices = ["rock", "paper", "scissors"];

function startGame(){
    let begin = false;
    begin = confirm("Holo is challenging you to a duel. Would you like to accept the duel?");
    while (!begin) 
        begin = confirm("You cannot decline. Press 'OK'.");
    playerScore = 0, holoScore = 0, gameRound = 1;
}

// function getPlayerChoice
for(let i=0; i<choices.length; i++){
    document.getElementById(`player-${choices[i]}`).addEventListener('click', (e) => {
        // proceed to play
        playRound(e.target.value);

    });
}

function getHoloChoice() {
    let randomNumber = Math.floor(Math.random() * 10);
    while (randomNumber === 0 || randomNumber > 3) {
        randomNumber = Math.floor(Math.random() * 10);
    }
    return choices[randomNumber - 1];
}

function playRound(playerSelection) {
    document.getElementById('round-count').innerHTML = `${gameRound}`
    // value of button with id=`player-${choices[i]}`
    playerSelection = playerSelection.toLowerCase();
    let holoSelection = getHoloChoice();

    let playerWin = true;
    if (playerSelection === holoSelection){
        showRoundResult(playerSelection, holoSelection, `It's a tie! \n${playerSelection} equals ${holoSelection}`);
    } else if((playerSelection === "rock" && holoSelection === "paper") ||
        (playerSelection === "paper" && holoSelection === "scissors")   || 
        (playerSelection === "scissors" && holoSelection === "rock")) {
        showRoundResult(playerSelection, holoSelection, `You Lose! \n${playerSelection} is beaten by ${holoSelection}`);
    } else {
        showRoundResult(playerSelection, holoSelection, `You Win! \n${playerSelection} beats ${holoSelection}`);
    }
}

function showRoundResult(playerSelection, holoSelection, result){
    if (result===`You Win! \n${playerSelection} beats ${holoSelection}`) {
        ++playerScore;
    } else if (result===`You Lose! \n${playerSelection} is beaten by ${holoSelection}`) {
        ++holoScore;
    } 
    gameRound++;

    document.getElementById('round-result-announcement').textContent = result;
    document.getElementById('round-result-score').textContent = `${playerScore} - ${holoScore}`;
    document.getElementById('player-score-board').textContent = `${playerScore}`;
    document.getElementById('holo-score-board').textContent = `${holoScore}`;
    
    if(playerScore === 5 || holoScore === 5){
        if(playerScore > holoScore) {
            document.getElementById('status').innerHTML = `<h3>[${playerScore}-${holoScore}] You won against Holo. Congrats!</h3>`;
        } else {
            document.getElementById('status').innerHTML = `<h3>[${playerScore}-${holoScore}] You failed against Holo. Try Again!</h3>`;
        }
    }
}

startGame();