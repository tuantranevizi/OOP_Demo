// Abstract class Phone
abstract class Phone {
    abstract call(number: string): string; // Abstract method for calling
    abstract camera(): string; // Abstract method for camera functionality
    abstract getModel(): string; // Abstract method to get the model name

    describe(): string {
        return `${this.getModel()} - ${this.call("123-456-7890")} | Camera: ${this.camera()}`;
    }
}

// iPhone class extending Phone
class iPhone extends Phone {
    call(number: string): string {
        return `Calling ${number} from iPhone...`;
    }

    camera(): string {
        return "12 MP dual camera with Night mode.";
    }

    getModel(): string {
        return "iPhone 14 Pro";
    }
}

// Samsung class extending Phone
class Samsung extends Phone {
    call(number: string): string {
        return `Calling ${number} from Samsung...`;
    }

    camera(): string {
        return "108 MP triple camera with Space Zoom.";
    }

    getModel(): string {
        return "Samsung Galaxy S22 Ultra";
    }
}

// Nokia class extending Phone
class Nokia extends Phone {
    call(number: string): string {
        return `Calling ${number} from Nokia...`;
    }

    camera(): string {
        return "48 MP camera with ZEISS optics.";
    }

    getModel(): string {
        return "Nokia G50";
    }
}

// Function to display phone information
function displayPhoneInfo(phones: Phone[]): void {
    phones.forEach(phone => {
        console.log(phone.describe());
    });
}

// Creating an array of phones
const phones: Phone[] = [
    new iPhone(),
    new Samsung(),
    new Nokia()
];

// Displaying information about all phones
displayPhoneInfo(phones);