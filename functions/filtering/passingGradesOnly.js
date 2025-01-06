// Grades array
// Array of student grades
const studentGrades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

// Filter out grades that are 70 or above
// The arrow function checks if each grade is greater than or equal to 70
const gradesAbove70 = studentGrades.filter(grade => grade >= 70);

// Print out the list of passing grades
console.log("Passing grades:", gradesAbove70);