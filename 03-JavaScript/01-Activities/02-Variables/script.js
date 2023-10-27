// JavaScript variable data types:

// Undefined variables haven't been assigned values yet.
var myUndefined;

// A string is a series of characters and is surrounded by quotes 
var myStringWelcome = "Hello World"; 
var myStringPassword = "865Password!2020";

// A number can be either an integer or a decimal  
var myNumberInt = 100;
var myNumberDecimal = 100.100;

// Booleans have two values: true or false
var isMyBooleanTrue = true;
var isMyBooleanFalse = false;

// To check the type of data, use typeof followed by the name of the variable
// Logs undefined (undefined)
console.log(typeof myUndefined);

// So far, we have been storing one piece of data in variables
var name = "Andre";
var pets = 3; 
var isStudent = true;

// To store groups of data in a single variable, we use arrays
var classmates = ["Andre", "Karl", "Rashida", "Olivia"];


// Arrays are zero-indexed, so the index of first element in the array is 0
console.log(names[0]); 


//Use index to replace "Olivia" with "Carter"
names[3] = "Carter"; 


// We use the array's length property to determine how many elements are in the array
console.log(names.length);