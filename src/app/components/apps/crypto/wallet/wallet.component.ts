import { Component } from '@angular/core';
import { SpkCryptoWalletCardComponent } from '../../../../../@spk/reusable-apps/spk-crypto-wallet-card/spk-crypto-wallet-card.component';
import { SpkCryptoAvailableCardComponent } from '../../../../../@spk/reusable-apps/spk-crypto-available-card/spk-crypto-available-card.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [SharedModule,SpkCryptoWalletCardComponent,SpkCryptoAvailableCardComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
  wallets=[
    {
      title: 'BTC',
      walletAddress: 'afb0dc8bc84625587b85415c86ef43ed8df',
      received: 6.2834,
      sent: 2.7382,
      balance: 12.5232,
      currency: 'BTC',
      imgSrc: './assets/images/media/media-68.png',
    },
    {
      title: 'ETH',
      walletAddress: 'afb0dc8bc84625587b85415c86ef43ed8df',
      received: 6.2834,
      sent: 2.7382,
      balance: 12.5232,
      currency: 'ETH',
      imgSrc: './assets/images/media/media-68.png',
    },
    {
      title: 'LTC',
      walletAddress: 'afb0dc8bc84625587b85415c86ef43ed8df',
      received: 6.2834,
      sent: 2.7382,
      balance: 12.5232,
      currency: 'LTC',
      imgSrc: './assets/images/media/media-68.png',
    }
  ]
  availableWallets = [
    {
      title: 'BTC WALLET',
      available: '0.05437 BTC',
      usdValue: '$1646.94',
      currencySymbol: 'BTC',
      imgSrc: './assets/images/crypto-currencies/square-color/Bitcoin.svg'
    },
    {
      title: 'ETH WALLET',
      available: '2.3892 ETH',
      usdValue: '$4581.24',
      currencySymbol: 'ETH',
      imgSrc: './assets/images/crypto-currencies/square-color/Ethereum.svg'
    },
    {
      title: 'XRP WALLET',
      available: '234.943 XRP',
      usdValue: '$192.29',
      currencySymbol: 'XRP',
      imgSrc: './assets/images/crypto-currencies/square-color/Ripple.svg'
    },
    {
      title: 'LTC WALLET',
      available: '37.254 LTC',
      usdValue: '$3519.01',
      currencySymbol: 'LTC',
      imgSrc: './assets/images/crypto-currencies/square-color/Litecoin.svg'
    }
  ];
  
}
