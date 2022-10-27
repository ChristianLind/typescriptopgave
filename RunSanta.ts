import { Bag } from "./bag";
import { BagType } from "./bagType";
import { Present } from "./present";
import { PresentType } from "./presentType";
import { Santa } from "./santa";
import { Sled } from "./sled";

let santa1 = new Santa("Bob", 200);
let sled1 = new Sled(santa1);
let bag1 = new Bag(10, BagType.canvas);
let present1 = new Present("Tog", 8, PresentType.hard);
let present2 = new Present("Tshirt", 3, PresentType.soft);

bag1.addPresent(present1);
bag1.addPresent(present2);
sled1.addBag(bag1);

sled1.addPresentAndNewBagIfNeeded(present2);
sled1.print();