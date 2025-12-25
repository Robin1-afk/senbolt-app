import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
// import { SpkNftCardComponent } from '../../../../@spk/reusable-dashboard/spk-nft-card/spk-nft-card.component';
import { CommonModule } from '@angular/common';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
// import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-live-auction',
  standalone: true,
  imports: [SharedModule,CommonModule,SpkDropdownsComponent],
  templateUrl: './live-auction.component.html',
  styleUrl: './live-auction.component.scss'
})
export class LiveAuctionComponent {

  nftAuctions = [
    {
      image: './assets/images/nft-images/2.jpg',
      auctionTime: '04hrs : 24m : 38s',
      title: 'Abstract Digital Art',
      likes: '1.43k',
      currentBid: '0.015ETH',
      bidder: 'Manistics NFT',
      username: '- @manistics454',
      avatar: './assets/images/faces/14.jpg',
    },
    {
      image: './assets/images/nft-images/3.jpg',
      auctionTime: '03hrs : 12m : 45s',
      title: 'Abstract Digital Art',
      likes: '1.43k',
      currentBid: '0.014ETH',
      bidder: 'Manistics NFT',
      username: '- @manistics454',
      avatar: './assets/images/faces/2.jpg',
    },
    {
      image: './assets/images/nft-images/4.jpg',
      auctionTime: '05hrs : 03m : 20s',
      title: 'CyberCreations',
      likes: '1.43k',
      currentBid: '0.016ETH',
      bidder: 'CyberArt NFT',
      username: '- @cyberartworks154',
      avatar: './assets/images/faces/11.jpg',
    },
    {
      image: './assets/images/nft-images/5.jpg',
      auctionTime: '02hrs : 50m : 55s',
      title: 'Dreamscapes',
      likes: '2.9k',
      currentBid: '0.017ETH',
      bidder: 'GeoNFT NFT',
      username: '- @geonft_designs47',
      avatar: './assets/images/faces/12.jpg',
    },
    {
      image: './assets/images/nft-images/6.jpg',
      auctionTime: '06hrs : 15m : 10s',
      title: 'Vibrant Pixel Art',
      likes: '2.5k',
      currentBid: '0.018ETH',
      bidder: 'PixelPerfect',
      username: '- @pixelperfectnft74',
      avatar: './assets/images/faces/3.jpg',
    },
    {
      image: './assets/images/nft-images/7.jpg',
      auctionTime: '01hrs : 58m : 23s',
      title: 'Surreal Fantasy Art',
      likes: '1.8k',
      currentBid: '0.018ETH',
      bidder: 'Fantasia NFT',
      username: '- @fantasianft13',
      avatar: './assets/images/faces/14.jpg',
    }
  ];
  nftList = [
    {
      avatar: './assets/images/nft-images/2.jpg',
      name: 'Emily Watson',
      username: '@emilywatson',
      ethAmount: '+21.10ETH',
      nftCount: '25 NFT\'s',
    },
    {
      avatar: './assets/images/nft-images/18.jpg',
      name: 'Daniel Green',
      username: '@danielgreen',
      ethAmount: '+18.75ETH',
      nftCount: '20 NFT\'s',
    },
    {
      avatar: './assets/images/nft-images/8.jpg',
      name: 'Sophia Cruz',
      username: '@sophiacruz',
      ethAmount: '+15.90ETH',
      nftCount: '18 NFT\'s',
    },
    {
      avatar: './assets/images/nft-images/11.jpg',
      name: 'Oliver Bennett',
      username: '@oliverbennett',
      ethAmount: '+14.25ETH',
      nftCount: '16 NFT\'s',
    },
    {
      avatar: './assets/images/nft-images/17.jpg',
      name: 'Isabella Par',
      username: '@isabella',
      ethAmount: '+12.80ETH',
      nftCount: '14 NFT\'s',
    },
    {
      avatar: './assets/images/nft-images/31.png',
      name: 'Liam Cooper',
      username: '@liamcooper',
      ethAmount: '+10.55ETH',
      nftCount: '12 NFT\'s',
    }
  ];

  nftEvents = [
    {
      image: './assets/images/nft-images/31.png',
      name: 'Galactic Treasures',
      action: 'Sold to',
      recipient: 'Mitchell',
      amount: ' 0.57ETH',
      time: '24 mins ago',
      amountBg:'text-success'
    },
    {
      image: './assets/images/nft-images/25.png',
      name: 'Galactic Treasures',
      action: 'Started following',
      amount: ' Mark Zuckerberg',
      time: '16 mins ago',
    },
    {
      image: './assets/images/nft-images/21.png',
      name: 'Digital Cosmos',
      action: 'Interest in purchasing',
      amount: ' Digital Cosmos',
      time: '5 mins ago',
       amountBg:'text-warning'
    },
    {
      image: './assets/images/nft-images/26.png',
      name: 'Digital Cosmos',
      action: 'Purchased from',
      recipient: ' CyberCanvas',
      amount: ' 1.345ETH',
      time: '16 mins ago',
    },
    {
      image: './assets/images/nft-images/21.png',
      name: 'Cosmic Odyssey',
      action: 'Listed  for auction',
      amount: ' Cosmic Odyssey',
      time: '30 mins ago',
    },
    {
      image: './assets/images/nft-images/31.png',
      name: 'Galactic Treasures',
      action: 'Gifted to',
      recipient: ' Alice',
      time: '1 hour ago',
    },
  ];
}
