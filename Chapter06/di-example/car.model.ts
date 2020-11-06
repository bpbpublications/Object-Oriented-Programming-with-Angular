import { Engine } from "./engine.model";

export class Car {
    name: string;
    engine: Engine;

    constructor() {
        this.engine = new Engine();
        this.engine.model = "Car Model";
    }
}