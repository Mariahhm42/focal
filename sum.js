// const args = process.argv.slice(2);
// console.log(args);
// // convert the strings to numbers frist 
// const num1 = Number(args[0]);
// const num2 = Number(args[1]);
// const sum = num1 + num2; //the sum of two arg
// console.log(sum);


function calculateSum(num1, num2) {
    return num1 + num2;
  }
  
  const num1 = Number(args[0]);
  const num2 = Number(args[1]);
  const sum = calculateSum(num1, num2);
  console.log(sum);
  if (args.length !== 2) {
    console.log('Please provide exactly two arguments');
    process.exit(1);
  }

//   const num1 = Number(args[0]);
// const num2 = Number(args[1]);
// const sum = calculateSum(num1, num2);

// // User interaction
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);