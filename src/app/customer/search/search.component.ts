import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/Item';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  name: any;
  item : any ={}
  product:any ;
  BASE_URL: string = 'http://localhost:3000';

  products: any = [];

  constructor(private api: ApiServiceService, public http: HttpClient, public productAPI:ProductsService) { }

  ngOnInit(): void {
  

    this.api.results()
    .subscribe(
      res => this.product = res,
      err => console.log(err)
    )
    // console.log(this.product);

    this.getProducts();
    
  
}

getProducts(): void {
  this.api.viewSearch(this.product)
    .subscribe(
      res => this.products = res,
      err => console.log(err)

      
    )


    this.api.viewSearch(this.product).subscribe((item: any)=>{
      this.products=item.results;
      console.log(this.products);
      console.log(this.products.length);
      console.log('hello');
    });

    console.log(this.products);
}

submit(product:any)
  
{
  // this.router.navigate(['/']);
  let id = product._id;

  console.log(id);
  this.productAPI.changeId(id);
  


}


}
