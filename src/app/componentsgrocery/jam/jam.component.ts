import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-jam',
  templateUrl: './jam.component.html',
  styleUrls: ['./jam.component.css'],
})
export class JamComponent implements OnInit {
  public productList:any;
  searchKey : string='' ;
  constructor(private api:ApiService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });

    });
    this.cartservice.search.subscribe((val)=>{
      this.searchKey=val;
    })
  }
  




  addtocart(item:any){
    this.cartservice.addtoCart(item);
    
  }

  // THIS IS ALL ITEM LIST
  // THIS IS ALL ITEM LIST

  items = [
    {
      title: 'Kissan Jam Mix Fruit Tub 90 g',
      description: 'Kissan Jam Mix Fruit Tub 90 g',
      offers: 'Upto 5% off',
      img: 'data:image/jpeg;base64,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',
    },
    {
      title: 'Apis Fruit Blast 700 g',
      description:
        'Fortune Everyday basmati rice is a fine variety of basmati that you can relish every day. Specially aged to help every grain of basmati become long and fluffy. On cooking, the grains do not stick together and become flavorsome.',
      offers: 'Upto 5% off',
      img: 'https://th.bing.com/th/id/OIP.ndxG3bNCML8STSu99AXh7AHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.12&pid=1.7',
    },
    {
      title: "Top's Mixed Fruit Jam 875 g",
      description:
        'Fortune Everyday basmati rice is a fine variety of basmati that you can relish every day. Specially aged to help every grain of basmati become long and fluffy. On cooking, the grains do not stick together and become flavorsome.',
      offers: 'Upto 4% off',
      img: 'https://th.bing.com/th/id/OIP.hx15m9ukRuUZmOnF6CmE5wAAAA?w=181&h=181&c=7&r=0&o=5&dpr=1.12&pid=1.7',
    },
    {
      title: 'Splitz Mixed Fruit Jam 700 g',
      description:
        'Fortune Everyday basmati rice is a fine variety of basmati that you can relish every day. Specially aged to help every grain of basmati become long and fluffy. On cooking, the grains do not stick together and become flavorsome.',
      offers: 'Upto 25% off',
      img: 'data:image/jpeg;base64,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',
    },
    {
      title: 'MANAMA Strawberry Fruit Jam, 500 g',
      description:
        'Fortune Everyday basmati rice is a fine variety of basmati that you can relish every day. Specially aged to help every grain of basmati become long and fluffy. On cooking, the grains do not stick together and become flavorsome.',
      offers: 'Upto 25% off',
      img: 'https://th.bing.com/th/id/OIP.PzgJrNUkA_2oLEAYHEaJ-gHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.12&pid=1.7',
    },
    // {
    //   title:"",
    //     description:"",
    //     offers:"",
    //     img:""
    // },
  ];
}