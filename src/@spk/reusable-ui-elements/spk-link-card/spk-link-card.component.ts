import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-link-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-link-card.component.html',
  styleUrl: './spk-link-card.component.scss'
})
export class SpkLinkCardComponent {
  @Input() avatarSrc: string = ''; // Avatar image source
  @Input() avatarSize: string=''; // Avatar size
  @Input() name: string = ''; // User's name
  @Input() title: string = ''; // User's title
  @Input() titleClass: string = ''; // User's title
  @Input() description: string = ''; // Additional description
  @Input() customClass: string = ''; // Custom class for card styling
  @Input() textColorClass: string = ''; // Custom text color class for the name
  @Input() anchorLabel: string = 'anchor'; // ARIA label for the anchor
}
