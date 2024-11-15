// Import from Geometry
import { Circle } from './src/Geometry/Circle';
import { Rectangle } from './src/Geometry/Rectangle';
import { Square } from './src/Geometry/Square';
import { Triangle } from './src/Geometry/Triangle';
import { Trapezoid } from './src/Geometry/Trapezoid';

// Import from Car
import { SuperCar } from "./src/Car/SuperCar";

// Geometry Main
function geo_test() {
    // Initialize instances
    const myCircle = new Circle(5);
    console.log(myCircle.describe());
    console.log(`This shape area is: ${myCircle.calculateArea().toFixed(2)}`);
    console.log(`This shape perimeter is: ${myCircle.calculatePerimeter().toFixed(2)}`);

    const myRectangle = new Rectangle(10, 5);
    console.log(myRectangle.describe());

    const mySquare = new Square(10);
    console.log(mySquare.describe());

    const myTriangle = new Triangle(10, 5, 7, 8);
    console.log(myTriangle.describe());

    const myTrapezoid = new Trapezoid(10, 5, 4, 6, 6);
    console.log(myTrapezoid.describe());
}


// Car Main
function car_test() {
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

function main(){
    // Execute the test functions
    geo_test();
    car_test();
}

main()