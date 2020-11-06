"use strict";
exports.__esModule = true;
var Engine = /** @class */ (function () {
    function Engine(_horsePower) {
        this.horsePower = _horsePower;
    }
    return Engine;
}());
exports.Engine = Engine;
var EngineService = /** @class */ (function () {
    function EngineService(horsePower) {
        this._engine = new Engine(horsePower);
    }
    EngineService.prototype.getEngine = function () {
        return this._engine;
    };
    return EngineService;
}());
exports.EngineService = EngineService;
var Car = /** @class */ (function () {
    function Car(engineService) {
        this.engine = engineService.getEngine();
        this.engine.model = "Car Model";
    }
    return Car;
}());
exports.Car = Car;
var Truck = /** @class */ (function () {
    function Truck(engineService) {
        this.engine = engineService.getEngine();
        this.engine.model = "Truck Model";
    }
    return Truck;
}());
exports.Truck = Truck;
var engineService = new EngineService(3000);
var car = new Car(engineService);
car.name = "Car1";
console.log(car);
var truck = new Truck(engineService);
truck.name = "Truck1";
console.log(truck);
