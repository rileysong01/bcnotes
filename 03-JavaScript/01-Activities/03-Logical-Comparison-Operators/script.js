var a = 100;
var b = 10;
var c = "10";

// Arithmetic operators combine with numbers to form an expression that returns a single number
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);

// Modulus returns the remainder between two numbers.  
// 4%2=0 (two 2s in 4 and 0 remainder) 3%2=1  8%5=3
console.log(a % b);

// Equality operator (checks for equality of value AFTER performing type coercion)
console.log(b == c); //true! same value even though they are different data types!
console.log(b != c); //false! checks for NOT equality of values 

// Strict equality operator (checks for equality of BOTH value and type)
console.log(b === c); //false! same value but not the same data type!
console.log(b !== c); //true!

// Greater than or less than
console.log(a > b); //true
console.log(a < b); //false

// Greater than or equal to and less than or equal to
console.log(a <= b); // false
console.log(a >= b); //true

// Logical operators take in two or more expressions and return true or false 
var expression1 = (b == c); //true is the value of the expression1 variable 
var expression2 = (a > b); //true is the value of the expression2 variable

// Evaluates to true if expression1 AND expression2 are both true, otherwise false
console.log(expression1 && expression2);

// Evaluates to true if expression1 OR expression2 is true, otherwise false
console.log(expression1 || expression2);

// Logical Not(!) turns an expression that evaluates to true to false and vice versa
//!expression2 means NOTexpression2
console.log(!expression2);
