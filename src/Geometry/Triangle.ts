import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(private base: number, private height: number, private sideA: number, private sideB: number) {
        super();
    }

    // Overloading
    calculateArea(): number;
    calculateArea(base: number, height: number): number;
    
    // Implementing the abstract methods
    calculateArea(): number {
        return (this.base * this.height) / 2;
    }

    calculatePerimeter(): number {
        return this.base + this.sideA + this.sideB;
    }

}