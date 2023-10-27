// do NOT use arrow functions for object methods

var dog = {
    name: "Lassie",
    sound: "Woof!",
                                // this. refers 'module.exports' (the object containing all the exports in this file) and not 'dog' 
    makeSound: () => console.log(this.sound),
    readTag: () => console.log("The dog's tag reads: " + this.name + ".")
  };

dog.makeSound(); // prints 'undefined'

dog.readTag(); //prints 'undefined'