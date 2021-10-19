//let playerChoice = prompt("Choose your weapon", "");
//let playerHand = playerChoice.toLowerCase();
//console.log("Player played: " + playerHand);

function computerPlay() {
  let choiceNum = Math.random();
  console.log(choiceNum);
  let computerChoice;
  if (choiceNum <= 0.33) computerChoice = "rock";
  else if (choiceNum > 0.33 && choiceNum <= 0.66) computerChoice = "paper";
  else computerChoice = "scissors";
  return computerChoice;
}

function playRound(computerHand) {
  let playerChoice = prompt("Choose your weapon", "");
  let playerHand = playerChoice.toLowerCase();
  console.log(computerHand + playerHand);
  if (computerHand === playerHand) console.log("It's a tie");
  else if (computerHand === "rock" && playerHand === "scissors")
    console.log("Computer Wins " + computerHand + " Beats " + playerHand);
  else if (computerHand === "rock" && playerHand === "paper")
    console.log("player Wins " + playerHand + " Beats " + computerHand);
  else if (computerHand === "paper" && playerHand === "rock")
    console.log("Computer Wins " + computerHand + " Beats " + playerHand);
  else if (computerHand === "paper" && playerHand === "scissors")
    console.log("player Wins " + playerHand + " Beats " + computerHand);
  else if (computerHand === "scissors" && playerHand === "paper")
    console.log("Computer Wins " + computerHand + " Beats " + playerHand);
  else if (computerHand === "scissors" && playerHand === "rock")
    console.log("player Wins " + playerHand + " Beats " + computerHand);
}

//playRound(computerPlay(), playerHand);

for (let i = 0; i <= 4; i++) {
  console.log("Round " + i);
  playRound(computerPlay());
}
