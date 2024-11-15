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
    public getInfo(): string {
        return `${super.getInfo()} with serial: ${this.getSerial()} - Top Speed: ${this.topSpeed} km/h, Horsepower: ${this.horsepower} hp`;
    }
    
    // Overloading
    public setTopSpeed(newTopSpeed: number): void;
    public setTopSpeed(newTopSpeed: string): void;

    public setTopSpeed(newTopSpeed: number | string): void {
        if (typeof newTopSpeed === 'number') {
            if (newTopSpeed > 0) {
                this.topSpeed = newTopSpeed;
            } else {
                console.error("Top speed must be positive."); 
            }
        } else if (typeof newTopSpeed === 'string') {
            const parsedSpeed = parseInt(newTopSpeed, 10);
            if (!isNaN(parsedSpeed) && parsedSpeed > 0) {
                this.topSpeed = parsedSpeed;
            } else {
                console.error("Invalid top speed input. Please provide a valid number.");
            }
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