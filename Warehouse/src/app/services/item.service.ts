import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import { Item } from '../models/item';
import { NgForm } from '@angular/forms';

export interface ItemDto {
name: string;
id?: number;
warehouseId: number;
typeId: number;
quantity: number;
popularity: number;​​​​​​
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = "http://52.207.41.42:8080"

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<Item[]>>{
    return this.http.get<Item[]>(this.url + "/items", { observe: 'response' });
  }

  addItem(item: ItemDto):Observable<Item>{

    return this.http.post<Item>(this.url + "/items", item, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

  updateItem(item: ItemDto): Observable<Item> {
    return this.http.put<Item>(this.url + "/items", item, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

  deleteItem(item: Item): Observable<Item> {
    return this.http.delete<Item>(this.url + "/items/" + item.itemId);
  }

}