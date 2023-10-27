
//Logs the Window/Browser/Chrome (considered an object!)
console.log(this);

//Still the Window/Browser/Chrome
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

//Logs the var age + 10 (20)
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

//Refers to the initialInvestment value inside the investment object nested inside the investor object!
   //Can have objects nested inside of objects!
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

