import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkCurrencyExchangeComponent } from '../../../../../@spk/reusable-apps/spk-currency-exchange/spk-currency-exchange.component';
@Component({
  selector: 'app-currency-exchange',
  standalone: true,
  imports: [SharedModule,FormsModule,SpkNgSelectComponent,SpkCurrencyExchangeComponent],
  templateUrl: './currency-exchange.component.html',
  styleUrl: './currency-exchange.component.scss'
})
export class CurrencyExchangeComponent {
  chartOptions:any = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ['rgb(227, 84, 212)'],
  };
  chartOptions1:any = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgba(106, 78, 237,0.5)"],
  };
  chartOptions2:any = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
     colors: ["rgba(10, 145, 81,0.5)"],
  };
  chartOptions3:any = {
    chart: {
      type: "area",
      height: 45,
      width: 230,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.1
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [
      {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgba(227, 192, 11, 0.5)"],
 };
 chartOptions4:any = {
  chart: {
    type: "area",
    height: 45,
    width: 230,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 1,
    dashArray: 3,
  },
  fill: {
    gradient: {
      enabled: true
    }
  },
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false,
    },
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  colors: ["rgba(252, 108, 133, 0.5)"],
};
chartOptions5:any = {
  chart: {
    type: "area",
    height: 45,
    width: 230,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 1,
    dashArray: 3,
  },
  fill: {
    gradient: {
      enabled: true
    }
  },
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false,
    },
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  colors: ["rgba(227, 84, 212, 0.5)"],
};
chartOptions6:any = {
  chart: {
    type: "area",
    height: 45,
    width: 230,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 1,
    dashArray: 3,
  },
  fill: {
    gradient: {
      enabled: true
    }
  },
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false,
    },
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  colors: ["rgba(237, 78, 131, 0.5)"],
};
chartOptions7:any = {
  chart: {
    type: "area",
    height: 45,
    width: 230,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 1,
    dashArray: 3,
  },
  fill: {
    gradient: {
      enabled: true
    }
  },
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false,
    },
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  colors: ["rgba(70, 178, 201, 0.5)"],
};
chartOptions8:any = {
  chart: {
    type: "area",
    height: 45,
    width: 230,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 1,
    dashArray: 3,
  },
  fill: {
    gradient: {
      enabled: true
    }
  },
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false,
    },
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  colors: ["rgba(70, 178, 201, 0.5)"],
};
Currency=[
  {label:'USD',value:1},
  {label:'Pound',value:2},
  {label:'Rupee',value:3},
  {label:'Euro',value:4},
  {label:'Won',value:5},  
  {label:'Dinar',value:6},
  {label:'Rial',value:7},
]
SellCoins=[
  {label:'Bitcoin',value:1},
  {label:'Etherium',value:2},
  {label:'Litecoin',value:3},
  {label:'Ripple',value:4},
  {label:'Cardano',value:5},  
  {label:'Neo',value:6},
  {label:'Stellar',value:7},
  {label:'EOS',value:7},
  {label:'NEM',value:8},


]
handleSelectChange(value: any | any[]) {
}
cryptoCards = [
  {
    name: 'Bitcoin',
    symbol: '- BTC',
    change: '24.3%',
    price: '0.00434',
    value: '$30.29',
    imageUrl: './assets/images/crypto-currencies/square-color/Bitcoin.svg',
    chartOptions: this.chartOptions,
    marketCapClass:"fs-15 text-primary",
    primaryText:'+0.59',
    bg1:'success me-1 me-1',
    arrow:"up"
  },
  {
    name: 'Ethereum',
    symbol: '- ETH',
    change: '18.7%',
    price: '0.01758',
    value: '$2564.89',
    imageUrl: './assets/images/crypto-currencies/square-color/Ethereum.svg',
    chartOptions: this.chartOptions1,
    marketCapClass:"fs-15 text-primary", 
    primaryText:'+0.92',
    arrow:"up",
    bg1:'success me-1',

  },
  {
    name: 'Dash',
    symbol: '- DASH',
    change: '12.5%',
    price: '0.00487',
    value: '$116.78',
    imageUrl: './assets/images/crypto-currencies/square-color/Dash.svg',
    chartOptions: this.chartOptions2,
    marketCapClass:"fs-15 text-primary",
    primaryText:'-0.30',
    bg1:'danger me-1',
    arrow:"down"
  },
  {
    name: 'Litecoin',
    symbol: '- LTC',
    change: '8.2%',
    price: '0.00789',
    value: '$158.42',
    imageUrl: './assets/images/crypto-currencies/square-color/Litecoin.svg',
    chartOptions: this.chartOptions3,
    marketCapClass:"fs-15 text-primary",
    primaryText:'+0.15',
    bg1:'success me-1',
    arrow:"up"
  },
  {
    name: 'Ripple',
    symbol: '- XRP',
    change: '6.5%',
    price: '0.00123',
    value: '$0.79',
    imageUrl: './assets/images/crypto-currencies/square-color/Ripple.svg',
    chartOptions: this.chartOptions4,
    marketCapClass:"fs-15 text-primary",
    primaryText:'+0.10',
    bg1:'success me-1',
    arrow:"up"

  },
  {
    name: 'Golem',
    symbol: '- GNT',
    change: '4.8%',
    price: '0.000045',
    value: '$1.23',
    imageUrl: './assets/images/crypto-currencies/square-color/Golem.svg',
    chartOptions: this.chartOptions5,
    marketCapClass:"fs-15 text-primary",
    primaryText:'+0.02',
    bg1:'danger me-1',
    arrow:"down"

  },
  {
    name: 'Monero',
    symbol: '- XMR',
    change: '3.2%',
    price: '0.00456',
    value: '$182.34',
    imageUrl: './assets/images/crypto-currencies/square-color/Monero.svg',
    chartOptions: this.chartOptions6,
    marketCapClass:"fs-15 text-primary",
    primaryText:'+0.08',
    bg1:'success me-1',
    arrow:"up"

  },
  {
    name: 'EOS',
    symbol: '- EOS',
    change: '5.7%',
    price: '0.00234',
    value: '$4.78',
    imageUrl: './assets/images/crypto-currencies/square-color/EOS.svg',
    chartOptions: this.chartOptions7,
    marketCapClass:"fs-15 text-primary",
    primaryText:'+0.23',
    bg1:'success me-1',
    arrow:"up"

  },
  {
    name: 'Stratis',
    symbol: '- STRAX',
    change: '2.1%',
    price: '0.001234',
    value: '$2.34',
    imageUrl: './assets/images/crypto-currencies/square-color/Stratis.svg',
    chartOptions: this.chartOptions8,
    marketCapClass:"fs-15 text-primary",
    primaryText:'+0.04',
    bg1:'success me-1',
    arrow:"up"

  }
];
}