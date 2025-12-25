import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpkBlogImageCardComponent } from '../../../../../@spk/spk-reusable-pages/spk-blog-image-card/spk-blog-image-card.component';
import { SharedModule } from '../../../../shared/shared.module';
import Swiper from 'swiper';
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperComponent } from '../../../../../@spk/spk-reusable-plugins/swiper/swiper.component';
import { CommonModule } from '@angular/common';

Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SharedModule,RouterModule,SpkBlogImageCardComponent,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  // customOptions: OwlOptions = {
  //   loop: true,
  //   rtl: false,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 8000,
  //   autoplay: true,
  //   autoplayTimeout: 5000,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     400: {
  //       items: 1,
  //     },
  //     740: {
  //       items: 1,
  //     },
  //     940: {
  //       items: 1,
  //     },
  //   },
  //   nav: false,
  // };

  // activeSlides!: SlidesOutputData;
  images = [
    './assets/images/media/blog/1.jpg',
    './assets/images/media/blog/3.jpg',
    './assets/images/media/blog/2.jpg'
  ];

  // getPassedData(data: SlidesOutputData) {
  //   this.activeSlides = data;
  // }
  categories = [
    {
      name: 'Nature Life',
      icon: 'ri-leaf-fill',
      bgColor: 'rgba(0, 128, 0, 0.1)', // Use any valid CSS color value
      textColor: 'green',
      count: 12
    },
    {
      name: 'Tourism & Trips',
      icon: 'ri-flight-takeoff-fill',
      bgColor: 'rgba(0, 191, 255, 0.1)',
      textColor: 'dodgerblue',
      count: 36
    },
    {
      name: 'Technology',
      icon: 'ri-global-fill',
      bgColor: 'rgba(255, 140, 0, 0.1)',
      textColor: 'orange',
      count: 45
    },
    {
      name: 'Data Networking',
      icon: 'ri-cloud-fill',
      bgColor: 'rgba(128, 0, 128, 0.1)',
      textColor: 'purple',
      count: 124
    },
    {
      name: 'Modern Living',
      icon: 'ri-home-wifi-fill',
      bgColor: 'rgba(70, 130, 180, 0.1)',
      textColor: 'steelblue',
      count: 16
    }
  ];
  RelatedBlogs = [
    {
      title: 'Jack Diamond',
      image: './assets/images/media/blog/5.jpg',
      content: 'To generate....',
      date: '25, Mar 2024 - 22:30'
    },
    {
      title: 'Jack Diamond',
      image: './assets/images/media/blog/6.jpg',
      content: 'To generate....',
      date: '25, Mar 2024 - 22:30'
    },
    {
      title: 'Jack Diamond',
      image: './assets/images/media/blog/8.jpg',
      content: 'To generate....',
      date: '25, Mar 2024 - 22:30'
    },
    {
      title: 'Jack Diamond',
      image: './assets/images/media/blog/9.jpg',
      content: 'To generate....',
      date: '25, Mar 2024 - 22:30'
    }
  ];
  featureBlogs = [
    {
      title: 'Jack Diamond',
      image: './assets/images/media/blog/14.jpg',
      content: 'To generate Lorem Ipsum which looks reasonable',
      last: false
    },
    {
      title: 'Dhruva Gen',
      image: './assets/images/media/blog/15.jpg',
      content: 'All the Lorem Ipsum generators on the Internet',
      last: false
    },
    {
      title: 'Henry Milo',
      image: './assets/images/media/blog/16.jpg',
      content: 'Lorem Ipsum is therefore always free from repetition, injected humour',
      last: false
    },
    {
      title: 'Peter Paul',
      image: './assets/images/media/blog/17.jpg',
      content: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical',
      last: false
    },
    {
      title: 'Fahad Rafi',
      image: './assets/images/media/blog/7.jpg',
      content: 'Electronic typesetting, remaining essentially unchanged.',
      last: true
    }
  ];
  
  blogCards = [
    {
      title: 'Understanding Music Notes',
      description: 'Through detailed explanations, visual aids, and practical examples reduce stress, and create lasting memories...',
      image: './assets/images/media/blog/12.jpg',
      altText: 'Understanding Music Notes',
      routerLink: '/pages/blog/blog-details',
      readMoreLink: 'javascript:void(0);',
      authorName: 'Rosalie',
      authorImage: './assets/images/faces/4.jpg',
      date: '26, Mar 2024 - 15:37',
      link:'',
      imageTop:true,
      avatarClass:'avatar-md'
    },
    {
      title: 'Enhancing Your Life Through Sound',
      description: 'Join us on a journey of discovery as we unravel the mysteries of music note...',
      image: './assets/images/media/blog/10.jpg',
      altText: 'Enhancing Your Life Through Sound',
      routerLink: '/pages/blog/blog-details',
      readMoreLink: 'javascript:void(0);',
      authorName: 'Emanuel',
      authorImage: './assets/images/faces/12.jpg',
      date: '26, Mar 2024 - 15:37',
      link:'',
      imageTop:true,
      avatarClass:'avatar-md'


    },
    {
      title: 'Mastering the Art of Music Notation',
      description: 'Discover how these seemingly simple marks on a page translate into the beautiful sounds.',
      readMoreLink: 'javascript:void(0);',
      routerLink: '/pages/blog/blog-details',
      authorName: 'Jacob',
      authorImage: './assets/images/faces/2.jpg',
      date: '06, Mar 2024 - 15:37',
      image: './assets/images/media/blog/13.jpg',
      imageBottom:true,
      avatarClass:'avatar-md'

    },
    {
      title: 'How to Truly Enjoy Your Favorite Tunes?',
      description: 'Through insightful articles, personal anecdotes, and expert advice, "Music for the Soul".',
      readMoreLink: 'javascript:void(0);',
      routerLink: '/pages/blog/blogdetails',
      authorName: 'Flora',
      authorImage: './assets/images/faces/14.jpg',
      date: '26, Mar 2024 - 15:37',
      image: './assets/images/media/blog/11.jpg',
      imageBottom:true,
      avatarClass:'avatar-md'


    },
    // Add more card data as needed
  ];
  blogCards1 = [
    {
      title: 'Beats to Bliss',
      description: 'Experiencing the Euphora of Music',
      readMoreLink: 'javascript:void(0);',
      routerLink: '/pages/blog/blog-details',
      authorName: 'Tilly',
      authorImage: './assets/images/faces/11.jpg',
      date: '19, Apr 2024 - 15:45',
      image: './assets/images/media/blog/15.jpg',
      imageTop:true,
      imageClass:'p-3 pb-0 rounded-5',
      imageClass1:'rounded-md',
      avatarClass:'avatar-sm'
    },
    {
      title: 'The Pleasure of Harmony: Unlocking the Joy of Music',
      description:
        'Exploring the world of 3D images doesn\'t have to be limited to consumption – you can also become a creator! With accessible.',
      readMoreLink: 'javascript:void(0);',
      routerLink: '/pages/blog/blog-details',
      authorName: 'Tilly',
      authorImage: './assets/images/faces/6.jpg',
      date: '19, Apr 2024 - 15:45',
      image: './assets/images/media/blog/8.jpg',
      imageClass:'p-3 pb-0 rounded-5',
      imageClass1:'rounded-md',
      imageTop:true,
      avatarClass:'avatar-sm'
    },
    {
      title: 'Tuning into Happiness: How Music Lifts Our Spirits',
      description:
        'Explore the remarkable ability of music to evoke joy, uplift our moods, and nourish our souls. This blog delves into the science behind.',
      readMoreLink: 'javascript:void(0);',
      routerLink: '/pages/blog/blog-details',
      authorName: 'Henry Milo',
      authorImage: './assets/images/faces/16.jpg',
      date: '31, Mar 2024 - 20:13',
      image: './assets/images/media/blog/9.jpg',
      imageClass:'p-3 pt-0 rounded-5',
      imageClass1:'rounded-md',
      imageBottom:true,
      avatarClass:'avatar-md'

    }
  ];
}
