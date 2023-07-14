import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<Item[]>>{
    return this.http.get<Item[]>("this.url", { observe: 'response' });
  }
}