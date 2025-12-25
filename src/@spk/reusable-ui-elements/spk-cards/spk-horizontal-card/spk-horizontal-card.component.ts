import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-horizontal-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-horizontal-card.component.html',
  styleUrl: './spk-horizontal-card.component.scss'
})
export class SpkHorizontalCardComponent {
  @Input() imgSrc: string = ''; // Image source
  @Input() imgPosition: 'left' | 'right' = 'left'; // Image position
  @Input() headerTitle?: string; // Header title
  @Input() bodyTitle?: string; // Body title
  @Input() bodyText?: string; // Body text
  @Input() footerText?: string; // Footer text
  @Input() imageClass?: string; // Footer text

}
