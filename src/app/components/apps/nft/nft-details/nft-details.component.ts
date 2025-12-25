import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Image,GalleryModule } from '@ks89/angular-modal-gallery';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CommonModule } from '@angular/common';
import { SpkAppsNftCardComponent } from '../../../../../@spk/reusable-apps/spk-nft-card/spk-nft-card.component';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
  selector: 'app-nft-details',
  standalone: true,
  imports: [SharedModule,GalleryModule,CommonModule,SpkAppsNftCardComponent,SpkReusableTablesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nft-details.component.html',
  styleUrl: './nft-details.component.scss'
})
export class NftDetailsComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
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
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},

		  },
	  });
  }
  dotsConfig!: false;

  imagesRect: Image[] = [
    new Image( 0, { img: "./assets/images/nft-images/2.jpg", },
      { img: "./assets/images/nft-images/2.jpg",
    }
    ),
    new Image(1, { img: "./assets/images/nft-images/3.jpg" }),
    new Image(
      2,
      {
        img: "./assets/images/nft-images/4.jpg",
      },
      {
        img: "./assets/images/nft-images/4.jpg",
      }
    ),
    new Image(
      3,
      {
        img: "./assets/images/nft-images/5.jpg",
       
      },
      { img: "./assets/images/nft-images/5.jpg",
      }
    ),
  ];

  cardData1=[
    {
      id:1,
      avatarSize:'xs',
      bodyClass:"box-body",
      imageClass:"overflow-hidden rounded mb-3",
      titleClass:"d-flex align-items-start gap-2",
      time1:"04hrs : 24m : 38s",
      title:"Abstract Digital Art",
      image:"./assets/images/nft-images/2.jpg",
      image1:"./assets/images/faces/14.jpg",
      name:"Manistics NFT",
      value:"0.015ETH",
      mail:" @manistics454",
      likes1:"1.43k"
    },
    {
        id:2,
        avatarSize:'xs',
        bodyClass:"box-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"03hrs : 12m : 45s",
        title:"Abstract Digital Art",
        image:"./assets/images/nft-images/3.jpg",
        image1:"./assets/images/faces/2.jpg",
        name:"Manistics NFT",
        value:"0.015ETH",
        mail:" @manistics454",
        likes1:"1.43k"
      },
    {
        id:3,
        avatarSize:'xs',
        bodyClass:"box-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"05hrs : 03m : 20s",
        title:"CyberCreations",
        image:"./assets/images/nft-images/4.jpg",
        image1:"./assets/images/faces/11.jpg",
        name:"CyberArt NFT ",
        value:"0.014ETH",
        mail:" @cyberartworks154",
        likes1:"1.43k"
      },
      {
        id:4,
        avatarSize:'xs',
        bodyClass:"box-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"02hrs : 50m : 55s",
        title:"Dreamscapes",
        image:"./assets/images/nft-images/5.jpg",
        image1:"./assets/images/faces/12.jpg",
        name:"GeoNFT NFT",
        value:"0.016ETH",
        mail:" @geonft_designs47",
        likes1:"2.9k"
      },
   
  ]
  nftDetails = [
    { label: 'Artist Name', value: 'Henry Milo' },
    { label: 'Royalty', value: '10% royalty paid to the artist on secondary sales' },
    { label: 'Total Bids', value: '32' },
    { label: 'Current Owner', value: 'Nikki Jones' },
    { label: 'NFT Type', value: 'Digital art work' }
  ];
  nftItems = [
    {
      name: 'Digital Dreamscapes',
      imageUrl: './assets/images/nft-images/16.jpg',
      likes: '18.5k',
      totalLikes: '18,512',
      price: '2.299 ETH',
      oldPrice: '3.299 ETH'
    },
    {
      name: 'Galactic Gardens',
      imageUrl: './assets/images/nft-images/18.jpg',
      likes: '4.2k',
      totalLikes: '4,356',
      price: '1.899 ETH',
      oldPrice: '2.799 ETH'
    },
    {
      name: 'Pixelated Paradise',
      imageUrl: './assets/images/nft-images/10.jpg',
      likes: '9.1k',
      totalLikes: '9,153',
      price: '3.599 ETH',
      oldPrice: '5.499 ETH'
    },
    {
      name: 'Vibrant Voyages',
      imageUrl: './assets/images/nft-images/11.jpg',
      likes: '15.7k',
      totalLikes: '15,789',
      price: '6.499 ETH',
      oldPrice: '9.999 ETH'
    }
  ];

}