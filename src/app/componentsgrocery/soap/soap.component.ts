import { Component, OnInit } from '@angular/core';
// import { Items } from './soap';
@Component({
  selector: 'app-soap',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.css']
})
export class SoapComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  items=[{

    title:"LIFEBUOY 100 STRONGER GERM PROTECTION ",
    description:"Lifebuoy total 10 bar is the world’s number 1 selling germ protection soap Lifebuoy total 10 soap has advanced silver shield formula - the powerful germ protection formula to fight against stronger germs This enables Lifebuoy to give 100% stronger germ protection from today’s germs, compared to ordinary soaps Bathe with Lifebuoy total 10 soap and protect your family from germs that cause flu, cold, cough, diarrhea and other infections So, get Lifebuoy and keep your family protected from illnesses, through the power of silver shield formula Try our other bathing soap variants - Lifebuoy lemon fresh, Lifebuoy neem, Lifebuoy turmeric and Lifebuoy care",
    offers:"Upto 3% off",
    img:"https://th.bing.com/th/id/OIP.Du5ORwHh2MTipmT695q40AHaHa?pid=ImgDet&rs=1"
  
  },
  {

    title:"Dettol Original Germ Protection Bathing Soap",
    description:"Are you back from a morning jog and ready to go for a shower? Then take this Dettol Original soap with you and protect yourself from bacteria and germs causing cold and flu.Trusted Protection against Germs This bathing soap protects your family every day from unseen germs and keeps you healthy. It’s also dermatologically tested and recommended by Indian Medical Association, so you can easily trust on its germ protection formula.",
    offers:"Upto 10% off",
    img:"https://th.bing.com/th/id/OIP.klA-3WlyDk5piGi0t2VzQAHaHa?pid=ImgDet&rs=1"
  
  },
  {

    title:"santoor Sandal & Turmeric Soap  (100 g)",
    description:"This pack of Santoor Sandal and Turmeric Soap brings together two ingredients which have been an essential part of the Indian skincare regimen for centuries now. Because of the antiseptic properties of sandalwood and turmeric, this soap not only cleans your skin, but also helps with getting rid of tan, curing itches, and detoxifying the skin.",
    offers:"Upto 5% off",
    img:"https://th.bing.com/th/id/OIP.IeEAR8zbWF4IwtryWDw1qAHaHa?pid=ImgDet&rs=1"
  
  },
  {

    title:"DOVE Cream Beauty Bathing Bar  (100 g)",
    description:"Dove Cream Bathing Beauty Bar combines a gentle cleansing formula with Doves signature moisturizing cream to give you softer, smoother and more glowing skin with every shower. What makes Dove different? Doves beauty bars gently cleanse your skin and help retain its natural moisture rather than stripping it away.",
    offers:"Upto 31% off",
    img:"https://th.bing.com/th/id/OIP.2WNbvLyLYUsFsnTdwwK0XAHaHa?pid=ImgDet&rs=1"
  
  },
  {

    title:"CINTHOL Lime Soap ",
    description:"With Cinthol Lime Bathing Soap, every bath is a fresh start. Indulge in the goodness of lime with this bathing soap. Its enhanced lemony fragrance revitalizes your senses to give you a fantastic bathing experience. Cinthol Lime Bath Soap has a great citrus scent that lingers throughout the day and leaves your skin feeling fresh and rejuvenated for the entire day.",
    offers:"Upto 5% off",
    img:"https://n4.sdlcdn.com/imgs/e/q/m/limesoap-a4559.jpg"
  
  },
  // {

  //   title:"",
  //   description:"",
  //   offers:"",
  //   img:""
  
  // }
]
}

