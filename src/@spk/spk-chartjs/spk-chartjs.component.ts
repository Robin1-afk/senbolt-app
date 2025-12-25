import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'spk-chartjs',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './spk-chartjs.component.html',
  styleUrl: './spk-chartjs.component.scss'
})
export class SpkChartjsComponent {
  @Input('data') ChartData:any;
  @Input('options') ChartOptions:any;
  @Input('type') ChartType:any;


}
