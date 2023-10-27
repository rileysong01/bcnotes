var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// Split message string into array
var words = message.split(' ');

function countdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
                             //if timeLeft is 1, expression evaluates to "second left"
                             //other wise evaluates to "seconds left"
    timerEl.textContent = timeLeft + (timeLeft === 1 ? " second left" : " seconds left");
    timeLeft--;
   
    if(timeLeft === 0) {
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      timerEl.textContent = "";
      wordCount++;
    }
  }, 1000);
}

countdown();
