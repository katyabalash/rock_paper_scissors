// create array rock paper scissors
// make computer randomly show rock paper or scissors
// create an input for user to choose rock paper or scissors
// create variable userSelect and computerSelect
// if computer put rock and user put rock show message (or paper and paper,or scissors and scissors) "Its a dead heat"
// if computer put rock and user put scissors show "You lost this round. Rock beats scissors"
// if computer put scissors and user rock show "You won this round. Rock beats scissors"
// if computer put scissors and user put paper show "You lost this round. Scissors beat paper"
// if computer put paper and user puts scissors show "You won this round. Scissors beat paper"
// if computer put paper and user puts rock show "You lost this round. Paper beats rock."
// if computer put rock and user paper show "You won this round. Paper beats rock'

let computerSelection;

let playerSelection;
let playerSelection1;

let round;
let result;
let computerScore = 0;
let playerScore = 0;
let computerScore1 = 0;
let playerScore1 = 0;
let final;

function computerPlay(values) {
    return values[Math.floor(Math.random()*values.length)]  
};    

function playRound(computerSelection, playerSelection1) {
    playerSelection= prompt("Select rock, paper or scissors:", " ");
    playerSelection1= playerSelection.toLowerCase();
    computerSelection = computerPlay(values);
    console.log(playerSelection1);
    console.log(computerSelection);
    if (computerSelection === "Rock" && playerSelection1 === "scissors") {
        
       return [result="You lost this round! Rock beats Scissors.", computerScore++] 
    } 
    else if (computerSelection === "Scissors" && playerSelection1 === "rock") {
        return [result = "You won this round! Rock beats scissors.", playerScore++]
    }
    else if (computerSelection === "Paper" && playerSelection1 === "rock") {
        return [result = "You lost this round! Paper beats rock.", computerScore++] 
    }
    else if (computerSelection === "Rock" && playerSelection1 === "paper") {
        return [result = "You won this round! Rock beats scissors.", playerScore++]
    }
    else if (computerSelection === "Paper" && playerSelection1 === "scissors") {
        return [result = "You won this round! Scissors beat Paper.", playerScore++] 
    }
    else if (computerSelection === "Scissors" && playerSelection1 === "paper") {
        return [result = "You lost this round! Scissors beat Paper.", computerScore++]
    }
    else if ((computerSelection === "Rock" && playerSelection1 === "rock") || (computerSelection === "Paper" && playerSelection1 === "paper") || (computerSelection === "Scissors" && playerSelection1 === "scissors")) {
       return result = "Its a tie!" 
    }  
    else { return result = "Please, put 'Rock', 'Paper' or 'Scissors'"
} 
}
function getFinalResult (computerScore, playerScore) { if (computerScore < playerScore) {
    return final="Congradulations! You won the game!"
} else if (computerScore > playerScore) {
    return final="I am sorry... you lost the game!"
} else {return final="Its a tie! Try again!"}
}

const values= ["Rock", "Paper", "Scissors"];

function game(playRound, round) {
    for (round = 0; round < 5; round++) {
        if (round === 5) { 
            getFinalResult(final);
            console.log(final);         
        }
        else { playRound(computerSelection, playerSelection1); 
            console.log(result);
            console.log("Computer score: " + computerScore);
            console.log("Player score: " + playerScore);
        }   
} }
game(playRound,round);
getFinalResult(computerScore, playerScore);
console.log(final);
