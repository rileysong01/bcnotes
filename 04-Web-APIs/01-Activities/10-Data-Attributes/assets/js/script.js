var container = document.querySelector(".container");

//event is an object that contain properties that describes it
  //where is the event? what is the event? etc.
container.addEventListener("click", function(event) {
  //target is a property of the event object (target of the clicked on object)
  var element = event.target;

  if (element.matches("div")){
                      //retrives the value of "data-state"
    var state = element.getAttribute("data-state")

  if (state === "hidden") {
                      //changes value of "data-state"
    element.setAttribute("data-state", "visible")
    element.textContent = element.getAttribute("data-number")
  }

  else {
    element.setAttribute("data-state", "hidden")
    element.textContent = ""
  }
}
});
