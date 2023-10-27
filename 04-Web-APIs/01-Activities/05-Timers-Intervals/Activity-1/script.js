var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("#main");

var secondsLeft = 10;

function setTime() {
  // setInterval() function repeatedly execute a specific function at a specific time
  var timerInterval = setInterval(function() {
    // secondsLeft decrement by 1 every loop
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
    // loop runs every 1000 milisecond 
  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " "; // clears the text content in timerEl
  var imgEl = document.createElement("img"); // creates image element
  imgEl.setAttribute("src", "images/image_1.jpg"); // links image
  mainEl.appendChild(imgEl); // append to HTML so it appears

}

setTime();
