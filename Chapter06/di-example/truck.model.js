"use strict";
exports.__esModule = true;
var engine_model_1 = require("./engine.model");
var Truck = /** @class */ (function () {
    function Truck() {
        this.engine = new engine_model_1.Engine();
        this.engine.model = "Truck Model";
    }
    return Truck;
}());
exports.Truck = Truck;
