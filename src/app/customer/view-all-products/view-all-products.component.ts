import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

import { ApiServiceService } from '../api-service.service';

import { Product } from '../../interfaces/Item'

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.scss']
})
export class ViewAllProductsComponent implements OnInit {

  // products:any = [];

  products: Product[];
  constructor(public apiService: ApiServiceService, public product:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();

    // console.log(this.products);
    
    this.apiService.getProducts().subscribe((item: any)=>{
      this.products=item.results;
      console.log(this.products);
      console.log(this.products.length);
      console.log('hello');
    });
      // console.log(this.products);
      
  }

  submit(product:any)
  
  {
    // this.router.navigate(['/']);
    let id = product._id;

    console.log(id);
    this.product.changeId(id);
    


  }
  getProducts(): void {
    this.apiService.getProducts()
      .subscribe(
        res => this.products = res,
        err => console.log(err)
      )
  }
}

