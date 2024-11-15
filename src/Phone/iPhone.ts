import { Phone } from "./Phone";

export class iPhone extends Phone {
    private version: number;
    private storage: number;
    constructor(os: string, brand: string, model: string, price: number, serial: number, version: number, storage: number) {
        super(os, brand, model, price, serial,);
        this.version = version;
        this.storage = storage;
    }

    public call(): string;
    public call(phoneNumber: string): string;
    public call(phoneNumber?: string) {
        if (phoneNumber) {
            return `Calling ${phoneNumber} on iPhone ${this.version} with ${this.storage}GB storage
            `
        }
    }

    public record(): string ;
    public record(audio: string): string;
    public record(audio?: string) {
        if (audio){
            return `Recording audio on iPhone ${this.version} with ${this.storage}GB storage`
        }
    }

    public getInfo(): string {
        return `${super.getInfo()} OS version: ${this.version} ${this.storage}GB`;
    }
}