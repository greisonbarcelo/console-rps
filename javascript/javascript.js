
function getComputeChoice() {
    let choices = ["rock", "paper", "scissor"];
    return  'paper'//choices[Math.floor(Math.random()*choices.length)];
}
function getHumanChoice() {
    let choice = prompt("Enter your choice: ", "").toLowerCase();
    return choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'scissor') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissor' && computerChoice == 'paper')) {
        playerScore += 1;
        return `You won! ${humanChoice} beats computer\'s ${computerChoice}.`;
    } else if ((computerChoice == 'rock' && humanChoice == 'scissor') || (computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissor' && humanChoice == 'paper')) {
         computerScore += 1;
        return `You lost! ${computerChoice} beats your ${humanChoice}.`;
    } else if (humanChoice == computerChoice) {
        return `It\'s a tie! You both picked ${humanChoice}. `;
    } else {
        return `Your input \'${humanChoice}\' was invalid.`;
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputeChoice();


console.log(humanSelection + computerSelection)
console.log(playRound(humanSelection, computerSelection));