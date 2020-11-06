import { Engine } from "./engine.model";

export class Truck {
    name: string;
    engine: Engine;

    constructor() {
        this.engine = new Engine();
        this.engine.model = "Truck Model";
    }
}