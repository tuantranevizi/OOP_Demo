import { Vehicle } from "./Vehicle";

// Derived class SuperCar extending Vehicle
export class SuperCar extends Vehicle {
    private topSpeed: number;   // Private property: only accessible within SuperCar
    private horsepower: number;  // Private property: only accessible within SuperCar

    constructor(make: string, model: string, year: number, serial: string, topSpeed: number, horsepower: number) {
        super(make, model, year, serial); // Call the parent constructor
        this.topSpeed = topSpeed; // Initialize topSpeed
        this.horsepower = horsepower; // Initialize horsepower
    }

    // Public method to get supercar information
    public getSuperCarInfo(): string {
        return `${this.getInfo()} with serial: ${this.getSerial()} - Top Speed: ${this.topSpeed} km/h, Horsepower: ${this.horsepower} hp`;
    }

    // Public method to update top speed (encapsulated)
    public setTopSpeed(newTopSpeed: number): void {
        if (newTopSpeed > 0) {
            this.topSpeed = newTopSpeed; // Update top speed
        } else {
            console.error("Top speed must be positive."); // Log error for invalid input
        }
    }

    // Public method to get top speed
    public getTopSpeed(): number {
        return this.topSpeed; // Return the current top speed
    }

    // Protected method to get the serial (accessible in subclasses)
    protected getSerial(): string {
        return this.serial; // Return the serial number
    }
}