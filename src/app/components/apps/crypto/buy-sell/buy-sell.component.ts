import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkApexchartsComponent } from '../../../../../@spk/spk-apexcharts/apexcharts.component';

@Component({
  selector: 'app-buy-sell',
  standalone: true,
  imports: [SharedModule,CommonModule,FormsModule,SpkNgSelectComponent,SpkApexchartsComponent],
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.scss',
})
export class BuySellComponent {
  chartOptions:any={
    series: [{
        type: 'bar',
        name: "Buy",
        data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
    }, {
        type: 'line',
        name: "Sell",
        data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
    }],
    chart: {
        height: 340,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "28%",
            borderRadius: 2
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: "top",
        horizontalAlign: "center",
        offsetX: -15,
        fontWeight: "bold",
    },
    stroke: {
        curve: 'smooth',
        width: ["1","1"],
    },
    markers: {
        size: 4,
        hover: {
            size: 6
        },
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    colors: ["rgb(84, 109, 254)", "rgba(227, 84, 212, 1)"],
    yaxis: {
        title: {
            text: 'Statistics',
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
    xaxis: {
        type: 'month',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: true,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90
        }
    }
  }
  Crypto=[
    {label:'BTC',value:1},
    {label:'ETH',value:2},
    {label:'XRP',value:3},
    {label:'DASH',value:4},
    {label:'NEO',value:5},  
    {label:'LTC',value:6},
    {label:'BSD',value:7},
  ]
  Crypto1=[
    {label:'USD',value:1},
    {label:'AED',value:2},
    {label:'AUD',value:3},
    {label:'ARS',value:4},
    {label:'AZN',value:5},  
    {label:'BGN',value:6},
    {label:'BRL',value:7},
  ]
  SellCrypto=[
    {label:'BTC',value:1},
    {label:'ETH',value:2},
    {label:'XRP',value:3},
    {label:'DASH',value:4},
    {label:'NEO',value:5},  
    {label:'LTC',value:6},
    {label:'BSD',value:7},
  ]
  SellCrypto1=[
    {label:'USD',value:1},
    {label:'AED',value:2},
    {label:'AUD',value:3},
    {label:'ARS',value:4},
    {label:'AZN',value:5},  
    {label:'BGN',value:6},
    {label:'BRL',value:7},
  ]
  Amount=[
    {label:'BTC',value:1},
    {label:'ETH',value:2},
    {label:'XRP',value:3},
    {label:'DASH',value:4},
    {label:'NEO',value:5},  
    {label:'LTC',value:6},
    {label:'BSD',value:7},
  ]
  handleSelectChange(value: any | any[]) {
}
}
