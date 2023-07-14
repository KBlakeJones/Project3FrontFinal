import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { Type } from '../models/type';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  itemId = 0;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap; 
    this.itemId = Number(routeParams.get('id'));
    throw new Error('Method not implemented.');
  }
  model: Item = new Item(0, "", new Type(0, ""), 0, 0, 0);

  onSubmit(){
    console.log(this.itemId)
    this.model.itemId = this.itemId;
    this.itemService.deleteItem(this.model).subscribe((data) => {
      console.log(data);});
    console.log("item deleted");
    this.router.navigate(["/inventory"]);
  }
}
