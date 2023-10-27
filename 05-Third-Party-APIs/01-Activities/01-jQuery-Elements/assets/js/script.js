// Comments show the vanilla JavaScript equivalent statements

// var rootEl = document.getElementById("root");
  //select HTML element with id "root"
var rootEl = $('#root');

// var titleEl = document.createElement("h1");
  //create a h1 HTML element
var titleEl = $('<h1>');

// titleEl.textContent = "Hello friends";
  //set the text content of an element
titleEl.text('Hello friends');

// titleEl.className = 'fancy';
  //set the class attribute of an element
titleEl.attr('class', 'fancy');

// titleEl.classList.add('p-5') - (`p-5` is for padding)
  //add a class to HTML element called 'p-5'
titleEl.addClass('p-5');

// titleEl.style.border = "rgb(122, 242, 242) 3px solid";
  //set css style for HTML element
titleEl.css('border', 'rgb(122, 242, 242) 5px solid');

// rootEl.appendChild(titleEl);
  //append created element to HTML element
rootEl.append(titleEl);

// titleEl.append("Welcome to jQuery");
  //append h2 element with text value to HTML element
rootEl.append('<h2>With jQuery we can:</h2>');

var abilities = [
  'Select',
  'Create',
  'Style',
  'Animate',
  'Traverse',
  'Event Listen',
  'much more',
];

//Using regular web API

for (var i = 0; i < abilities.length; i++) {
  // Create a new `<li>` for each ability and its text content
  var abilityEl = $('<li>');

  // abilityEl.textContent = abilities[i];
  abilityEl.text(abilities[i]);

  // `my-3` class adds margin on top and bottom
  abilityEl.addClass('my-3');

  // Alternatively
  // var abilityEl = $("<li>" + abilities[i] + "</li>");

  // Add this new `<li>` to the abilities `<li>` container element.
  rootEl.append(abilityEl);
}


//Using the JQuery`$.each` method
  //for each element in the 'abilities' array, a new <li> is craeted with the value of the current 'ability' concatenated 
$.each(abilities, function(i, ability) {
   rootEl.append("<li>" + ability + "</li>");
})
