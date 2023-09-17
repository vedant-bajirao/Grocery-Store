import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { LoginComponent } from './loginSignup/login/login.component';
import { SignupComponent } from './loginSignup/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './component/about/about.component';
import { HandwashComponent } from './componentsgrocery/handwash/handwash.component';
import { HandwashallComponent } from './componentsgrocery/handwashall/handwashall.component';
import { SoapComponent } from './componentsgrocery/soap/soap.component';
import { SoapallComponent } from './componentsgrocery/soapall/soapall.component';
import { RiceComponent } from './componentsgrocery/rice/rice.component';
import { RiceallComponent } from './componentsgrocery/riceall/riceall.component';
import { FilterPipe } from './sharepipe/filter.pipe';
import { JamComponent } from './componentsgrocery/jam/jam.component';
import { JamallComponent } from './componentsgrocery/jamall/jamall.component';
import { BiscuitComponent } from './componentsgrocery/biscuit/biscuit.component';
import { BiscuitallComponent } from './componentsgrocery/biscuitall/biscuitall.component';
import { ColddrinksComponent } from './componentsgrocery/colddrinks/colddrinks.component';
import { ColddrinksallComponent } from './componentsgrocery/colddrinksall/colddrinksall.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    CarouselComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    AboutComponent,
    HandwashComponent,
    HandwashallComponent,
    SoapComponent,
    SoapallComponent,
    RiceComponent,
    RiceallComponent,
    FilterPipe,
    JamComponent,
    JamallComponent,
    BiscuitComponent,
    BiscuitallComponent,
    ColddrinksComponent,
    ColddrinksallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
