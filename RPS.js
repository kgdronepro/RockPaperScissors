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
console.log(getComputerChoice());
