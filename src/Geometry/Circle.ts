import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    // Overloading
    calculateArea(): number; 
    calculateArea(radius: number): number;

    // Implementing the overloaded method
    calculateArea(radius?: number): number {
        // If a radius is provided, use it; otherwise, use the instance's radius
        const r = radius !== undefined ? radius : this.radius;
        return Math.PI * r * r;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
    
    // Overriding
    describe(): string {
        return `This Circle has an area of ${this.calculateArea()} and a Perimeter of ${this.calculatePerimeter()}`
    }
}