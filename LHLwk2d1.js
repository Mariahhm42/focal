// ---------> Object and Arrays <----------

const studentOneObj = {
    studentName: 'alice',
    cohort: 'sep 23 2024',
    hasGraduated: 'false'
};
console.log(studentOneObj)
console.log(studentOneObj['studentName']);  //we use this to access a key

// if you try to access a key that does not exist, the output it Undefined
// console.log(studentOneObj['doesNotExist']);

const mykey = 'cohort'                    //you do not put quotes around the variable 
console.log(studentOneObj[mykey])        //my key is a variable, so there is no need to put the string

// you can change the value of an object- #you use square brackets  
studentOneObj['cohort']= 'oct 1 2024'
console.log(studentOneObj)

// you can use .syntax for a key but do ot use for a variable, use [] for a variable 
console.log(studentOneObj.cohort)
console.log(studentOneObj.mykey) //this will be undefined because mykey is a variable 
