import { Component, Input } from '@angular/core';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
@Component({
  selector: 'spk-echarts',
  standalone: true,
  imports: [NgxEchartsModule],
  templateUrl: './spk-echarts.component.html',
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: echarts }),
    },
  ],
  styleUrl: './spk-echarts.component.scss'
})
export class SpkEchartsComponent {
  @Input() options: EChartsOption = {};
  @Input() echartId: string = '';         // Dynamic table ID
  @Input() theme: string = ''; 
  @Input() merge: string = '';   
}
