import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-image-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-image-card.component.html',
  styleUrl: './spk-image-card.component.scss'
})
export class SpkImageCardComponent {
    @Input() imgSrc?: string; // Image source
  @Input() imgPosition: 'top' | 'bottom' | undefined; // Image position
  @Input() title?: string; // Card title
  @Input() bodyText?: string; // Card body text
  @Input() FoolterClass?: string; // Card body text
  @Input() FooterPosition: 'top' | 'bottom' | 'middle'| undefined; // Image position
  @Input() footerText?: string; // Footer text
  @Input() hasHeader: boolean = false; // Show or hide header
  @Input() headerText?: string; // Header text
}
