"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaneDto = exports.Plane = void 0;
var Plane = /** @class */ (function () {
    function Plane(id) {
        this.id = id;
        this.currentPosition = { x: 0, y: 0, z: 0 };
        this.isOn = false;
        this.intervals = [];
    }
    return Plane;
}());
exports.Plane = Plane;
var PlaneDto = /** @class */ (function () {
    function PlaneDto() {
    }
    return PlaneDto;
}());
exports.PlaneDto = PlaneDto;
//# sourceMappingURL=plane.js.map