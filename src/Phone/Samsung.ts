import { Phone } from "./Phone";

export class Samsung extends Phone{
    constructor(os: string, brand: string, model: string, price: number, serial: number){
            super(os, brand, model , price , serial);
    }


    public call(): string{
        return "Calling from Samsung...";
    }
    public record(): string{
        return "Recording using Samsung...";
    }
    
}