//Globally declared variables are available to all functions
var shout = "shout";

function justShout() {
  console.log(shout + ", " + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
}


//Locally declared variables are only available to that function
function sayLions() {
  var animal = "Lions"; 
  console.log(animal);
  return;
}

function sayTigers() {
  var animal = "Tigers"; 
  console.log("and " + animal + " and ");
  return;
}

function sayBears() {
    var bears = "Bears";
    console.log(bears + "! OH MY!");
    return;
}

sayLions(); //logs "lions"
sayTigers(); //logs "and tigers and"
sayBears(); //logs "bears! OH MY!"

