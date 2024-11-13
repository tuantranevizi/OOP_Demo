// Base class Vehicle
export class Vehicle {
    private make: string;       // Private property: only accessible within Vehicle
    private model: string;      // Private property: only accessible within Vehicle
    private year: number;       // Private property: only accessible within Vehicle
    protected serial: string;   // Protected property: accessible within Vehicle and subclasses

    constructor(make: string, model: string, year: number, serial: string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.serial = serial;
    }

    // Public method to get vehicle information
    public getInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}