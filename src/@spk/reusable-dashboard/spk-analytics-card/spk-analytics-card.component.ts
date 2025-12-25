import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpkApexchartsComponent } from '../../spk-apexcharts/apexcharts.component';

@Component({
  selector: 'spk-analytics-card',
  standalone: true,
  imports: [NgApexchartsModule,CommonModule,SpkApexchartsComponent],
  templateUrl: './spk-analytics-card.component.html',
  styleUrl: './spk-analytics-card.component.scss'
})
export class SpkAnalyticsCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() arrow: string = '';
  @Input() percentageChange: string = '';
  @Input() percentageClass: string = '';
  @Input() chartOptions: any;
  @Input() iconClass: string = '';
  @Input() bgClass: string = '';
  @Input() trend: string = 'up'; 
}
