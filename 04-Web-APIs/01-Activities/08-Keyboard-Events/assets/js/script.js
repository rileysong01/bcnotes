//Query select HTML elements
keyEl = document.querySelector("#key");
codeEl = document.querySelector("#code");

function keydownAction(event) {
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  // change HTML content 
  keyEl.textContent = event.key; // to key property of the keyboard down event
  codeEl.textContent = event.code; // to code property of the keyboard down event
}

function keyupAction() {
  // changes HTML content of status element to "KEYUP EVENT"
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction)
// TODO: Add Event Listener for "keydown" event

