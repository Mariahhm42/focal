// Hour 
// If hour is between 12pm and 6am: Good Morning!
// If it is betwen 12pm and 6pm: Good afternoon!
// otherwise: Good eveing
// The time is currently 10:00 am

// If (condition) {statement}
// else if (anotherCondition) {statement}

// if none of the value is true for either condition.... then
// else statement


let hour = 12
;
if (hour >= 6 && hour <12) // ... if hour is > 6 but less than 12
    console.log('Good morning');

else if (hour >= 12 && hour <18)
    console.log('Good afternoon')

else 
    console.log ('Good evening')
// you can get rid of the curly brackets
