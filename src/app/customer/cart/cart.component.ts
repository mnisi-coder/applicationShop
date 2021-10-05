import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  qty:any = 1;
  Sub:number = 0;
  allCartProduct : any = [];
  totalAmount:number  = 0;
  constructor(public cart:CartService, public CartAPI:CartService) { }

  ngOnInit(): void {

   this.cart.displayCartItems().subscribe((item:any) => {
    this.allCartProduct = item;
    this.Sub = this.cart.Subtotal();
    this.totalAmount = this.cart.getTotalPrice();
    this.allCartProduct.forEach((element : any) => {
      Object.assign(element, {quantity:1, total:element.qty})
    });
   })


  
    console.log(this.allCartProduct);
  }


 deleteItem(item:any)
  {
  

    this.cart.deleteCart(item);
      
  }

}


