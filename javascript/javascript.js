
// console.log(getComputeChoice());

function getComputeChoice() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random()*choices.length)];
}
function getHumanChoice() {
    let choice = prompt("Enter your choice: ", "").toLowerCase();
    return choice;
}