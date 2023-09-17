import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem :number=0;
  public searchTerm !:string;

  public productList:any;
  searchKey : string='' ;
  constructor(private api:ApiService,private cartService :CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem= res.length;
    });


    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });

    });
    this.cartService.search.subscribe((val)=>{
      this.searchKey=val;
    })


  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }

}
