var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmeticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var myString = "Hello String";

//Array Methods (ONLY works on ARRAYS)

//Sort the original array by alphabetical order
comparisonOperators.sort(); 
;

//Adds % to the end of the original array
arithmeticOperators.push("%");

//Removes the last element of the array
planets.pop();

//Adds elements as the first element of the array
planets.unshift("Pluto");

//Returns elements 0 - 2 as a new array (original array is unchanged!)
var logicalOperatorsSliced = logicalOperators.slice(0,2);



//String Methods (ONLY works on STRINGS)

//Replaces any characters called "String" with "World" and returns new string (original string is unchanged!)
var myNewString = myString.replace("String", "World");

