var x = 15;
var expression1 = (x < 25);
var expression2 = (x > 50);

//Code only executed when certain conditions are met
if (expression1 == true && expression2 == true) {
    console.log("True ✅ True ✅")
} else if (expression1 == true && expression2 == false) {
    console.log("True ✅ False ❌")
} else if (expression1 == false && expression2 == true) {
    console.log("False ❌ True ✅")
} else {
    console.log("False ❌ False ❌")
}

