import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList:any;
  searchKey : string='' ;
  

  constructor( private api:ApiService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;

    // THis is for quantity and price total in cart start  
    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price})
    });
    // THis is for quantity and price total in cart end 
    })
  }

  items=[{}];
 
}
