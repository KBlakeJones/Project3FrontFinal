import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemService, ItemDto } from '../services/item.service';
import { Type } from '../models/type';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

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
    this.service.updateItem(this.model).subscribe((data) => {
      console.log(data);});
    console.log("item updated");
  }

}
