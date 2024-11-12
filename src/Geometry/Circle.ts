import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
    // Overloading
    calculateArea(): number;

    // Implementing the abstract method
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}