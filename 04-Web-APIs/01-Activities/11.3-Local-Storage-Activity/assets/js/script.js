
//REVIEW WELL

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

function renderTodos() {
  // clears the HTML content for todoList 
  todoList.innerHTML = "";
  // set todoCountSpan as the length of the todos array
  todoCountSpan.textContent = todos.length;
  
  // render in a new <li> element for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    // append <button> to each <li>
    li.appendChild(button);

    todoList.appendChild(li);
  }
}


function init() {
  //retrive the stored todos as an object and assign it to storedTodos
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  //if todos are successfully retrieved from local storage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // call the renderTodos function to list everything in todos
  renderTodos();
}

function storeTodos() {
  // stringify and set a key called todos in local storage containing our tudos array
  localStorage.setItem("todos", JSON.stringify(todos));
}
// function that will be triggered when the form is submitted
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // stop function if the submitted todoText is blank
  if (todoText === "") {
    return;
  }
  // add the newly added todoText to the todos array
  todos.push(todoText);
  // clear todoInput
  todoInput.value = "";
 
  // store the updated todos in local storage & re-render the todo list
  storeTodos();
  renderTodos();
});

// function that will be triggered when todoList elemenet is clicked
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // check if the element clicked is a button
  if (element.matches("button") === true) {
    // gets the data-index value of the clicked target and remove the todo element from te list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // store the updated todos in local storage & re-render the list
    storeTodos();
    renderTodos();
  }
});

// called to retrieve data and render it to the page when it loads in
init();
