//create a function to get computers choice
function getComputerChoice() {
  //create an array of choices for rock, paper scissors
  const choice = ["rock", "paper", "scissors"];
  //use math.random to pick random number between array choice length,
  //math.floor to make integer a whole number between 1-3
  // return random to get a random choice in the array
  const x = Math.floor(Math.random() * choice.length);
  const random = choice[x];
  return random;
}
let userScore = 0;
let computerScore = 0;
//console.log(getComputerChoice());
// Create a function that takes player & computer selection and determines winner
function playRound(playerSelection, computerSelection) {
  // Compare Rock, Paper & Scissors
  // determine when there is a tie
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "you tied!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "you tied!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "you tied!";
  } //Determine when computer wins
  else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose, paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose, scissors beats paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose, rock beats scissors!";
  } //Determine when player wins
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    userScore++;
    return "You win, rock beats scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userScore++;
    return "You win, paper beats rock!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userScore++;
    return "You win, scissors beats paper!";
  }
}

// let pick = prompt("Choose Rock, Paper or Scissors!");
// let playerSelection = pick.toLowerCase();
// let computerSelection = getComputerChoice();
//getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
function game() {
  for (let i = 0; i < 5; i++) {
    let pick = prompt("Choose Rock, Paper or Scissors!");
    let playerSelection = pick.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your Score is " + userScore);
    console.log("Computer Score is " + computerScore);
  }

  if (userScore > computerScore) {
    console.log(
      "Winner! " +
        "Your final score is " +
        userScore +
        " The computer scored " +
        computerScore
    );
  } else if (computerScore > userScore) {
    console.log(
      "Loser! " +
        "Your final score is " +
        userScore +
        " The computer scored " +
        computerScore
    );
  } else {
    console.log("You tied!");
  }
}
console.log(game());
