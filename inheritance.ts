// Inheritance Demo

// Base class (Parent class)
class Animal {
    constructor(public name: string) { }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }

    eat(food:string): void {
        console.log(`${this.name} is eating ${food}.`)
    }

    sleep(hours:number): void {
        console.log(`${this.name} is sleeping for ${hours} hours.`)
    }

    getType(): string {
        return "Animal";
    }
}

// Derived class (Child class) that inherits from Animal
class Dog extends Animal {
    // Overiding methods from the parent class
    speak(): void {
        console.log(`${this.name} barks.`);
    }

    getType(): string {
        return "Dog";
    }
}

// Another derived class (Child class) that inherits from Animal
class Cat extends Animal {
    // Overiding methods from the parent class
    speak(): void {
        console.log(`${this.name} meows.`);
    }

    getType(): string {
        return "Cat";
    }
}

// Creating instances of Dog and Cat
const dog = new Dog('Rex');
const cat = new Cat('Whiskers');

// Calling the speak method for each instance
dog.speak(); // Output: Rex barks.
dog.eat('turkey'); // Output: Rex is eating turkey.
dog.sleep(5); // Output: Rex is sleeping for 5 hours.
console.log(`Type of animal: ${dog.getType()}`) // Output: Type of animal: Dog

cat.speak(); // Output: Whiskers meows.
cat.eat('tuna'); // Output: Whiskers is eating tuna.
cat.sleep(3); // Output: Whiskers is sleeping for 3 hours.
console.log(`Type of animal: ${cat.getType()}`) // Output: Type of animal: Cat