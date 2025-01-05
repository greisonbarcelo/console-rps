
function getComputeChoice() {
    let choices = ["rock", "paper", "scissor"];
    return  choices[Math.floor(Math.random()*choices.length)];
}
function getHumanChoice() {
    let choice = prompt("Enter your choice: ", "").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'scissor') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissor' && computerChoice == 'paper')) {
        playerScore += 1;
        return console.log(`You won! ${humanChoice} beats computer\'s ${computerChoice}.`);
    } else if ((computerChoice == 'rock' && humanChoice == 'scissor') || (computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissor' && humanChoice == 'paper')) {
         computerScore += 1;
        return console.log(`You lost! ${computerChoice} beats your ${humanChoice}.`);
    } else if (humanChoice == computerChoice) {
        return console.log(`It\'s a tie! You both picked ${humanChoice}. `);
    } else {
        return console.log(`Your input \'${humanChoice}\' was invalid.`);
    }
}

let playerScore = 0;
let computerScore = 0;

// console.log(humanSelection + computerSelection)
// playRound(humanSelection, computerSelection);

function declareWiner(playerScore,computerScore) {
    if(playerScore > computerScore) {
        return console.log(`Player wins game! Final score of USER: ${playerScore}, COMPUTER: ${computerScore}`);
    } else if (computerScore > playerScore) {
        return console.log(`Computer wins game! Final score of USER: ${playerScore}, COMPUTER: ${computerScore}`);
    } else return console.log(`It\'s a tie! Final score of USER: ${playerScore}, COMPUTER: ${computerScore}`);
}
function playGame() {
    for(let i = 1; i <= 5; i++) {
        console.log(`Round ${i}. User: ${playerScore}, Computer: ${computerScore}`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputeChoice();
        // console.log(humanSelection + computerSelection);
        playRound(humanSelection, computerSelection);

    }
    declareWiner(playerScore, computerScore);
    if(confirm('Play Again?')){
        playerScore = 0; computerScore = 0
        console.clear();
        playGame();
    }
}
playGame();