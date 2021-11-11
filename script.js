let computerScore = 0;
let playerScore = 0;
const computerWinsParent = document.querySelector(".computer-score");
let computerScoreText = document.createElement("p");
const playerWinsParent = document.querySelector(".player-score");
let playerScoreText = document.createElement("p");

computerWinsParent.appendChild(computerScoreText);
playerWinsParent.appendChild(playerScoreText);

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    const playerChoice = e.target.dataset.choice;
    console.log("Player chooses: " + playerChoice);
    computerPlay(playerChoice);
  })
);

function computerPlay(player) {
  let choiceNum = Math.random();
  console.log(choiceNum);
  let computerChoice;
  if (choiceNum <= 0.33) computerChoice = "rock";
  else if (choiceNum > 0.33 && choiceNum <= 0.66) computerChoice = "paper";
  else computerChoice = "scissors";
  playRound(computerChoice, player);
}

function playRound(computerHand, playerHand) {
  console.log("Computer chooses: " + computerHand);
  if (computerHand === playerHand) console.log("It's a tie");
  else if (
    (computerHand === "rock" && playerHand === "scissors") ||
    (computerHand === "paper" && playerHand === "rock") ||
    (computerHand === "scissors" && playerHand === "paper")
  ) {
    ++computerScore;
    updateScore(computerScore, playerScore);
    gameOverCheck(computerScore);
  } else if (
    (computerHand === "rock" && playerHand === "paper") ||
    (computerHand === "paper" && playerHand === "scissors") ||
    (computerHand === "scissors" && playerHand === "rock")
  ) {
    ++playerScore;
    updateScore(computerScore, playerScore);
    gameOverCheck(playerScore);
  }
}

function updateScore(computer, player) {
  computerScoreText.textContent = computer;
  playerScoreText.textContent = player;
}

function gameOverCheck(score) {
  if (score === 5) gameOver();
}

function gameOver() {
  alert("Game Over");
}
