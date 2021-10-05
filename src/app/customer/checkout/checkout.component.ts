import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  qty:any = 1;

  allCartProduct : any = [];
  totalAmount:number  = 0;
  constructor(public cart:CartService) { }

  ngOnInit(): void {
    this.cart.displayCartItems().subscribe((item:any) => {
      this.allCartProduct = item;
      this.totalAmount = this.cart.getTotalPrice();
      this.allCartProduct.forEach((element : any) => {
        Object.assign(element, {quantity:1, total:element.qty})
      });
     });

     console.log(this.allCartProduct);
  }




  
}
