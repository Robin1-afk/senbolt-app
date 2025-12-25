import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkAppsNftCardComponent } from '../../../../../@spk/reusable-apps/spk-nft-card/spk-nft-card.component';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-market-place',
  standalone: true,
  imports: [SharedModule,SpkAppsNftCardComponent,SpkDropdownsComponent],
  templateUrl: './market-place.component.html',
  styleUrl: './market-place.component.scss'
})
export class MarketPlaceComponent {
  cardData=[
    {
      id:1,
      avatarSize:"md",
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
        avatarSize:"md",
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
        avatarSize:"md",
        bodyClass:"box-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"05hrs : 03m : 20s",
        title:"Cyberpunk Creations",
        image:"./assets/images/nft-images/4.jpg",
        image1:"./assets/images/faces/11.jpg",
        name:"CyberArt NFT ",
        value:"0.014ETH",
        mail:" @cyberartworks154",
        likes1:"1.43k"
      },
      {
        id:4,
        avatarSize:"md",
        bodyClass:"box-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"02hrs : 50m : 55s",
        title:"Geometric Dreamscapes",
        image:"./assets/images/nft-images/5.jpg",
        image1:"./assets/images/faces/12.jpg",
        name:"GeoNFT NFT",
        value:"0.016ETH",
        mail:" @geonft_designs47",
        likes1:"1.43k"
      },
      {
        id:5,
        avatarSize:"md",
        bodyClass:"box-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"06hrs : 15m : 10s",
        title:"Vibrant Pixel Art",
        image:"./assets/images/nft-images/6.jpg",
        image1:"./assets/images/faces/3.jpg",
        name:"PixelPerfect",
        value:"0.017ETH",
        mail:" @pixelperfectnft74",
        likes1:"1.43k"
      },
      {
        id:6,
        avatarSize:"md",
        bodyClass:"box-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"01hrs : 58m : 23s",
        title:"Surreal Fantasy Art",
        image:"./assets/images/nft-images/7.jpg",
        image1:"./assets/images/faces/14.jpg",
        name:"Fantasia NFT",
        value:"0.018ETH",
        mail:" @fantasianft13",
        likes1:"1.43k"
      },
      {
        id:7,
        avatarSize:"md",
        bodyClass:"box-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"03hrs : 45m : 50s",
        title:"Celestial Digital Art",
        image:"./assets/images/nft-images/8.jpg",
        image1:"./assets/images/faces/6.jpg",
        name:"Celestial NFT",
        value:"0.055ETH",
        mail:" @celestial_nft55",
        likes1:"1.43k"
      },
      {
        id:7,
        avatarSize:"md",
        bodyClass:"box-body",
        imageClass:"overflow-hidden rounded mb-3",
        titleClass:"d-flex align-items-start gap-2",
        time1:"07hrs : 06m : 15s",
        title:"Prismatic Universe",
        image:"./assets/images/nft-images/9.jpg",
        image1:"./assets/images/faces/11.jpg",
        name:"Prisma NFT",
        value:"0.035ETH",
        mail:" @prisma_universe77",
        likes1:"1.43k"
      },
  ]
  cardData1=[
    {
      id:1,
      avatarSize:"md",
      bodyClass:"box-body",
      imageClass:"overflow-hidden rounded mb-2",
      titleClass:"d-flex align-items-start gap-2",
      time1:"07hrs : 06m : 15s",
      title:"Prismatic Universe",
      image:"./assets/images/nft-images/10.jpg",
      image1:"./assets/images/faces/12.jpg",
      name:"Prisma NFT",
      value:"0.035ETH",
      mail:"@prisma_universe77",
      likes1:"1.43k"
    },
    {
      id:2,
      time1:"03hrs : 45m : 50s",
      title:"Celestial Digital Art",
      image:"./assets/images/nft-images/11.jpg",
      image1:"./assets/images/faces/15.jpg",
      name:"Celestial NFT",
      value:"0.055ETH",
      mail:"@celestial_nft55",
      likes1:"1.43k"
    },
    {
      id:3,
      time1:"01hrs : 58m : 23s",
      title:"Etheral Dreams",
      image:"./assets/images/nft-images/12.jpg",
      image1:"./assets/images/faces/13.jpg",
      name:"Etheral NFT",
      value:"0.08ETH",
      mail:"@ethereal_dreams",
      likes1:"0.37k"
    },
  
  
  ]
  cardData2=[
    {
      id:1,
      avatarSize:"md",
      bodyClass:"box-body",
      imageClass:"overflow-hidden rounded mb-2",
      titleClass:"d-flex align-items-start gap-2",
      time1:"03hrs : 12m : 45s",
      title:"Geometric Dreamscapes",
      image:"./assets/images/nft-images/13.jpg",
      image1:"./assets/images/faces/5.jpg",
      name:"GeoNFT NFT",
      value:"0.016ETH",
      mail:"@geonft_designs47",
      likes1:"1.43k"
    },
    {
      id:2,
      avatarSize:"md",
      bodyClass:"box-body",
      imageClass:"overflow-hidden rounded mb-2",
      titleClass:"d-flex align-items-start gap-2",
      time1:"03hrs : 45m : 50s",
      title:"Celestial Digital Art",
      image:"./assets/images/nft-images/14.jpg",
      image1:"./assets/images/faces/8.jpg",
      name:"Celestial NFT",
      value:"0.055ETH",
      mail:"@celestial_nft55",
      likes1:"1.43k"
    },
    
  
  
  ]
  
}
