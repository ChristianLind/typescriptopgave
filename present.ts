import { PresentType } from "./presentType";

export class Present {
    name: string;
    weight: number;
    presenttype: PresentType;

    constructor(name: string, weight: number, presenttype: PresentType) {
        this.name = name;
        this.weight = weight;
        this.presenttype = presenttype;
    }

    getPresentType () {
        return this.presenttype;
    }

    getWeight() {
        return this.weight;
    }

    print() : void {
        console.log(this.name + " " + this.weight + " " + this.presenttype);
    }
}