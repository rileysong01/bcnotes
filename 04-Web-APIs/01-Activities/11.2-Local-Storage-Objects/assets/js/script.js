var studentEl = document.getElementById("student-names");
var gradeEl = document.getElementById("grades");
var commentEl = document.getElementById("msg");
var saveButtonEl = document.getElementById("save");

saveButtonEl.addEventListener("click", function (event) {
  event.preventDefault();

  //Object to be stored locally
  var studentGrade = {
    student: studentEl.value,
    grade: gradeEl.value,
    //trim removes any trailing or leading spaces
    comment: commentEl.value.trim()
  };
  //JavaScript Object Notations (JSON) convert object to string to be stored in local storage
  localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
  renderMessage();

});

function renderMessage() {
  //retrive the studentGrade item from localStorage and store it in the variable lastGrade
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student +
      " received a/an " + lastGrade.grade
  }
}
