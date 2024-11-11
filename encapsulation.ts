// Base class Vehicle
class Vehicle {
    private make: string; // Private property
    private model: string; // Private property
    private year: number; // Private property

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Public method to get vehicle information
    public getInfo(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

// Derived class SuperCar extending Vehicle
class SuperCar extends Vehicle {
    private topSpeed: number; // Private property
    private horsepower: number; // Private property

    constructor(make: string, model: string, year: number, topSpeed: number, horsepower: number) {
        super(make, model, year);
        this.topSpeed = topSpeed;
        this.horsepower = horsepower;
    }

    // Public method to get supercar information
    public getSuperCarInfo(): string {
        return `${this.getInfo()} - Top Speed: ${this.topSpeed} km/h, Horsepower: ${this.horsepower} hp`;
    }

    // Public method to update top speed (encapsulated)
    public setTopSpeed(newTopSpeed: number): void {
        if (newTopSpeed > 0) {
            this.topSpeed = newTopSpeed;
        } else {
            console.error("Top speed must be positive.");
        }
    }

    // Public method to get top speed
    public getTopSpeed(): number {
        return this.topSpeed;
    }
}

// Creating an instance of SuperCar
const mySuperCar = new SuperCar("Ferrari", "LaFerrari", 2015, 350, 950);

// Displaying information about the supercar
console.log(mySuperCar.getSuperCarInfo());

// Updating the top speed
mySuperCar.setTopSpeed(360);
console.log(`Updated Top Speed: ${mySuperCar.getTopSpeed()} km/h`);

// Attempting to set an invalid top speed
mySuperCar.setTopSpeed(-50); // This will log an error