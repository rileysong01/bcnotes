console.log("Document Body: ")
console.log(document.body);

//Children of body element (NOT GRANDCHILDREN) given as an array
console.log("Children of Document Body: ")
console.log(document.body.children);

//First child of the body element
console.log("First child of body: ")
console.log(document.body.children[0]);

//The first child (first li) of the second child (ul) of the body element
console.log("First child of the ul: ")
console.log(document.body.children[1].children[0]);

// Accessing element by ID
var firstChildUl = document.getElementById("first-child-ul");
console.log(firstChildUl)

// Setting style of element
firstChildUl.style.color = "green";
