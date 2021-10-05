import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:any = [];
  productList = new BehaviorSubject<any>([]);
  constructor() { }

  displayCartItems()
  {
    return this.productList.asObservable();
  }

  setProduct(product :any)
  {
    this.cartItems.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any)
  {
      this.cartItems.push(product);
      this.productList.next(this.cartItems);
      this.getTotalPrice();
      this.Subtotal();

      //console.log(this.cartItems);
  }

  getTotalPrice() :number
  {
    let totalPrice = 0;

    this.cartItems.map((item :any) =>{
      totalPrice +=item.total;
    })

      return totalPrice;

  }


 deleteCart(product :any)
  {

    let index =this.cartItems.findIndex(item => item.id === item.id)

    if (index !== -1){
      this.cartItems.splice(index,1)
    }
    
  }

  deleteAllCart()
  {
    this.cartItems = [];
    this.productList.next(this.cartItems);
  }

  Subtotal() :number
  {
    let Sub = 0;

    this.cartItems.map((item :any) =>{
     (Sub = item.quantity * item.qty);
    })

      return Sub;

  }

}
