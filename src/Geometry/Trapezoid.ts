import { Shape } from './Shape';

export class Trapezoid extends Shape {
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

    // Overriding
    describe(): string {
        return `This Trapezoid has an area of ${this.calculateArea()} and a Perimeter of ${this.calculatePerimeter()}`
    }
}