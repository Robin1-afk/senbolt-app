import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-nft-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-nft-card.component.html',
  styleUrl: './spk-nft-card.component.scss'
})
export class SpkNftCardComponent {
  @Input() time: string = '';
  @Input() title: string = '';
  @Input() title1: string = '';
  @Input() subTitle: string = '';
  @Input() image: string = '';
  @Input() image1: string = '';
  @Input() bgColor: string = '';
  @Input() value: string = '';


  @Input() name: string = '';
  @Input() name1: string = '';
  @Input() mail: string = '';
  @Input() likes: string = '';
  @Input() likes1: string = '';
  @Input() customClass: string = '';
  @Input() customClass1: string = '';
  @Input() customClass2: string = '';
  @Input() customClass3: string = '';
  @Input() avatarSize: string = '';
}
