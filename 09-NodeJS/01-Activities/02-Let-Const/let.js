// 1. 'var' scope can be global or functional, but NOT by block-level!
  //since for loops are not functions, i is defined outside of the for loop
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // Prints 5

// 'let' has block-level scope
let x = 42;
for (let j = 0; j < 5; j++) {
  console.log(j);
  console.log(x);
}
console.log(j); // ReferenceError: j is not defined

let j = 42;
console.log(j); // prints 42

// ==========================================================================

// 2. When using while loops, any values we create inside exist outside of the while-loop block

var count = 0;

while (count < 5) {
  var tripled = count * 3;
  count++;
}
console.log(tripled); // Prints 12

// ==========================================================================

// 3. When using let, values defined inside of the while-loop block don't exist outside of it

let c = 0;

while (c < 5) {
  let quadrupled = c * 4;
  c++;
}
console.log(quadrupled); // ReferenceError: quadrupled is not defined

// ==========================================================================

// 4. When writing conditionals, values defined inside the conditional block exist outside of it

if (true) {
  var favoriteColor = "red";
}
console.log(favoriteColor); // Prints `red`

// When using let, values defined inside of a conditional block don't exist outside

let favoriteFood;

if (true) {
  favoriteFood = "pizza";
}
// but favoriteFood exists as it was defined outside of the if statement
console.log(favoriteFood); // Prints `pizza`
