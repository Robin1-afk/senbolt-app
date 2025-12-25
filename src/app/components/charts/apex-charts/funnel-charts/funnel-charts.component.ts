import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};import { SpkApexchartsComponent } from '../../../../../@spk/spk-apexcharts/apexcharts.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-funnel-charts',
  standalone: true,
  imports: [SharedModule,SpkApexchartsComponent],
  templateUrl: './funnel-charts.component.html',
  styleUrl: './funnel-charts.component.scss'
})
export class FunnelChartsComponent {
  chartOptions:any;
  chartOptions1:any;
  @ViewChild("chart") chart!: ChartComponent;
 

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Funnel Series",
          data: [1380, 1100, 990, 880, 740, 548, 330, 200]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          barHeight: "80%",
          isFunnel: true
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val:any, opt:any) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        dropShadow: {
          enabled: true
        }
      },
      title: {
        text: "Recruitment Funnel",
        align: "center"
      },
      xaxis: {
        categories: [
          "Sourced",
          "Screened",
          "Assessed",
          "HR Interview",
          "Technical",
          "Verify",
          "Offered",
          "Hired"
        ]
      },
      legend: {
        show: false
      }
    };
    this.chartOptions1 = {
      series: [
        {
          name: "",
          data: [200, 330, 548, 740, 880, 990, 1100, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          distributed: true,
          barHeight: "80%",
          isFunnel: true
        }
      },
      colors: [
        "#F44F5E",
        "#E55A89",
        "#D863B1",
        "#CA6CD8",
        "#B57BED",
        "#8D95EB",
        "#62ACEA",
        "#4BC3E6"
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val:any, opt:any) {
          return opt.w.globals.labels[opt.dataPointIndex];
        },
        dropShadow: {
          enabled: true
        }
      },
      title: {
        text: "Pyramid Chart",
        align: "center"
      },
      xaxis: {
        categories: [
          "Sweets",
          "Processed Foods",
          "Healthy Fats",
          "Meat",
          "Beans & Legumes",
          "Dairy",
          "Fruits & Vegetables",
          "Grains"
        ]
      },
      legend: {
        show: false
      }
    };
  }
}
