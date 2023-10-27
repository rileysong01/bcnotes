//logs the node global object! (vs the windows when ran in browser)
(function () {
  console.log(this);
})();

// function declaration 
function createGreeting(message, name) {
  return message + ',' + name + '!';
}
// function expression
var createGreeting = function(message, name) {
  return message + ',' + name + '!';
}

// arrow function
var createGreeting = (message, name) => {
  return message + ',' + name + '!';
}

// omit curly braces + return when function body only has 1 expression
var createGreeting = (message, name) => message + ',' + name + '!';

//omit parentheses when there is only one parameter
var greet = greeting => console.log(greeting)

var greeting = createGreeting('Hello', "Darwin")
greet(greeting)