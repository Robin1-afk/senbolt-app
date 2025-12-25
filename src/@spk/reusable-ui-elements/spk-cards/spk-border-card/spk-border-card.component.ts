import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-border-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-border-card.component.html',
  styleUrl: './spk-border-card.component.scss'
})
export class SpkBorderCardComponent {
  @Input() CustomCardClass: string = ''; // Dynamic card border class
  @Input() Title: string = ''; // Title text
  @Input() Navigate: string = '#'; // Link navigation
  @Input() Class: string = ''; // Dynamic class for the icon
  @Input() Badges: { text: string; className: string }[] = []; // Array of badges
  @Input() Images: string[] = []; // Array of image sources
}
