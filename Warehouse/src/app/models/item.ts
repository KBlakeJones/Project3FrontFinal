import { Type } from "./type";
import { AddItemComponent } from "../add-item/add-item.component";

export class Item {
    constructor(
        public itemId: number,
        public itemName: string,
        public type: Type,
        public quantity: number,
        public warehouse: number,
        public popularity: number){}
}