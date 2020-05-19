// // Getters and Setters
// class Person {
//     constructor(name, age, heightInMm) {
//         this.name = name;
//         this.age = age;
//         this.heightInMm = heightInMm;
//     }
//     get heightInInches() {              //getter
//         return this.heightInMm / 2.54;
//     }
//     set heightInInches (value) {        // setter
//         this.heightInMm = value * 2.54;
//     }
//     get heightInCm() {
//         return this.heightInMm / 10
//     }
// }
// let me = new Person("Marcel", 38, 1635);

// console.log(me); // for  me details above

// console.log(me.heightInInches); // for height in inches

// me.heightInInches = 72; // set height

// console.log(me.heightInInches) // set above 72 to inches
// console.log(me.heightInCm)

// // Inheritance

// class Pet {
//     constructor(name, age, species) {
//         this.name = name;
//         this.age = age;
//         this.species = species;
//     }
// }
// // class Dog extends Pet {         // to add breed but is undefined
// //     breed;
// // }
// class Dog extends Pet {         // to add breed to console
//     constructor(name, age, species, breed) {
//         super(name, age, species);
//         this.breed = breed;
//     }
// }

// let bird = new Pet("Tiger", 5, "Bird");
// // let dog = new Dog("Bambi", 8, "Dog"); // underfined example
// let dog = new Dog("Bambi", 8, "Dog", "Poodle");
// console.log(bird);
// console.log(dog);

// Inheritance with function

class Pet {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    getInfo() {
        return `${this.name} the ${this.species} is ${this.age} years old.`
    }
}
class Dog extends Pet {         
        constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    getBreedInfo() {
        return `${this.name} is a ${this.breed}.`
    }
    getInfo() {
        return `${this.name} the ${this.species} is ${this.age} years old. ${this.name} is a ${this.breed}`
    }
}
class Poodle extends Dog {
    constructor(name, age) {
        super(name, age, "Poodle");
    }
}


let bird = new Pet("Tiger", 5, "Bird");
let pug = new Dog("Rex", 4, "Pug")
let poodle = new Poodle("Bambi", 8, "Dog", "Poodle");
console.log(bird);
console.log(pug);
console.log(pug.getInfo());
console.log(poodle.getBreedInfo());
console.log(pug.getBreedInfo());