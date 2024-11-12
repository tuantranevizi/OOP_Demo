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
        return `${this.year} ${this.make} ${this.model}`;
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

// Creating an instance of SuperCar
const myFerrari = new SuperCar("Ferrari", "LaFerrari", 2015, 'ABCD1234', 350, 950);
const myLamborghini = new SuperCar("Lamborghini", "Aventador", 2019, 'EFJK5678', 400, 1000);

// Displaying information about the supercar
console.log(myFerrari.getSuperCarInfo());
console.log(myLamborghini.getSuperCarInfo());

// Updating the top speed
myFerrari.setTopSpeed(360);
console.log(`Updated ${myFerrari.getInfo()} Top Speed: ${myFerrari.getTopSpeed()} km/h`);
myLamborghini.setTopSpeed(390);
console.log(`Updated ${myLamborghini.getInfo()} Top Speed: ${myLamborghini.getTopSpeed()} km/h`);

// Attempting to set an invalid top speed
console.log(`\nAttempt to set a negative top speed:`)
myLamborghini.setTopSpeed(-50); // This will log an error

// Accessing the protected property (this is not allowed outside the class or subclasses)
// console.log(myLamborghini.serial); // This will cause a compilation error
// console.log(myLamborghini.getSerial()); // This will cause a compilation error