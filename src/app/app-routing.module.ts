import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { BiscuitComponent } from './componentsgrocery/biscuit/biscuit.component';
import { BiscuitallComponent } from './componentsgrocery/biscuitall/biscuitall.component';
import { ColddrinksComponent } from './componentsgrocery/colddrinks/colddrinks.component';
import { ColddrinksallComponent } from './componentsgrocery/colddrinksall/colddrinksall.component';
import { HandwashComponent } from './componentsgrocery/handwash/handwash.component';
import { HandwashallComponent } from './componentsgrocery/handwashall/handwashall.component';
import { JamComponent } from './componentsgrocery/jam/jam.component';
import { JamallComponent } from './componentsgrocery/jamall/jamall.component';
import { RiceComponent } from './componentsgrocery/rice/rice.component';
import { RiceallComponent } from './componentsgrocery/riceall/riceall.component';
import { SoapComponent } from './componentsgrocery/soap/soap.component';
import { SoapallComponent } from './componentsgrocery/soapall/soapall.component';
import { LoginComponent } from './loginSignup/login/login.component';
import { SignupComponent } from './loginSignup/signup/signup.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' }, //wheen path is blank
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'handwash', component: HandwashComponent },
  { path: 'handwashall', component: HandwashallComponent },
  { path: 'soap', component: SoapComponent },
  { path: 'soapall', component: SoapallComponent },
  { path: 'rice', component: RiceComponent },
  { path: 'riceall', component: RiceallComponent },
  { path: 'cart', component: CartComponent },
  { path: 'jam', component: JamComponent },
  { path: 'jamall', component: JamallComponent },
  { path: 'biscuit', component: BiscuitComponent },
  { path: 'biscuitall', component: BiscuitallComponent },
  { path: 'colddrinksall', component: ColddrinksallComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
