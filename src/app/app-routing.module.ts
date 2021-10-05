import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { CartComponent } from './customer/cart/cart.component';
import { CheckoutComponent } from './customer/checkout/checkout.component';
import { NavbarComponent } from './customer/navbar/navbar.component';
import { SearchComponent } from './customer/search/search.component';
import { ViewAllProductsComponent } from './customer/view-all-products/view-all-products.component';
import { ViewSingleProductComponent } from './customer/view-single-product/view-single-product.component';



const routes: Routes = [
  { path: '', redirectTo: '/viewAll', pathMatch: 'full' },
  { path: 'singleProduct', component: ViewSingleProductComponent },
  { path: 'viewAll', component: ViewAllProductsComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'cart', component: CartComponent },
  { path: 'navBar', component: NavbarComponent},
  { path: 'search', component:SearchComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'adminView', component: ViewProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }