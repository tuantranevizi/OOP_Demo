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
}