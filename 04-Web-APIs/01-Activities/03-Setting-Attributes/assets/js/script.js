// .querySelectorAll selects multiple elements (ELEMENT OR CLASS OR ID)
 var divTags = document.querySelectorAll("div");
 var pTags = document.querySelectorAll("p");
 var imgEl = document.querySelectorAll("img");

// .querySelector() selects single elements (CLASS OR ID)
  // REQUIRE # for ID and . for class
 var titleEl = document.querySelector(".title");
 var changeP = document.querySelector("#change2");


// Selects element by id
  // Does NOT REQUIRE #
var mainEl = document.getElementById("change2");

// Sets first pTag in the document to have a font-size of 40px
 pTags[0].setAttribute("style", "font-size: 40px;");

// Sets element to have multiple style attributes
 changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

 // Sets image source of the first image element in the document
 imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// Adds size and width styling to first image element
 imgEl[0].setAttribute("style", "width:50%");

// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "color:blue; font-size: 30px");
 }

// Cannot set multiple elements (even if they are the same element type or have the same class/ID) attributes with one line of code

 
