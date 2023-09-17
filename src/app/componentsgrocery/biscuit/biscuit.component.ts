import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biscuit',
  templateUrl: './biscuit.component.html',
  styleUrls: ['./biscuit.component.css']
})
export class BiscuitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  items = [
    {
      title: 'BRITANNIA NutriChoice Digestive High Fibre Biscuits Digestive  (250 g) ',
      description:
        'The Britannia NutriChoice Digestive Biscuits are fibre rich biscuits packed with the richness of wheat flour (atta) and bran.',
      offers: 'Upto 13% off',
      price:56,
      img: 'https://driftbasket.com/wp-content/uploads/2018/10/Britannia-Nutri-Choice-Hi-Fibre-Digestive-Biscuits-250-gm.jpg',
    },
    {
      title: 'Tasty trends BUTTER ATTA BISCUITS (PACK OF 2) Cookies  (400 g, Pack of 2)',
      description:'Butter Atta, a delightful, all time favourite cookie having loads of butter and other healthy ingredients.',
      offers: 'Upto 39% off',
      price:239,
      img: 'https://rukminim1.flixcart.com/image/832/832/kgy0sy80/cookie-biscuit/t/y/v/200-butter-atta-biscuits-tasty-trends-original-imafxfrzzhhbg7xb.jpeg?q=70',
    },
    {
      title: 'OREO Original Chocolatey Biscuits Cream Sandwich  (120 g)',
      description:
        'OREO Original Chocolatey Biscuits Cream Sandwich  (120 g).',
      offers: 'Upto 16% off',
      price:25,
      img: 'https://th.bing.com/th/id/OIP.-M2IkxvgGxmAfFr0Z4XK_QHaHP?pid=ImgDet&rs=1',
    },
    {
      title: 'PARLE G Original Gluco Biscuits Plain  (50 g Extra in Pack)  (200 g)',
      description:
        'PARLE G Original Gluco Biscuits Plain  (50 g Extra in Pack)  (200 g).',
      offers: 'Upto 20% off',
      price:20,
      img: 'https://www.mychhotashop.com/wp-content/uploads/2017/06/Parle-G.jpg',
    },
    {
      title: 'Sunfeast Bourbon Biscuits Cream Filled Cream Filled  (150 g)',
      description:
        'Sunfeast Bourbon Biscuits Cream Filled Cream Filled  (150 g)',
      offers: 'Upto 31% off',
      price:24,
      img: 'https://4.imimg.com/data4/UK/AY/MY-28592127/bourbon-biscuit-250x250.jpg',
    },
    // {
      // title:"",
      // description:"",
      // offers:"",
      // img:""
    // },
  ]


}
