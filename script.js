let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() *10);
// Compare guesses
const compareGuesses = (user, computer, target) => {
  let userDif = Math.abs(target - user);
  let compDif = Math.abs(target - computer);
  if (user < 0 || user > 9) {
    alert('Please enter a number in the range of 0-9.');
  };
  if (userDif <= compDif) {
    return true;
  } else {
    return false;
  };
};
// Update Score
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++
  };
};
// Advance round
const advanceRound = () => currentRoundNumber++;
