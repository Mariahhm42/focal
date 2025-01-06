// Get the command-line argument
const args = process.argv.slice(2); // Remove the first two arguments (node and script path)
const numberOfDice = parseInt(args[0], 10); // Convert the input to an integer

// Function to roll a single six-sided die
const rollDie = () => Math.floor(Math.random() * 6) + 1;

if (isNaN(numberOfDice) || numberOfDice <= 0) {
  console.log("Please provide a valid positive number of dice to roll.");
} else {
  const rolls = []; // Array to store the dice rolls
  for (let i = 0; i < numberOfDice; i++) {
    rolls.push(rollDie());
  }
  console.log(`Rolled ${numberOfDice} dice: ${rolls.join(", ")}`);
}
