import { Component, Input } from '@angular/core';
import { SpkApexchartsComponent } from '../../spk-apexcharts/apexcharts.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spk-crypto-dashboard',
  imports: [SpkApexchartsComponent,CommonModule],
  templateUrl: './spk-crypto-dashboard.component.html',
  styleUrl: './spk-crypto-dashboard.component.scss'
})
export class SpkCryptoDashboardComponent {
  @Input() imgSrc?: string;
  @Input() id?: string;
  @Input() name?: string;
  @Input() symbol?: string;
  @Input() logoclass?: string;
  @Input() value?: string;
  @Input() price?: string;
  @Input() change!: string;
  @Input() changeType?: string;
  @Input() chartOptions?: any;
  @Input() chartSeries?: any;
  @Input() type?: string;
  @Input() width?: number | string;
  @Input() height?: number | string;
}
