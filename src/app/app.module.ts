
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ViewSingleProductComponent } from './customer/view-single-product/view-single-product.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllProductsComponent } from './customer/view-all-products/view-all-products.component';
import { ApiServiceService } from './customer/api-service.service';
import { CartComponent } from './customer/cart/cart.component';
import { NavbarComponent } from './customer/navbar/navbar.component';
import { SearchComponent } from './customer/search/search.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { AddProductComponent } from './admin/add-product/add-product.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewSingleProductComponent,
    ViewAllProductsComponent,
    CartComponent,
    NavbarComponent,
    SearchComponent,
    ViewProductsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService,ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
