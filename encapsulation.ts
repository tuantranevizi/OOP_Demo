// Encapsulation Demo
// Base class Vehicle
class Vehicle {
    private make: string;      // Private property: only accessible within Vehicle
    private model: string;     // Private property: only accessible within Vehicle
    private year: number;      // Private property: only accessible within Vehicle
    protected serial: string;   // Protected property: accessible within Vehicle and subclasses

    constructor(make: string, model: string, year: number, serial: string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.serial = serial;
    }

    // Public method to get vehicle information
    public getInfo(): string {
        return `${this.year} ${this.make} ${this.model} ${this.serial}`;
    }
}

// Derived class SuperCar extending Vehicle
class SuperCar extends Vehicle {
    private topSpeed: number;   // Private property: only accessible within SuperCar
    private horsepower: number;  // Private property: only accessible within SuperCar

    constructor(make: string, model: string, year: number, serial: string, topSpeed: number, horsepower: number) {
        super(make, model, year, serial); // Call the parent constructor
        this.topSpeed = topSpeed; // Initialize topSpeed
        this.horsepower = horsepower; // Initialize horsepower
    }

    // Public method to get supercar information
    public getSuperCarInfo(): string {
        return `${this.getInfo()} - Top Speed: ${this.topSpeed} km/h, Horsepower: ${this.horsepower} hp`;
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

// Creating an instance of SuperCar
const mySuperCar = new SuperCar("Ferrari", "LaFerrari", 2015, 'ABCD1234', 350, 950);

// Displaying information about the supercar
console.log(mySuperCar.getSuperCarInfo());

// Updating the top speed
mySuperCar.setTopSpeed(360);
console.log(`Updated Top Speed: ${mySuperCar.getTopSpeed()} km/h`);

// Attempting to set an invalid top speed
mySuperCar.setTopSpeed(-50); // This will log an error

// Accessing the protected property (this is not allowed outside the class or subclasses)
// console.log(mySuperCar.serial); // This will cause a compilation error