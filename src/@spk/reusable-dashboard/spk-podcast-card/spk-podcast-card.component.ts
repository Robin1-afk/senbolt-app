import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-podcast-card',
  imports: [CommonModule],
  templateUrl: './spk-podcast-card.component.html',
  styleUrl: './spk-podcast-card.component.scss'
})
export class SpkPodcastCardComponent {
  @Input() iconClass: string = '';
  @Input() category: string = '';
  @Input() count: number = 0;
  @Input() bgClass: string = '';
}
