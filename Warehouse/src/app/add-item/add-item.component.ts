import { Component } from '@angular/core';
// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item';
import { ItemService, ItemDto } from '../services/item.service';
import { NgForm } from '@angular/forms';
import { Type } from '../models/type';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  
model: ItemDto = {
  name: '',
  popularity: 0,
  typeId: 0,
  warehouseId: 0,
  quantity: 0
}
//new Item(0, "", new Type(0, ""), 0, 0, 0);

constructor(private service: ItemService){

}
onSubmit(){
  console.log("in the on submit method")
  this.service.addItem(this.model).subscribe((data) => {
    console.log(data);});
  console.log("item posted");
}
  // @Output() submit: EventEmitter<string> = new EventEmitter();

  // addCandy(newCandy: string): void {
  //   this.submit.emit(newCandy);
  // }
  // addItem(allItems){
  //   allItems.splice(0, 0, new AddItemComponent)
  //   return allItems;
  //   }
}
