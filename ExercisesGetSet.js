// 1.Create a class called Square with a single property, sideLength and create a constructor that assigns that value
// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }
// }

// 2. Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength)
// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }
//     get areaOfSquare () {
//     return this.sideLength * this.sideLength; // another way to write it is this.sideLength ** 2;
//     }
// }
// let area = new Square(5);
// console.log(area.areaOfSquare);

// 3. Create a setter for area that sets the sideLength for the given area (hint, use the Math.sqrt function to retrieve the square root of the area and assign it as the sideLength)
class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }
    get areaOfSquare () {
    return this.sideLength * this.sideLength;
    }
    set areaOfSquare (value) {
        this.sideLength = Math.sqrt(value);
    }
}
let area = new Square(6);

console.log(area.areaOfSquare);
area.squareArea = 100;
console.log(area.areaOfSquare);
console.log(area.sideLength)
