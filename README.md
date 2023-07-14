The algorithm for each function are indicated as follows: 

1. Create function getComputerChoice
- returns string 'Rock’, ‘Paper’ or ‘Scissors’ (randomly generated)

ALGORITHM:
Create variables randomNumber, computerChoice
Generate a random number randomNumber using [Math.random() * 10] and
    IF randomNumber === 0 ||  randomNumber > 3, then generate new randomNumber
IF 	randomNumber === 1, then computerChoice = rock
	randomNumber === 2, then computerChoice = paper
	randomNumber === 3, then computerChoice = scissors
Return computerChoice

2. Create function playRound
- takes the parameters: playerSelection, computerSelection
- returns string "You Win! x beats y" or "You Lose! x beats y"

ALGORITHM:
Use variables playerSelection, computerSelection
Create playerWin = true
IF playerSelection === rock
	IF  computerSelection === paper, then playerWin = false    // “You lose”
ELSE IF playerSelection ===  paper
	IF  computerSelection === scissors, then playerWin = false // “You lose”
ELSE IF playerSelection === scissors
	IF  computerSelection === rock, then playerWin = false     // “You lose”

IF playerWin === true, then print "You Win! *playerSelection* beats *computerSelection*"
ELSE "You Lose! *computerSelection* beats *playerSelection*"

3. Create function game()
- play 5 rounds using playRound() and for/while loop
- print the result of winners at the end using console.log
- use prompt() to  get input from user; use toLowerCase() for input to make it case-insensitive

ALGORITHM:
Create variable playerScore = 0, computerScore = 0 // Initialize to 0
Create variable gameRound = 0;
while ((playerScore < 3 && computerScore < 3))  && (gameRound <= 5 )) {
    Create variable playerSelection = get user input and convert to lowercase
    Create variable computerSelection = function getComputerChoice
	Execute function playRound(playerSelection, computerSelection) 
	IF  playRound() === "You Win! *playerSelection* beats *computerSelection*"
		Then, playerScore++
	ELSE 
		Then,  computerScore++
	gameRound++
}

IF playerScore > computerScore, then “[print playerScore]: You won against a computer. Congrats!”
ELSE, then “[print playerScore]: You failed against a computer. Try again!”
