import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  allCartProduct:any = [];
  name: any;
  item: any;
  product: [];
  constructor(public cart:CartService, private api: ApiServiceService,private router:Router) { }

  ngOnInit(): void {

    this.cart.displayCartItems().subscribe((item:any) => {
      this.allCartProduct = item;
      

      let count = this.allCartProduct.length;
     });
    }

     submit(){

      this.api.search(this.name);
      this.router.navigate(['/search']);
        
     }
    
  }



