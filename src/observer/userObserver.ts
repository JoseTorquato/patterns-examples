import { Observer } from "./interfaces/observer";

export class UserObserver implements Observer {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(message: any) {
        console.log(`Observer ${this.name}: Is received ${message}`)
    }
}