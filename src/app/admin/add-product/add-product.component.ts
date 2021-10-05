import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/customer/api-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  
  name: string;
  des: string;
  qty: number;
  imageURL: '';
  price:number;

  constructor(private router:Router, public api:ApiServiceService) { }

  ngOnInit(): void {
  }




 addMenu(){
  return new Promise(resolve => {
    const body = {

      name: this.name,
      Description: this.des,
      qty: this.qty,
      imageURL: this.imageURL,
      price:this.price,
  
    };
    

      this.api.AddItem(body).subscribe(data => {
        this.router.navigate(['/adminView'])
      })
  });
 }
  
  openAdd()
  {

    this.router.navigate(['/adminView']);
  }

}
