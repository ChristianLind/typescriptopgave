import { BagType } from "./bagType";
import { Present } from "./present";
import { PresentType } from "./presentType";

export class Bag {
    maxWeight: number;
    bagType: BagType;
    presents: Present[];

    constructor(maxWeight: number, bagType: BagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }

    addPresent(present: Present) : boolean {
        if (this.totalWeight() + present.getWeight() > this.maxWeight) {
            return false;
        } else {
            if (present.presenttype == PresentType.soft) {
                if (this.bagType == BagType.paper) {
                    return false;
                } else {
                    this.presents.push(present);
                    return true;
                }
            } else {
                this.presents.push(present);
                return true;
            }
        }
    }

    totalWeight() : number {
        let totalWeight = 0;
        this.presents.forEach(presentWeight => {
            let weight = presentWeight.getWeight();
            totalWeight += weight;
        })
        return totalWeight;
    }

    print() : void {
        this.presents.forEach(Present => {
            Present.print();
        })
        console.log("This bag has a max weight of: " + this.maxWeight + " and is of type: " + this.bagType);
    }
}