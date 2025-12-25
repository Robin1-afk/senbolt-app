import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'spk-medical-card',
  standalone: true,
  imports: [NgApexchartsModule,CommonModule],
  templateUrl: './spk-medical-card.component.html',
  styleUrl: './spk-medical-card.component.scss'
})
export class SpkMedicalCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() linkText: string = '';
  @Input() Status: string = '';
  @Input() icon: string = '';
  @Input() bgColor: string = '';
  @Input() percentageChange: string = '';
  @Input() direction: string = '';
  @Input() percentageClass: string = '';


  @Input('chartOptions') chartOptions:any;
}
