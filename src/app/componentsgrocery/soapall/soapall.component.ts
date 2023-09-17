import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-soapall',
  templateUrl: './soapall.component.html',
  styleUrls: ['./soapall.component.css'],
})
export class SoapallComponent implements OnInit {

  public productList:any;
  searchKey : string='' ;
  constructor(private api:ApiService,private cartservice:CartService) {}

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

  items = [
    {
      title: 'LIFEBUOY 100 STRONGER GERM PROTECTION ',
      description:
        'Lifebuoy total 10 bar is the world’s number 1 selling germ protection soap Lifebuoy total 10 soap has advanced silver shield formula - the powerful germ protection formula to fight against stronger germs This enables Lifebuoy to give 100% stronger germ protection from today’s germs, compared to ordinary soaps Bathe with Lifebuoy total 10 soap and protect your family from germs that cause flu, cold, cough, diarrhea and other infections So, get Lifebuoy and keep your family protected from illnesses, through the power of silver shield formula Try our other bathing soap variants - Lifebuoy lemon fresh, Lifebuoy neem, Lifebuoy turmeric and Lifebuoy care',
      offers: 'Upto 3% off',
      price:24,
      img: 'https://th.bing.com/th/id/OIP.Du5ORwHh2MTipmT695q40AHaHa?pid=ImgDet&rs=1',
    },
    {
      title: 'Dettol Original Germ Protection Bathing Soap',
      description:
        'Are you back from a morning jog and ready to go for a shower? Then take this Dettol Original soap with you and protect yourself from bacteria and germs causing cold and flu.Trusted Protection against Germs This bathing soap protects your family every day from unseen germs and keeps you healthy. It’s also dermatologically tested and recommended by Indian Medical Association, so you can easily trust on its germ protection formula.',
      offers: 'Upto 10% off',
      price:76,
      img: 'https://th.bing.com/th/id/OIP.klA-3WlyDk5piGi0t2VzQAHaHa?pid=ImgDet&rs=1',
    },
    {
      title: 'santoor Sandal & Turmeric Soap  (100 g)',
      description:
        'This pack of Santoor Sandal and Turmeric Soap brings together two ingredients which have been an essential part of the Indian skincare regimen for centuries now. Because of the antiseptic properties of sandalwood and turmeric, this soap not only cleans your skin, but also helps with getting rid of tan, curing itches, and detoxifying the skin.',
      offers: 'Upto 5% off',
      price:34,
      img: 'https://th.bing.com/th/id/OIP.IeEAR8zbWF4IwtryWDw1qAHaHa?pid=ImgDet&rs=1',
    },
    {
      title: 'DOVE Cream Beauty Bathing Bar  (100 g)',
      description:
        'Dove Cream Bathing Beauty Bar combines a gentle cleansing formula with Doves signature moisturizing cream to give you softer, smoother and more glowing skin with every shower. What makes Dove different? Doves beauty bars gently cleanse your skin and help retain its natural moisture rather than stripping it away.',
      offers: 'Upto 31% off',
      price:40,
      img: 'https://th.bing.com/th/id/OIP.2WNbvLyLYUsFsnTdwwK0XAHaHa?pid=ImgDet&rs=1',
    },
    {
      title: 'CINTHOL Lime Soap ',
      description:
        'With Cinthol Lime Bathing Soap, every bath is a fresh start. Indulge in the goodness of lime with this bathing soap. Its enhanced lemony fragrance revitalizes your senses to give you a fantastic bathing experience. Cinthol Lime Bath Soap has a great citrus scent that lingers throughout the day and leaves your skin feeling fresh and rejuvenated for the entire day.',
      offers: 'Upto 5% off',
      price:50,
      img: 'https://n4.sdlcdn.com/imgs/e/q/m/limesoap-a4559.jpg',
    },
    {
      title: 'Savlon Moisturizing Glycerin Soap with Germ Protection',
      description:
        'Savlon Glycerin Soap provides protection from 100 disease causing germs while making your skin feel soft and supple. Infusion of glycerin in the soap makes it suitable for all skin types while giving you a much-required protection from germs. While it is easy for the skin to lose its softness, Savlon Glycerin Soap ensures that you and your family can stay on top of your hygiene requirements with your skin feeling soft without much worry',
      offers: 'Up to 4% off',
      price:31,
      img: 'https://th.bing.com/th/id/OIP.rKkFtY555oGsnaqMo-3SqAHaDY?pid=ImgDet&rs=1',
    },
      // title:"",
      // description:"",
      // offers:"",
      // img:""
    // },
  ]

  addtocart(item:any){
    this.cartservice.addtoCart(item);
  }
}
