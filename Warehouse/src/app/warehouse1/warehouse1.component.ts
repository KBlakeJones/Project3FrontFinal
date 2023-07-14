import { Component, Injectable, OnInit } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { Warehouse } from '../about/warehouse';

@Component({
  selector: 'app-warehouse1',
  templateUrl: './warehouse1.component.html',
  styleUrls: ['./warehouse1.component.css']
})
export class Warehouse1Component implements OnInit{
  warehouse: Warehouse[] = []

  constructor(public warehouseService: WarehouseService){}

  ngOnInit(){
    this.warehouse = this.warehouseService.getWarehouses()
  }

}