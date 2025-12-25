import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { SpkApexchartsComponent } from '../../../../../@spk/spk-apexcharts/apexcharts.component';
import { SharedModule } from '../../../../shared/shared.module';
@Component({
  selector: 'app-polararea-charts',
  standalone: true,
  imports: [MatCommonModule,SharedModule,SpkApexchartsComponent],
  templateUrl: './polararea-charts.component.html',
  styleUrl: './polararea-charts.component.scss'
})
export class PolarareaChartsComponent {
  chartOptions:any;
  chartOptions1:any;
  constructor() {
    this.chartOptions = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
          type: 'polarArea',
          height: 280
      },
      stroke: {
          colors: ['#fff']
      },
      fill: {
          opacity: 0.8
      },
      legend: {
          position: 'bottom'
      },
      colors: ["#845adf", "#e354d4", "#ff8e6f", "#49b6f5", "#e6533c", "#26bf94", "#a65e76", "#49b6f5", "#5b67c7"],
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  width: 200
              },
              legend: {
                  position: 'bottom'
              }
          }
      }]
    };
    this.chartOptions1= {
      series: [42, 47, 52, 58, 65],
        chart: {
            height: 280,
            type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6,
                color: "#845adf",
            }
        }
    };
  }
}
