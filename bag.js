"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag = void 0;
var bagType_1 = require("./bagType");
var presentType_1 = require("./presentType");
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }
    Bag.prototype.addPresent = function (present) {
        if (this.totalWeight() + present.getWeight() > this.maxWeight) {
            return false;
        }
        else {
            if (present.presenttype == presentType_1.PresentType.soft) {
                if (this.bagType == bagType_1.BagType.paper) {
                    return false;
                }
                else {
                    this.presents.push(present);
                    return true;
                }
            }
            else {
                this.presents.push(present);
                return true;
            }
        }
    };
    Bag.prototype.totalWeight = function () {
        var totalWeight = 0;
        this.presents.forEach(function (presentWeight) {
            var weight = presentWeight.getWeight();
            totalWeight += weight;
        });
        return totalWeight;
    };
    Bag.prototype.print = function () {
        this.presents.forEach(function (Present) {
            Present.print();
        });
        console.log("This bag has a max weight of: " + this.maxWeight + " and is of type: " + this.bagType);
    };
    return Bag;
}());
exports.Bag = Bag;
//# sourceMappingURL=bag.js.map