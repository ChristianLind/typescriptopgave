"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Present = void 0;
var Present = /** @class */ (function () {
    function Present(name, weight, presenttype) {
        this.name = name;
        this.weight = weight;
        this.presenttype = presenttype;
    }
    Present.prototype.getPresentType = function () {
        return this.presenttype;
    };
    Present.prototype.getWeight = function () {
        return this.weight;
    };
    Present.prototype.print = function () {
        console.log(this.name + " " + this.weight + " " + this.presenttype);
    };
    return Present;
}());
exports.Present = Present;
//# sourceMappingURL=present.js.map