    export class Engine {
        model: string;
        horsePower: number;

        constructor(_horsePower: number) {
            this.horsePower = _horsePower;
        }
    }

    export class EngineService {
        private _engine: Engine;

        public getEngine(): Engine {
            return this._engine;
        }

        constructor(horsePower: number) {
            this._engine = new Engine(horsePower);
        }
    }

    export class Car {
        name: string;
        private engine: Engine;

        constructor(engineService: EngineService) {
            this.engine = engineService.getEngine();
            this.engine.model = "Car Model";
        }
    }

    export class Truck {
        name: string;
        engine: Engine;

        constructor(engineService: EngineService) {
            this.engine = engineService.getEngine();
            this.engine.model = "Truck Model";
        }
    }

    const engineService = new EngineService(3000);
    const car = new Car(engineService);
    car.name = "Car1";
    console.log(car);

    const truck = new Truck(engineService);
    truck.name = "Truck1";
    console.log(truck);