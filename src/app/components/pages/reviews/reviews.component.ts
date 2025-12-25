import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SharedModule } from '../../../shared/shared.module';
Swiper.use([Autoplay, Navigation, Pagination]);
register();
@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviews=[
    {
      src:"./assets/images/faces/1.jpg",
      bg1:"secondary",
      name:"Flora Mary",
      role:"Systems Analyst",
      description:`Technical issues quickly and efficiently resloved. Their
      expertise and promptservice have been critical in keeping our
      operations running smoothly.`,
      bg:"primarytint2color ",
      rating:"4.5",
      bg2:"secondary"
    },
    {
      src:"./assets/images/faces/6.jpg",
      bg1:"primary",
      name:"Maria Violet",
      role:"Web Developer",
      description:`"Web developer did an outstanding job creating our new website. It's user-friendly, visually appealing, and has all the functionality we need".`,
      bg:"primarytint3color ",
      rating:"4.5",
      bg2:"primary"
    },
    {
      src:"./assets/images/faces/13.jpg",
      bg1:"primarytint1color",
      name:"John smith",
      role:"Systems Analyst",
      description:`"Freelance writer delivered high-quality content that perfectly
      captured our brand voice. They were professional, met all deadlines to work"..`,
      bg:"primary",
      rating:"4.3",
      bg2:"primarytint1color"
    },
    {
      src:"./assets/images/faces/10.jpg",
      bg1:"primarytint3color",
      name:"Uma Renata",
      role:"Systems Analyst",
      description:`"Template has an excellent theme and functionality. The quality is great, and I
      love that I can download content to make customization!!"`,
      bg:"danger",
      rating:"4.3",
      bg2:"primarytint2color"
    },
    {
      src:"./assets/images/faces/15.jpg",
      bg1:"success",
      name:"Arjun Richel",
      role:"Systems Analyst",
      description:`  "This Product is amazing! It has made my daily tasks so much
      easier and is very user-friendly. The product life is impressive too..."`,
      bg:"secondary",
      rating:"4.1",
      bg2:"success"
    },
    {
      src:"./assets/images/faces/6.jpg",
      bg1:"success",
      name:"Flora Mary",
      role:"Data Analyst",
      description:` "The checkout process was smooth, and my order arrived on time
      and well-packaged. Very satisfied with my purchase...."`,
      bg:"primary1",
      rating:"3.8",
      bg2:"warning"
    },
  ]
  reviewsstyle3=[
    {
      src:"./assets/images/faces/8.jpg",
      name:"Elsa Teresa",
      mail:"elsateresa"
    },
    {
      src:"./assets/images/faces/9.jpg",
      name:"Elsa Teresa",
      mail:"henrymilo"
    },
    {
      src:"./assets/images/faces/6.jpg",
      name:"Katherin Oslo",
      mail:"katherinoslo212"
    },
    {
      src:"./assets/images/faces/14.jpg",
      name:"Jestin Calm",
      mail:"jestincalm1999"
    },
    {
      src:"./assets/images/faces/13.jpg",
      name:"Harin ford",
      mail:"harinford345"
    },
    {
      src:"./assets/images/faces/11.jpg",
      name:"Phillip John",
      mail:"phillipjohn21"
    },
  ]
  reviewsstyle4=[
    {
      src:"./assets/images/faces/1.jpg",
      name:"Victoria Red",
      description:`"Project to success with excellent planning and
      coordination. Their leadership and communication kept
      everything on track and within budget."`
    },
    {
      src:"./assets/images/faces/12.jpg",
      name:"Nicolas Noor",
      description:` "Cybersecurity specialist has been crucial in protecting
      our data. Their proactive measures and quick response to
      threats give us great peace of mind.."`
    },
    {
      src:"./assets/images/faces/3.jpg",
      name:"Remi Gloria",
      description:`"Marketing consultant provided us with a clear,
      actionable strategy that boosted our online presence and
      increased our customer engagement."`
    },
    {
      src:"./assets/images/faces/14.jpg",
      name:"Remi Gloria",
      description:`"The cloud architect designed a scalable and efficient
      cloud infrastructure for us. Their expertise has greatly
      improved our data accessibility."`
    },
    {
      src:"./assets/images/faces/5.jpg",
      name:"Sissera William",
      description:` "Cybersecurity specialist has been crucial in protecting
      our data. Their proactive measures and quick response to
      threats give us great peace of mind."`
    },
    {
      src:"./assets/images/faces/6.jpg",
      name:"Audie Yose",
      description:`"Graphic designer created beautiful and impactful
      designs for our campaign. Their creativity and attention
      to detail were evident in every piece they delivered."`
    },

  ]
	@ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef;
  @ViewChild('swiperContainer2') swiperContainer2!: ElementRef;
  @ViewChild('swiperContainer3') swiperContainer3!: ElementRef;
  @ViewChild('swiperContainer4') swiperContainer4!: ElementRef;
  swiperInstance: any;
	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperE2 = this.swiperContainer1.nativeElement;
	
		Object.assign(swiperE2, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperE3 = this.swiperContainer2.nativeElement;
	
		Object.assign(swiperE3, {
      modules: [Pagination],
		  slidesPerView: 1,
		  spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperE4 = this.swiperContainer3.nativeElement;
	
		Object.assign(swiperE4, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
        770:{
          slidesPerView: 2,
          spaceBetween: 20,
        },
			1020: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},

		  },
	  });
    
    const swiperE5 = this.swiperContainer4.nativeElement;
	
		Object.assign(swiperE5, {
		  slidesPerView: 3,
		  spaceBetween: 10,
      slidesPerGroup: 1,
      pagination:{
        clickable:true
      },
      on: {
        slideChange: () => this.handleSlideChange(),
      },
      centeredSlides: true,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
        770:{
          slidesPerView: 3,
          spaceBetween: 20,
        },

		  },
	  });
    this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 1,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      on: {
        slideChange: () => this.handleSlideChange(),
      }
    });
	}
  handleSlideChange() {
    const activeIndex = this.swiperInstance.activeIndex;

    // Loop through all swiper-slides and remove the active class
    const slides = this.swiperContainer.nativeElement.querySelectorAll('.swiper-slide');
    slides.forEach((slide: HTMLElement) => slide.classList.remove('active'));

    // Add active class to the center slide
    // Since it's centered, we can simply target the slide with index `1` in slidesPerView=3
    const centerSlideIndex = Math.floor(this.swiperInstance.slidesPerView / 2);
    
    const centerSlide = slides[activeIndex + centerSlideIndex - 1];  // Adjust index based on the active slide
    if (centerSlide) {
      centerSlide.classList.add('active');
    }
  }

  ngOnInit() {
    const swiperEl = document.querySelector('.swiper-container') as HTMLElement;

    const images = [
      './assets/images/faces/1.jpg',
      './assets/images/faces/2.jpg',
      './assets/images/faces/3.jpg',
      './assets/images/faces/4.jpg',
      './assets/images/faces/5.jpg',
      // Add more image URLs as needed
    ];

    const params = {
      modules: [Pagination],
      pagination: {
        clickable: true,
        renderBullet: (index: number, className: string) => {
          return `<span class="${className}"><img src="${images[index]}" alt="Bullet ${index + 1}" /></span>`;
        },
      },
      injectStyles: [`
      .swiper-pagination-bullet {
        width: 40px; /* Adjust the size as needed */
        height: 40px; /* Adjust the size as needed */
        text-align: center;
        line-height: 40px; /* Adjust if needed */
        opacity: 1;
        background: transparent; /* Make background transparent if using images */
      }

      .swiper-pagination-bullet-active img {
        border: 2px solid #007aff; /* Optional: Add border to active bullet */
      }
      `],
    };

    new Swiper(swiperEl, params);
  }
}
