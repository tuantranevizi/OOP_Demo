// Inheritance Demo

// Parent class
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

// Child class that inherits from Animal
class Dog extends Animal {
    // Overiding methods from the parent class
    speak(): void {
        console.log(`${this.name} barks.`);
    }

    getType(): string {
        return "Dog";
    }
}

// Another child class that inherits from Animal
class Cat extends Animal {
    // Overiding methods from the parent class
    speak(): void {
        console.log(`${this.name} meows.`);
    }

    getType(): string {
        return "Cat";
    }
}

// Another child class that inherits from Animal
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
const dog = new Dog('Kiki');
const cat = new Cat('Sushi');
const bird = new Bird('Boba');

// Calling the speak method for each instance
dog.speak();             // Output: Kiki barks.
dog.eat('turkey');       // Output: Kiki is eating turkey.
dog.sleep(5);            // Output: Kiki is sleeping for 5 hours.
console.log(`Type of animal: ${dog.getType()}\n`) // Output: Type of animal: Dog

cat.speak();            // Output: Sushi meows.
cat.eat('tuna');        // Output: Sushi is eating tuna.
cat.sleep(3);           // Output: Sushi is sleeping for 3 hours.
console.log(`Type of animal: ${cat.getType()}\n`) // Output: Type of animal: Cat

bird.speak();           // Output: Boba meows.
bird.eat('seeds');      // Output: Boba is eating seeds.
bird.sleep(4);          // Output: Boba is sleeping for 4 hours.
console.log(`Type of animal: ${bird.getType()}`) // Output: Type of animal: Bird