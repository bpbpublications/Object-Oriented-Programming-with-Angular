"use strict";
exports.__esModule = true;
var engine_model_1 = require("./engine.model");
var Car = /** @class */ (function () {
    function Car() {
        this.engine = new engine_model_1.Engine();
        this.engine.model = "Car Model";
    }
    return Car;
}());
exports.Car = Car;
