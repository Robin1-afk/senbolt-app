import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-overlay-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-overlay-card.component.html',
  styleUrl: './spk-overlay-card.component.scss'
})
export class SpkOverlayCardComponent {
  @Input() imgSrc: string = ''; // Image source
  @Input() boxClass: string = ''; // Image source
  @Input() additionalClass: string = ''; // Image source
  @Input() headerText?: string; // Header text
  @Input() bodyText?: string; // Main body text
  @Input() bodyAdditionalText?: string; // Additional body text
  @Input() footerText?: string; // Footer text
  @Input() scrollable: boolean = false; // Is body scrollable
  @Input() hasFooter: boolean = false; // Display footer
}
