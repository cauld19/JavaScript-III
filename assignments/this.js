/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/ global
* 2. implicit / left of the dot rule
* 3. new / create a new object that is the 'this'
* 4. explicit/ using call or apply to tell what 'this' is
*
* 
*/

// Principle 1

console.log(this);

// code example for Window Binding

// Principle 2

myObj = {
  name: 'christian',
  age: 99,
  sign: 'capricorn'
}

myObj.speak = function() {
  console.log(`My name is ${this.name} and I am a ${this.sign}`)
}

myObj.speak();

// code example for Implicit Binding

// Principle 3

function Person(attributes) {
  this.name = attributes.name;
  this.weight = attributes.weight;
  this.height = attributes.height;
  this.sign = attributes.sign;
  this.speak = function () {
    console.log (`${this.name} is a ${this.sign} `);
  }
}

let christian = new Person({name: 'christian', weight: 170, height: '2m', sign: 'capricorn'});
console.log(christian);

// code example for New Binding

let gary = new Person({name: 'gary', weight: 270, height: '2m', sign: 'virgo'});

christian.speak.call(gary);

// Principle 4

// code example for Explicit Binding