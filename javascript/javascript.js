
function getComputeChoice() {
    let choices = ["rock", "paper", "scissor"];
    return  choices[Math.floor(Math.random()*choices.length)];
}
// function getHumanChoice() {
//     let choice = prompt("Enter your choice: ", "").toLowerCase();
//     return choice;
// }

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'scissor') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissor' && computerChoice == 'paper')) {
        playerScore += 1;
        paraRound.textContent = `You won! ${humanChoice} beats computer\'s ${computerChoice}. Player: ${playerScore} Computer: ${computerScore}`;
        score.appendChild(paraRound);
        return // console.log(`You won! ${humanChoice} beats computer\'s ${computerChoice}.`);
    } else if ((computerChoice == 'rock' && humanChoice == 'scissor') || (computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissor' && humanChoice == 'paper')) {
         computerScore += 1;
         paraRound.textContent = `You lost! ${computerChoice} beats your ${humanChoice}. Player: ${playerScore} Computer: ${computerScore}`;
         score.appendChild(paraRound);
        return // console.log(`You lost! ${computerChoice} beats your ${humanChoice}.`);
    } else if (humanChoice == computerChoice) {
         paraRound.textContent = `It's a tie! You both picked ${humanChoice}. Player: ${playerScore} Computer: ${computerScore}`;
         score.appendChild(paraRound);
        return // console.log(`It\'s a tie! You both picked ${humanChoice}. `);
    } else {
        paraRound.textContent = `Your input \'${humanChoice}\' was invalid.`;
        score.appendChild(paraRound);
        return //console.log(`Your input \'${humanChoice}\' was invalid.`);
    }
}

let playerScore = 0;
let computerScore = 0;

function declareWiner(playerScore,computerScore) {
    if(playerScore == 5) {
        paraGame.textContent = `Player wins game! Final score of USER: ${playerScore}, COMPUTER: ${computerScore}`;
        score.appendChild(paraGame);
        return //console.log(`Player wins game! Final score of USER: ${playerScore}, COMPUTER: ${computerScore}`);
    } else if (computerScore == 5) {
        paraGame.textContent = `Computer wins game! Final score of USER: ${playerScore}, COMPUTER: ${computerScore}`;
        score.appendChild(paraGame);
        return //console.log(`Computer wins game! Final score of USER: ${playerScore}, COMPUTER: ${computerScore}`);
    } 
    return //console.log(`It\'s a tie! Final score of USER: ${playerScore}, COMPUTER: ${computerScore}`);
}



// const btnRock = document.querySelector(".rock");
// const btnPaper = document.querySelector(".paper"); 
// const btnScissor = document.querySelector(".scissor");
// const btnPressed = [btnRock.textContent.toLowerCase(), btnPaper.textContent.toLowerCase(), btnScissor.textContent.toLowerCase()];

// btnRock.addEventListener("click", () => {
//     humanSelection = btnRock.textContent.toLowerCase();
//     playRound(humanSelection, computerSelection);
// });
// btnPaper.addEventListener("click", () => {
//     humanSelection = btnPaper.textContent.toLowerCase();
//     playRound(humanSelection, computerSelection);
// });
// btnScissor.addEventListener("click", () => {
//     humanSelection = btnScissor.textContent.toLowerCase();
//     playRound(humanSelection, computerSelection);
// });













// function playGame() {
//     for(let i = 1; i <= 5; i++) {
//         console.log(`Round ${i}. User: ${playerScore}, Computer: ${computerScore}`);
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputeChoice();
//         // console.log(humanSelection + computerSelection);
//         playRound(humanSelection, computerSelection);

//     }
//     declareWiner(playerScore, computerScore);
//     if(confirm('Play Again?')){
//         playerScore = 0; computerScore = 0
//         console.clear();
//         playGame();
//     }
// }
// playGame();




// Define the getHumanChoice function Determine which button was clicked
function getHumanChoice(button) {
    if (button.classList.contains('rock')) {
        return 'rock';
    } else if (button.classList.contains('paper')) {
        return 'paper';
    } else if (button.classList.contains('scissor')) {
        return 'scissor';
    }
}

// Select all buttons
const buttons = document.querySelectorAll('button');
// Update the event listener to use the getHumanChoice function
buttons.forEach(button => {
    button.addEventListener('click', () => {
    humanSelection = getHumanChoice(button);
    let computerSelection = getComputeChoice();
    console.log(`Computer: ${computerSelection} User: ${humanSelection}`);
        
    playRound(humanSelection, computerSelection);
    declareWiner(playerScore, computerScore);


    });
});


const score = document.querySelector(".score");
let paraRound = document.createElement("p");
let paraGame = document.createElement("p");

function playGame() {
    for(let i = 1; i <= 5; i++) {
        
        let computerSelection = getComputeChoice();
        console.log(`Computer: ${computerSelection} User: ${humanSelection}`);

        playRound(humanSelection, computerSelection);
    }
    declareWiner(playerScore, computerScore);
}