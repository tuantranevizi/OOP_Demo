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

// Another derived class (Child class) that inherits from Animal
class Bird extends Animal {
    // Overiding methods from the parent class
    speak(): void {
        console.log(`${this.name} chirps.`);
    }

    getType(): string {
        return "Bird";
    }
}
// Creating instances of Dog and Cat
const dog = new Dog('Rex');
const cat = new Cat('Whiskers');
const bird = new Bird('Peter');

// Calling the speak method for each instance
dog.speak(); // Output: Rex barks.
dog.eat('turkey'); // Output: Rex is eating turkey.
dog.sleep(5); // Output: Rex is sleeping for 5 hours.
console.log(`Type of animal: ${dog.getType()}\n`) // Output: Type of animal: Dog

cat.speak(); // Output: Whiskers meows.
cat.eat('tuna'); // Output: Whiskers is eating tuna.
cat.sleep(3); // Output: Whiskers is sleeping for 3 hours.
console.log(`Type of animal: ${cat.getType()}\n`) // Output: Type of animal: Cat

bird.speak(); // Output: Peter meows.
bird.eat('seeds'); // Output: Peter is eating seeds.
bird.sleep(4); // Output: Peter is sleeping for 4 hours.
console.log(`Type of animal: ${bird.getType()}`) // Output: Type of animal: Bird