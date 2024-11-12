export abstract class Shape {
    // Abstract methods to be implemented by derived classes
    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;

    // Optional method that can be inherited as-is
    describe(): string {
        return `This is a shape with area ${this.calculateArea()} and perimeter ${this.calculatePerimeter()}.`;
    }
}