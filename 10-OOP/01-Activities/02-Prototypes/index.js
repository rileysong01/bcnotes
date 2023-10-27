// Constructor function
function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

// All objects created with the Dog constructor will now have the nap function in its prototype
Dog.prototype.nap = function () {
  console.log('Zzzzzzzzz');
};

const myDog = new Dog('Rex', 2, 'Bulldog');
console.log(myDog);

myDog.nap();
