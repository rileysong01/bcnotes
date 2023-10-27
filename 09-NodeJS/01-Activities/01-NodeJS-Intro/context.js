var person = {
    name: "Hodor",
    saySomething: function () {
        //this. refers to the object person
        console.log(this.name + " is thinking...");
        setTimeout(function () {
            console.log(this.name + "!");
        }, 100);
    }
};
// in the browser, 'setTimeout' is a property of the 'window' object


person.saySomething() //prints Hodor is thinking... Hodor!

var person = {
    name: "Hodor",
    saySomething: function() {
                // this. refers to the obeject person
      console.log(this.name + " is thinking...");
                                // this. refers to the setTimeout object!
      setTimeout(() => console.log(this.name + "!"), 100);
    }
  };
  person.saySomething(); //prints Hodor is thinking... undefined
// in node, 'setTimeout'' belongs to a specail "Timeout" object