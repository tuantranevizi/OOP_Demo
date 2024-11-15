import { Shape } from "./Shape";

export class Square extends Shape {
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

    // Overriding
    describe(): string {
        return `This Square has an area of ${this.calculateArea()} and a Perimeter of ${this.calculatePerimeter()}`
    }
}