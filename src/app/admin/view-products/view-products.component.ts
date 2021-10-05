import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/customer/api-service.service';
import { Product } from 'src/app/interfaces/Item';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  showMsg:boolean = false;
  products: Product[];
  constructor(public apiService: ApiServiceService, public product:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
    // this.apiService.getProducts().subscribe((item: any)=>{
    //   this.products=item;
    //   console.log(this.products);
    //   console.log('hello');
    // });

  }

  submit(product:any)
  
  {
    // this.router.navigate(['/']);
    let id = product._id;

    console.log(id);
    this.product.changeId(id);
    


  }
  getProducts(): void {
    this.apiService.getProducts().subscribe((item: any)=>{
      this.products=item.results;
      console.log(this.products);
      console.log(this.products.length);
      console.log('hello');
    });
  }

  deleteItem:any;

  delete(id : any){


    console.log(id);
    if(confirm("Are you sure to delete this item ")) {
    window.location.reload();
    this.apiService.delete(id).subscribe(data=> this.deleteItem = data);

    this.showMsg = true;
    }
  }

  openAdd()
  {
    this.router.navigate(['/addProduct']);
  }

}
