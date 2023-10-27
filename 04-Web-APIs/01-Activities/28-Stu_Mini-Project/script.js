
document.addEventListener("keydown", checker);
var answer = ["j", "a", "v", "a", "s", "c", "i", "p", "t"]
var ulEl = document.querySelector("ul");

function checker(event) {
    var keyPress = event.key;

    for (var i = 0; i < answer.length; i++) {
    }
}

function renderList() {
    for (var i = 0; i < answer.length; i++) {

        var liEl = document.createElement("li");
        liEl.textContent = "??";
        liEl.setAttribute("data-index", i);

        ulEl.appendChild(liEl);

    }
}

renderList();





//key up keydown


//scorekeeping  