import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }    
    // Overloading
    calculateArea(): number;
    
    // Implementing the abstract method
    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}