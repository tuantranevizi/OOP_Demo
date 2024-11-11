// Abstract Shape class
abstract class Shape {
    // Abstract methods to be implemented by derived classes
    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;

    // Optional method that can be inherited as-is
    describe(): string {
        return `This is a shape with area ${this.calculateArea()} and perimeter ${this.calculatePerimeter()}.`;
    }
}

// Circle class extending Shape
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    // Implementing the abstract method
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Rectangle class extending Shape
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    // Implementing the abstract method
    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Square class extending Shape
class Square extends Shape {
    constructor(private side: number) {
        super();
    }
    // Implementing the abstract method
    calculateArea(): number {
        return this.side * this.side;
    }

    calculatePerimeter(): number {
        return this.side * 4;
    }
}

// Triangle class extending Shape
class Triangle extends Shape {
    constructor(private base: number, private height: number, private sideA: number, private sideB: number) {
        super();
    }

    // Implementing the abstract methods
    calculateArea(): number {
        return (this.base * this.height) / 2;
    }

    calculatePerimeter(): number {
        return this.base + this.sideA + this.sideB;
    }
}

// Trapezoid class extending Shape
class Trapezoid extends Shape {
    constructor(private base1: number, private base2: number, private height: number, private sideA: number, private sideB: number) {
        super();
    }

    // Implementing the abstract methods
    calculateArea(): number {
        return ((this.base1 + this.base2) * this.height) / 2;
    }

    calculatePerimeter(): number {
        return this.base1 + this.base2 + this.sideA + this.sideB;
    }
}

// Initialize instances
const myCircle = new Circle(5);
console.log(myCircle.describe()); // This is a shape with area 78.54 and perimeter 31.42.
console.log(`This shape area is: ${myCircle.calculateArea()}`) // This shape area is : 78.54
console.log(`This shape perimeter is: ${myCircle.calculatePerimeter()}`) // This shape perimeter is: 31.42

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.describe()); // This is a shape with area 50 and perimeter 30.

const mySquare = new Square(10);
console.log(mySquare.describe()) // This is a shape with area 100 and perimeter 40.

const myTriangle = new Triangle(10, 5, 7, 8);
console.log(myTriangle.describe()); // This is a shape with area 25.00 and perimeter 25.00.

const myTrapezoid = new Trapezoid(10, 5, 4, 6, 6);
console.log(myTrapezoid.describe()); // This is a shape with area 30.00 and perimeter 27.00.
