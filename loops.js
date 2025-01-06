// * -----------The different kinds of loops we have -------*
// for loop
// while 
// do...while
// for...in
// for...of


// For loop...> has three statements
// for (initialExpression)- used to declare and initialize a variable 
// use let to declare i and set it to 0. i is short for index.. e.g (let i = 0)
// second statement is the condition --- the loop will run as long as the condition is true  e.g (i < 5) as long as i is < 5,the loop will execute 
// thrid is increment expression (i++)
// statement in curly braket {console.log('hello world');}
// i++ means i is incremented by 1 so it will repeatedly add 1 to i until it is less than 5

// let (initialExpression; condition; increment expression){statement}

// >-------For LOOP-------


// for (let i = 0; i < 5; i++){
//     console.log('Hello World');
// } 

for (let i = 0; i < 5; i++){
    if (i % 2 !==0) console.log(i); // if the remainder of the division of i by 2 is not equals to 0, that means i is an odd number (i % 2 !==0)
}

