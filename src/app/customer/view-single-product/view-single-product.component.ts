import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.scss']
})
export class ViewSingleProductComponent implements OnInit {

  product:any ={};
  constructor(private serviceSingle: ProductsService, public cart:CartService) { }

  ngOnInit(): void {

    this.serviceSingle.SingleProduct().subscribe((data:any)=>{
        this.product = data;

        console.log(this.product);
        console.log("hi");
    });

  }


  addCart(product: any)
  {
    this.cart.addToCart(product)

  }
}
