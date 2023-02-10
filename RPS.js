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
//console.log(getComputerChoice());
// Create a function that takes player & computer selection and determines winner
function playRound(playerSelection, computerSelection) {
  // Compare Rock, Paper & Scissors to determine winner, loser or a tie
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("you tied!");
    console.log(playerSelection);
    console.log(computerSelection);
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("you tied!");
    console.log(playerSelection);
    console.log(computerSelection);
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("you tied!");
    console.log(playerSelection);
    console.log(computerSelection);
  } //Determine who loses with conditions
  else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose, paper beats rock!");
    console.log(playerSelection);
    console.log(computerSelection);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose, scissors beats paper!");
    console.log(playerSelection);
    console.log(computerSelection);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose, rock beats scissors!");
    console.log(playerSelection);
    console.log(computerSelection);
  } //Determine who wins with conditions
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win, rock beats scissors!");
    console.log(playerSelection);
    console.log(computerSelection);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win, paper beats rock!");
    console.log(playerSelection);
    console.log(computerSelection);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win, scissors beats paper!");
    console.log(playerSelection);
    console.log(computerSelection);
  }
}
const pick = prompt("Pick");
const playerSelection = pick.toLowerCase();
const computerSelection = getComputerChoice();
//getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
