import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import {Product} from '../interfaces/Item';
import { BehaviorSubject } from 'rxjs';




 

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  BASE_URL: string = 'http://localhost:3000/items?offset=0&limit=13&fields=name&text=a';
  // apiUrl=("https://fakestoreapi.com/");

 

  constructor(public http: HttpClient) { }

  // displayAllProducts()

  // {
  //   return this.http.get("http://localhost:3000");
  // }

  getProducts(): Observable<Product[]>{

    return this.http.get<Product[]>(`${this.BASE_URL}`);
  }

  delete(id:any){

    return this.http.delete(`http://localhost:3000/items/`+ id);
  }


  display()
  {
    return this.http.get<Product[]>(`${this.BASE_URL}/items`);

  }
  private searchResults = new BehaviorSubject('');
  product =  this.searchResults.asObservable();

 search(name: any)
  {

    this.searchResults.next(name);
    
  }

  results()
  {
    return this.product;
  }


  viewSearch(name:any)
  {
    console.log(name);
    // return this.http.get<Product[]>(`${this.BASE_URL}/items`);
     return this.http.get<Product[]>(`http://localhost:3000/items?offset=0&limit=15&fields=name&text=`+ name)
  }
 

  AddItem(data:any)
  {
    const type = 'application/json; charset=UTF-8';
        // tslint:disable-next-line: deprecation
        const headers = new Headers({'Content-Type': type});
        // tslint:disable-next-line: deprecation
        // const options = new RequestOptions({headers});
        const BASE_URL1 = 'http://localhost:3000';

    return this.http.post(`${BASE_URL1}/items`,data);

  }
}






