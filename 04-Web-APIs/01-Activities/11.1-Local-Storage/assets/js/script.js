var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();



function displayMessage(type, message) {
  msgDiv.textContent = message;
  //sets the value of the "class" attribute in msgDiv
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  userEmailSpan.textContent = localStorage.getItem("useremail")
  userPasswordSpan.textContent = localStorage.getItem("userpassword")
}

//localStorage is an object given by web API

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    //updates local storage key called "useremail" with the value of "email"
    localStorage.setItem("useremail", email)
    localStorage.setItem("userpassword", password)

    renderLastRegistered();
  }
});
