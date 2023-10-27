// Functions are reusable blocks of code that perform a specific task

// This is a function declaration 
function declareHello() { 
  console.log("Hello, I am a function declaration.");
  console.log("-----------------------------------");
  // Return stops the execution of a function (implied and doesn't have to be typed)
  return;
}

// This is a function expression
  // Functions can be variables
var expressHello = function() { 
  console.log("Hello, I am a function expression.");
  console.log("-----------------------------------");
  return;
};

// Functions must be called to execute
declareHello(); 
expressHello();


// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(x, y, z) { 
  console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z);
  console.log("-----------------------------------");
  return;
}

// Calls the declareHelloAgain function with the following custom parameters
declareHelloAgain(7, "Hello", true);
