// Encapsulation Demo
import { SuperCar } from "./SuperCar";

function main() {
    // Creating an instance of SuperCar
    const myFerrari = new SuperCar(
        "Ferrari",
        "LaFerrari",
        2015,
        "ABCD1234",
        350,
        950
    );
    const myLamborghini = new SuperCar(
        "Lamborghini",
        "Aventador",
        2019,
        "EFJK5678",
        400,
        1000
    );
    const myPagani = new SuperCar(
        "Pagani",
        "Huaya R",
        2020,
        "LMNO9012",
        410,
        1005
    );
    // Displaying information about the supercar
    console.log(myFerrari.getInfo());
    console.log(myLamborghini.getInfo());
    console.log(myPagani.getInfo());
    // Updating the top speed
    myFerrari.setTopSpeed(360);
    console.log(
        `> Updated ${myFerrari.getInfo()} Top Speed: ${myFerrari.getTopSpeed()} km/h`
    );
    myLamborghini.setTopSpeed(390);
    console.log(
        `> Updated ${myLamborghini.getInfo()} Top Speed: ${myLamborghini.getTopSpeed()} km/h`
    );
    myLamborghini.setTopSpeed('420');
    console.log(
        `> Updated ${myPagani.getInfo()} Top Speed: ${myPagani.getTopSpeed()} km/h`
    );
    // Attempting to set an invalid top speed
    console.log(`\nAttempt to set a negative top speed:`);
    myLamborghini.setTopSpeed(-50); // This will log an error

    // Accessing the protected property (this is not allowed outside the class or subclasses)
    // console.log(myLamborghini.serial); // This will cause a compilation error
    // console.log(myLamborghini.getSerial()); // This will cause a compilation error
}

// Execute the main function
main();