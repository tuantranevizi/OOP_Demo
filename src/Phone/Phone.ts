// Create a base Phone class
export abstract class Phone {
    protected os: string ;      // Protected property: accessible within Phone and subclasses
    public brand: string ;      // Public property: accessible anywhere
    public model: string;       // Public property: accessible anywhere
    public price: number ;      // Public property: accessible anywhere
    private serial: number;     // Private property: only accessible within Phone

    constructor(os: string, brand: string, model: string, price: number, serial: number){
        this.os = os;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.serial = serial;
    }

    // Declare some abstracted methods 
    abstract call():string;
    abstract record(): string;
    
    // Optional method: Used to get Phone's info also will be used to implement overloading/overriding
    public getInfo(): string{
        return `Brand: ${this.brand}, Model: ${this.model}, OS: ${this.os}, Serial: ${this.serial}`
    }
}