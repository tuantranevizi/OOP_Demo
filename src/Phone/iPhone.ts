import { Phone } from "./Phone";

export class iPhone extends Phone {
    private version: number;
    private storage: number;
    constructor(os: string, brand: string, model: string, price: number, serial: number, version: number, storage: number) {
        super(os, brand, model, price, serial,);
        this.version = version;
        this.storage = storage;
    }

    public getInfo(): string {
        return `OS version: ${this.version} ${this.storage}GB`;
    }

}