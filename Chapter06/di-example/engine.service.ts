import { Engine } from "./main";

export class EngineService {
    private _engine: Engine;

    public get engine(): Engine {
        return this._engine;
    }

    constructor(horsePower: number) {
        this._engine = new Engine(horsePower);
    }
}