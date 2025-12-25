import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet-integration',
  standalone: true,
  imports: [SharedModule,CommonModule],
  templateUrl: './wallet-integration.component.html',
  styleUrl: './wallet-integration.component.scss'
})
export class WalletIntegrationComponent {

  transactions = [
    {
      type: 'received',
      title: 'ETH Received',
      icon: 'ri-exchange-line',
      iconColor: 'bg-primarytint1color/10 !text-primarytint1color',
      timestamp: '24 mins ago',
      fromOrTo: '@user123',
      amount: '2.1 ETH',
      currency: 'ETH',
      transactionMode:'From:'
    },
    {
      type: 'sent',
      title: 'ETH Sent',
      icon: 'ri-arrow-right-line',
      iconColor: 'bg-success/10 !text-success',
      timestamp: '16 mins ago',
      fromOrTo: '@recipient456',
      amount: '1.5 ETH',
      currency: 'ETH',
      transactionMode:'To:'
    },
    {
      type: 'purchase',
      title: 'NFT Purchase',
      icon: 'ri-coin-line',
      iconColor: 'bg-info/10 !text-info',
      timestamp: '5 mins ago',
      fromOrTo: '@creator789',
      amount: '$350',
      currency: 'USD',
      transactionMode:'From:'
    },
    {
      type: 'sent',
      title: 'ETH Withdrawal',
      icon: 'ri-arrow-left-line',
      iconColor: 'bg-primarytint3color/10 !text-primarytint3color',
      timestamp: '2 hours ago',
      fromOrTo: '0x34F7Bc...',
      amount: '5.0 ETH',
      currency: 'ETH',
      transactionMode:'To:'
    },
  ];

  wallets = [
    {
      name: 'MetaMask',
      image: './assets/images/nft-images/22.png',
      connectText: 'Connect',
      avatarClass:'p-2',
      isActive: true,  // Set the first wallet as active
    },
    {
      name: 'Enjin Wallet',
      image: './assets/images/nft-images/23.png',
      connectText: 'Connect',
      isActive: false,
      avatarClass:'p-2',
    },
    {
      name: 'Trust Wallet',
      image: './assets/images/nft-images/20.png',
      connectText: 'Connect',
      isActive: false,
      avatarClass:'',
    },
    {
      name: 'Coinbase Wallet',
      image: './assets/images/nft-images/24.png',
      connectText: 'Connect',
      isActive: false,
      avatarClass:'p-2',
    
    },
    {
      name: 'Lido',
      image: './assets/images/nft-images/19.png',
      connectText: 'Connect',
      isActive: false,
      avatarClass:'p-2',
    },
    {
      name: 'Huobi Wallet',
      image: './assets/images/nft-images/27.png',
      connectText: 'Connect',
      isActive: false,
      avatarClass:'',
    }
  ];

  // Method to handle the activation of a wallet when clicked
  activateWallet(index: number): void {
    this.wallets.forEach((wallet, i) => {
      wallet.isActive = i === index;
    });
  }


}
