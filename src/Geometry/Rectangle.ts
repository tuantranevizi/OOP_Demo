import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }    

    // Implementing the abstract method
    calculateArea(): number {
        return this.width * this.height;
    }

    // Overloading
    calculatePerimeter(): number; 
    calculatePerimeter(width: number, height: number): number; 
    // Implementing the overloaded method
    calculatePerimeter(width?: number, height?: number): number {
        // If width and height are provided, use them; otherwise, use the instance's width and height
        const w = width !== undefined ? width : this.width;
        const h = height !== undefined ? height : this.height;
        return 2 * (w + h);
    }

    // Overriding
    describe(): string {
        return `This Rectangle has an area of ${this.calculateArea()} and a Perimeter of ${this.calculatePerimeter()}`
    }
}