import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';
import { Typecheck } from '../models/typecheck';
import { AddItemComponent } from '../add-item/add-item.component';
import { Type } from '../models/type';
​
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  itemList: Item[]=[];
  typeList: Typecheck[] = [];
  allItems: Item[]=[];
  // n = new Item(0, "", 0, 0, 0, 0);
​
  constructor(private itemService: ItemService){}
  model: Item = new Item(0, "", new Type(0, ""), 0, 0, 0);
  
​
  ngOnInit(): void {
   this.itemService.findAll().subscribe((data) => {
    if(data.body != null){
      this.allItems = data.body;
      this.itemList= this.allItems;
    }
    // ngOnInit(): void {
    //   this.itemService.add().subscribe((data) => {
    //    if(data.body != null){
    //      this.allItems = data.body;
    //      this.itemList= this.allItems;
    //    }

   });
    this.typeList.push(new Typecheck(2, "Gummy", false));
    this.typeList.push(new Typecheck(1, "Chocolate", false));
    this.typeList.push(new Typecheck(10, "Hardcandy", false));
    this.typeList.push(new Typecheck(4, "Gum", false));
    this.typeList.push(new Typecheck(5, "Taffy", false));
    this.typeList.push(new Typecheck(6, "Licorice", false));
    this.typeList.push(new Typecheck(7, "Drinks", false));
    this.typeList.push(new Typecheck(8, "Sours", false));
    this.typeList.push(new Typecheck(9, "Cakes", false));
    this.typeList.push(new Typecheck(3, "Lollipop", false));

  }

  filter(type: Typecheck): void{
    let i = this.typeList.findIndex(t => t.typeId == type.typeId);
    this.typeList[i].checked= !this.typeList[i].checked;

    // grab all the active filters (just the id's)
    let active = this.typeList.filter(type => type.checked == true).map(t => t.typeId);

    if (active.length > 0) {
      // displayed items now reflect the active filters
      this.itemList = this.allItems.filter(item => active.includes(item.type.typeId));
    } else {
      this.itemList = this.allItems;
    }

    // this.typeList.forEach(type => console.log(type.description + ": " + type.checked))
  }

// deleteItem(delete: Item): void{
// const index: number = this.itemList.indexOf(d);
// let i = this.itemList.findIndex(d => d.item_id == delete.item_id);
// // if (index !== -1){
// //   this.itemList.splice(index, 1);
// // }

// }
// deleteItem(itemList: Item): void{
//   this.itemList = this.itemList.filter(Item => Item !== Item)
// }

// addItem(){
//   let n = new Item();
//   n.item_name = "";
//   n.item_id = 0;
//   n.popularity = 0;
//   n.quantity = 0;
//   n.type_id = 0;
//   n.warehouse_id = 0;
//   n.splice(0, 0, new AddItemComponent)
//   return allItems;
//   }

// addItem(){
//   this.allItems.push(new Item(0, "", 0, 0, 0, 0));
//   console.log("item posted");
// }


 
//  onSubmit(){
//    console.log("in the on submit method")
//    this.itemService.deleteItem(this.model).subscribe((data) => {
//      console.log(data);});
//    console.log("item deleted");
//  }


}