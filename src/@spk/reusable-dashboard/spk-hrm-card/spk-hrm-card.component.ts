import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpkApexchartsComponent } from '../../spk-apexcharts/apexcharts.component';

@Component({
  selector: 'spk-hrm-card',
  imports: [CommonModule,SpkApexchartsComponent],
  templateUrl: './spk-hrm-card.component.html',
  styleUrl: './spk-hrm-card.component.scss'
})
export class SpkHrmCardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() percentage!: string;
  @Input() subtitle!: string;
  @Input() badgeClass!: string;
  @Input() iconClass!: string;
  @Input() chartId!: string;
  @Input() chartOptions!: any;
}
