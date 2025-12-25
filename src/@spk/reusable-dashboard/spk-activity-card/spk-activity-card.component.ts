import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-activity-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-activity-card.component.html',
  styleUrl: './spk-activity-card.component.scss'
})
export class SpkActivityCardComponent {
  @Input() activities: Array<{ 
    activity: string;
  highlight?: string;
  highlight1?:string;
  highlightClass?: string;
  time: string;
  }> = [];
}
