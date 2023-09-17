import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-colddrinksall',
  templateUrl: './colddrinksall.component.html',
  styleUrls: ['./colddrinksall.component.css']
})
export class ColddrinksallComponent implements OnInit {
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
  



  
  items = [
    {
      title:" Coca-Cola Original Taste Soft Drink PET Bottle  (750 ml)",
      description:"Be it with pizzas, burgers, or biryani, meals seem incomplete without a bottle of chilled and bubbling Coca-Cola.",
      offers:"Up to 30% off",
      price:"28",
      img:"https://th.bing.com/th/id/OIP.hsrqYR72-uvN9YLaIueKSAHaHa?pid=ImgDet&rs=1"
    },
    {
      title:"Coca-Cola Original Taste Soft Drink Can  (300 ml)",
      description:"Be it with pizzas, burgers, or biryani, meals seem incomplete without a chilled and bubbling bottle of Coca-Cola.",
      offers:"Up to 12% off",
      price:"35",
      img:"https://th.bing.com/th/id/R.d64ca5978d37e7b010b939944dedd576?rik=Hg7zThMHkE1x2g&riu=http%3a%2f%2fd3kgrlupo77sg7.cloudfront.net%2fmedia%2fkiranawalla.com%2fimages%2fproducts%2fcoca-cola-cold-drinks-300-ml-3908.20141219195942.jpg&ehk=X9afiRSziXIgkXma%2fTbmmMVVWGjayPlxwAR1Ohvk7e4%3d&risl=&pid=ImgRaw&r=0"
  },

    {
      title:"Fanta PET Bottle  (600 ml)",
      description:"This 1.75 L Fanta orange-flavoured soft drink is here to give you a refreshing kick after a long and tiring day.",
      offers:"Up to 10% off",
      price:"34",
      img:"https://th.bing.com/th/id/OIP._4Rvl3gD5U_qNsJzaTcQewHaHa?pid=ImgDet&rs=1"
  },
  
  {
      title:"Thums Up Soft Drink Bottle PET Bottle  (750 ml)",
      description:"Bring out your adventurous side with the Thums Up soft drink. This drink is for those who enjoy an intense combination in an exciting cold drink. ",
      offers:"Up to 27% off",
      price:"29",
      img:"https://th.bing.com/th/id/R.373aa672d3775f850de2aaee6e448989?rik=UJ%2fA%2bCZzblzTkQ&riu=http%3a%2f%2flessthanmrp.com%2fimage%2fcache%2fcatalog%2fthumsbottel-500x515.png&ehk=eEfr0ZyJGeLYmPiRW5QFOlFyOXbWX4DNeP%2f1LdsA2RI%3d&risl=&pid=ImgRaw&r=0"
  },
  {
      title:"Appy Fizz Plastic Bottle  (250 ml)",
      description:"Appy Fizz Plastic Bottle  (250 ml)",
      offers:"Up to 16% off",
      price:"15",
      img:"https://5.imimg.com/data5/LU/GQ/TR/SELLER-12622749/mango-juice-500x500.jpg"
  },
  // {
  //     title:"",
  //     description:"",
  //     offers:"",
  //     price:"",
  //     img:""
  // },

]

}
