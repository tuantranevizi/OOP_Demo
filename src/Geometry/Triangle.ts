import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(private base: number, private height: number, private sideA: number, private sideB: number) {
        super();
    }

    // Overloading for calculateArea
    calculateArea(): number;
    calculateArea(base: number, height: number): number; 
    // Implementing the calculateArea method
    calculateArea(base?: number, height?: number): number {
        const b = base !== undefined ? base : this.base;
        const h = height !== undefined ? height : this.height;
        return (b * h) / 2;
    }

    // Overloading for calculatePerimeter
    calculatePerimeter(): number; 
    calculatePerimeter(sideA: number, sideB: number, base: number): number;
    // Implementing the calculatePerimeter method
    calculatePerimeter(sideA?: number, sideB?: number, base?: number): number {
        const a = sideA !== undefined ? sideA : this.sideA;
        const b = sideB !== undefined ? sideB : this.sideB;
        const baseLength = base !== undefined ? base : this.base;
        return a + b + baseLength;
    }

    // Overriding
    describe(): string {
        return `This Triangle has an area of ${this.calculateArea()} and a Perimeter of ${this.calculatePerimeter()}`
    }
}