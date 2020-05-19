// 1. Create a class called Person with three properties called firstName, lastName and age. Include a constructor that assigns these values
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }

// 2. Create a method in person called getInfo that takes no parameters and returns information about the name and age of the person
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getInfo () {
//         return `${this.firstName} ${this.lastName} ${this.age}`
//     }
// }
// let him = new Person("Jim", "Smith", 35)
// console.log(him.getInfo());

// 3. Create a class called Student that extends Person. Student should have a property called grades that should be an array of numbers that represent their mark out of 100 for a series of tests
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getInfo () {
//         return `${this.firstName} ${this.lastName} ${this.age}`
//     }
// }
// class Student extends Person {
//     constructor (firstName, lastName, age, grades) {
//         super(firstName, lastName, age)
//             this.grades = grades
//     }
//     getInfoGrade () {
//         return `${this.firstName} ${this.lastName} ${this.age} ${this.grades}`
//     }
// }

// let him = new Person("Jim", "Smith", 35);
// let her = new Student("Jan", "Hobbs", 32, [80, 70, 90]);
// console.log(him.getInfo());
// console.log(her.getInfoGrade());

// 4. 
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getInfo() {
//         return `${this.firstName} ${this.lastName} ${this.age}`
//     }
// }
// class Student extends Person {
//     constructor(firstName, lastName, age, grades) {
//         super(firstName, lastName, age)
//         this.grades = grades
//     }
//     getInfoGrade() {
//         return `${this.firstName} ${this.lastName} ${this.age} ${this.grades}`
//     }
//     getAverageGrade() {
//         let totalGrades = 0;
//         for (let i = 0; i < this.grades.length; i++) {
//             totalGrades += this.grades[i];
//         }
//         return totalGrades / this.grades.length;
//     }
// // reducer to make this easier
//             // let totalGrades = this.grades.reduce(function(total, currentValue)) {
//             //     return total + currentValue;
//             // });
//             // return totalGrades / this.grades.length();
// }

// let him = new Person("Jim", "Smith", 35);
// let her = new Student("Jan", "Hobbs", 32, [80, 70, 90]);
// console.log(him.getInfo());
// console.log(her);
// console.log(her.getAverageGrade());


// 5.
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getInfo() {
//         return `${this.firstName} ${this.lastName} ${this.age}`
//     }
// }
// class Student extends Person {
//     constructor(firstName, lastName, age, grades) {
//         super(firstName, lastName, age)
//         this.grades = grades
//     }
//     getInfoGrade() {
//         return `${this.firstName} ${this.lastName} ${this.age} ${this.grades}`
//     }
//     getAverageGrade() {
//         let totalGrades = 0;
//         for (let i = 0; i < this.grades.length; i++) {
//             totalGrades += this.grades[i];
//         }
//         return totalGrades / this.grades.length;
//     }
//     getInfo() {                                     // overide from parent to child
//         return `${super.getInfo()} and their average grade is ${this.getAverageGrade()}`
//     }
// }

// let him = new Person("Jim", "Smith", 35);
// let her = new Student("Jan", "Hobbs", 32, [80, 70, 90]);
// console.log(him.getInfo());
// console.log(her);
// console.log(her.getAverageGrade());

// 7.
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getInfo() {
        return `${this.firstName} ${this.lastName} ${this.age}`
    }
}
class Student extends Person {
    constructor(firstName, lastName, age, grades) {
        super(firstName, lastName, age)
        this.grades = grades
    }
    getInfoGrade() {
        return `${this.firstName} ${this.lastName} ${this.age} ${this.grades}`
    }
    getAverageGrade() {
        let totalGrades = 0;
        for (let i = 0; i < this.grades.length; i++) {
            totalGrades += this.grades[i];
        }
        return totalGrades / this.grades.length;
    }
    getInfo() {                                     // overide from parent to child
        return `${super.getInfo()} and their average grade is ${this.getAverageGrade()}`
    }
}
class Teacher extends Person {
    constructor(firstName, lastName, age, students) {
        super(firstName, lastName, age);
        this.students = students;
    }
    // getStudentAvgGrade() {
    //     let totalGrades = this.grades.reduce(function (total, student) {
    //         return total + student.getAverageGrade();
    //     }, 0);
    //     return totalGrades / this.students.length;
    }
}
let students = [
    new Student("Annie", "Sims", 25, [78, 96, 80]),
    new Student("David", "Byrd", 26, [79, 86, 63]),
    new Student("Jimbo", "Jones", 21, [56, 95, 74])
];
let myTeacher = new Teacher("Simon", "Says", 55, students)
console.log(myTeacher);
// console.log(myTeacher.getStudentAvgGrade());
