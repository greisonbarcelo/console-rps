# console-rps
Refresher repo for Rock Paper Scissors


## pseudo code
> choices are: rock, paper, scissor  
  
* get user choice using getHumanChoice using prompt to be stored in a parameter humanChoice  
* get computer random choice using getComputerChoice function to be returned to computerChoice parameter  
* compare user choice against computer choice  
* create function playRound() to initiate game use parameters of humanChoice and computerChoice  
* make user's answer case INsensitive (.toLowerCase)  
* print winner of a round with string in the console representing the round winner, such as: “You lose! Paper beats Rock”.  
* add score to whoever wins, humanScore and computerScore  
* add stopping function to whoever have the highest score after 5 rounds then declare the winner to console log  
* create playGame() function and should have playRound() inside of it  

### choices logic
logic: 
rock > scissor
rock < paper
paper > rock
paper < scissor

> if both uses same choice = tie