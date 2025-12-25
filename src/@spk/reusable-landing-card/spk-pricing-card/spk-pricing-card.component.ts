import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-pricing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-pricing-card.component.html',
  styleUrl: './spk-pricing-card.component.scss'
})
export class SpkPricingCardComponent {
  @Input() title: string = '';
  @Input() mainClass?: string = '';
  @Input() arrowClass?: string = '';
  @Input() borderClass?: string = '';
  @Input() priceClass?: string = '';
  @Input() bodyClass?: string = '';
  @Input() footerClass?: string = '';
  @Input() buttonClass?: string = '';
  @Input() textColor?: string = '';
  @Input() price: string = '';
  @Input() pricingPlan: string = '';
  @Input() description: string = '';
  @Input() features: Array<{ text: string, badge?: string,badgeClass?:string,icon?:string }> = [];
  @Input() isPopular: boolean = false;
}
