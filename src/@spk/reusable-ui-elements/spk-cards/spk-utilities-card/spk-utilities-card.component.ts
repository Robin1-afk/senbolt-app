import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-utilities-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-utilities-card.component.html',
  styleUrl: './spk-utilities-card.component.scss'
})
export class SpkUtilitiesCardComponent {
  @Input() widthClass: string = '';  // Default width is 75%
  @Input() title: string = '';
  @Input() bodyText: string = '';
  @Input() buttonText: string = 'Button';
}
