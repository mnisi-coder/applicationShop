import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  id: number ;
  
  singleProductURL = "http://localhost:3000/items";

  BASE_URL: string = 'http://localhost:3000/items/';

  constructor(public http: HttpClient) {}

  changeId(id:any)
  {
    this.id = id;
  }

  SingleProduct() {
    return this.http.get(this.BASE_URL + this.id);
  }

  
}
