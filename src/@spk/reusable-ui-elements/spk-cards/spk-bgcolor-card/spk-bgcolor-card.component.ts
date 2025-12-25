import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-bgcolor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-bgcolor-card.component.html',
  styleUrl: './spk-bgcolor-card.component.scss'
})
export class SpkBgcolorCardComponent {
  @Input() cardClass: string = ''; // Box background class
  @Input() avatar: string = ''; // Avatar image source
  @Input() name: string = ''; // User's name
  @Input() status: string = ''; // User's status or description
  @Input() statusClass: string = 'text-white'; // Optional status text class
  @Input() anchorClass: string = 'text-white'; // Optional class for the anchor

}
