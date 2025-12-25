import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SharedModule } from '../../../shared/shared.module';
Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [SharedModule,SpkApexchartsComponent,SpkReusableTablesComponent,SpkDropdownsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.scss'
})
export class StocksComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			  },
			500: {
			  slidesPerView: 2,
			  spaceBetween: 10,
			},
			770: {
			  slidesPerView: 3,
			  spaceBetween: 10,
			},
			1400: {
			  slidesPerView: 5,
			  spaceBetween: 20,
			},
			1600: {
				slidesPerView: 5,
				spaceBetween: 20,
			  },
		  },
	  });
	}
  panels = ['Where can I subscribe to your newsletter?', ' Where can in edit my address?', 'What are your opening hours?','Do I have the right to return an item?','What are your opening hours?'];
  isCollapsed: any = true;
  chartOptions:any={
    chart: {
      type: 'line',
      height: 50,
      width: 120,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1
      }
  },
  grid: {
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },
      yaxis: {
          lines: {
              show: false
          }
      },
  },
  stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 2,
  },
  fill: {
      gradient: {
          enabled: false
      }
  },
  series: [{
      name: 'Value',
      data: [15, 42, 22, 42, 35, 32, 56, 35]
  }],
  yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
    },
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      }
  },
  colors: ['rgba(33, 206, 158, 0.4)'],
  }
  chartOptions1:any={
    chart: {
      type: 'line',
      height: 50,
      width: 120,
      sparkline: {
          enabled: true
      },
      dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1
      }
  },
  grid: {
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },
      yaxis: {
          lines: {
              show: false
          }
      },
  },
  stroke: {
      show: true,
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 1.5,
      dashArray: 2,
  },
  fill: {
      gradient: {
          enabled: false
      }
  },
  series: [{
      name: 'Value',
      data: [15, 42, 22, 42, 35, 32, 56, 35]
  }],
  yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
    },
  },
  xaxis: {
      show: false,
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      }
  },
  colors: ['rgba(251, 66, 66, 0.4)'],
  }

  generateDayWiseTimeSeries(baseval: number, count: number, yrange: { min: number; max: number; }) {
    const series: [number, number][] = [];
    let currentBaseval = baseval;

    for (let i = 0; i < count; i++) {
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([currentBaseval, y]);
      currentBaseval += 86400000; // Increment by one day in milliseconds
    }

    return series;
  }
  
   data = this.generateDayWiseTimeSeries(
    new Date("22 Apr 2024").getTime(),
    115,
    { min: 30, max: 90 }
  );

  chartOptions2:any={
    chart: {
      id: "chart2",
      type: "area",
      height: 200,
      foreColor: "#ccc",
      zoom:{
        enabled:false
      },
      toolbar: {
        autoSelected: "pan",
        show: false
      }
    },
    colors: ["rgba(var(--primary-rgb))"],
    stroke: {
      width: 3
    },
    grid: {
      borderColor: "#555",
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.1,
        opacityTo: 0
      }
    },
    markers: {
      size: 3,
      colors: ["#fff"],
      strokeColor: "rgb(227, 84, 212)",
      strokeWidth: 2
    },
    series: [
      {
        name: 'Investment',
        data: this.data
      }
    ],
    tooltip: {
      theme: "dark"
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      min: 0,
      tickAmount: 4
    }
  }
  chartOptions3:any={
    chart: {
      id: "chart1",
      height: 130,
      width:"100%",
      type: "bar",
      foreColor: "#ccc",
      zoom:{
        enabled:false
      },
      selection: {
        enabled: true,
        fill: {
          color: "#fff",
          opacity: 0.4
        },
        xaxis: {
          min: new Date("24 Jun 2024 10:00:00").getTime(),
          max: new Date("10 Jul 2024 10:00:00").getTime()
        }
      }
    },
    colors: ["rgba(227, 84, 212, 0.7)"],
    series: [
      {
        name: 'Market Cap',
        data: this.data
      }
    ],
    dataLabels:{
     enabled:false
    },
    stroke: {
      width: 2
    },
    grid: {
      borderColor: "#444"
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      tickAmount: 2
    }
  }
  chartOptions4:any={
    chart: {
      type: "line",
      height: 30,
      width: 50,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "rgb(227, 84, 212)",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1.2,
      dashArray: 0,
    },
    fill: {
      opacity: 0.2,
      gradient:{
        opacityFrom: 0.00,
        opacityTo: 0.0,
        shadeIntensity: 0.0,
      },
    },
    tooltip: {
      enabled: false,
    },
    series: [{
      name: "Value",
      data: [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
    }, ],
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
  
    colors: ["rgba(227, 84, 212, 1)"],
  }
  chartOptions5:any={
    ...this.chartOptions4,
    colors: ["rgba(255, 93, 159, 1)"],
  }
  chartOptions6:any={
    ...this.chartOptions4,
    colors: ["rgba(14, 165, 232, 1)"],
  }
  chartOptions7:any={
    ...this.chartOptions4,
    colors:["rgba(255, 198, 8, 1)"],
  }
  chartOptions8:any={
    ...this.chartOptions4,
    colors: ["rgba(158, 92, 247, 1)"],
  }
  chartOptions9:any={
    ...this.chartOptions4,
    colors: ["rgba(255, 142, 111, 1)"],
  }
  chartOptions10:any={
    ...this.chartOptions4,
    colors: ["rgba(33, 206, 158, 1)"],
  }
  chartOptions11:any={
    series: [1624, 1267, 1153],
    labels: ["Stocks", "Funds", "Bond"],
    chart: {
      height: 245,
      type: 'donut',
      width:"100%",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'round',
      colors: "#fff",
      width: 0,
      dashArray: 0,
    },
    fill: {
      type: 'solid',
    },
    plotOptions: {

      pie: {
        expandOnClick: false,
        donut: {
          size: '78%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '20px',
              color: '#495057',
              offsetY: -4
            },
            value: {
              show: true,
              fontSize: '18px',
              color: undefined,
              offsetY: 8,
              formatter: function (val: string) {
                return val + "%"
              }
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              fontSize: '22px',
              fontWeight: 600,
              color: '#495057',
            }
  
          }
        }
      }
    },
    colors: ["rgba(var(--primary-rgb))", "rgb(227, 84, 212)", "rgb(255, 93, 159)"],
  }
  chartOptions12:any={
    series: [
      {
        name: "This Week",
        data: [25, 50, 30, 55, 20, 45, 30],
        type: 'column',
      },
      {
        name: "Last Week",
        data: [35, 25, 40, 30, 45, 35, 60],
        type: 'column',
      }
    ],
    chart: {
      height: 263,
      type: 'line',
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 7,
        left: 0,
        blur: 1,
        color: ["transparent", "rgb(227, 84, 212)"],
        opacity: 0.05,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '35%',
        borderRadius: [2],
      }
    },
    colors: ['rgba(var(--primary-rgb))', 'rgb(227, 84, 212)'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      dashArray: [0, 0],
    },
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      show: false,
      axisBorder: {
        show: false,
        color: 'rgba(119, 119, 142, 0.05)',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: false,
        borderType: 'solid',
        color: 'rgba(119, 119, 142, 0.05)',
        width: 6,
        offsetX: 0,
        offsetY: 0
      },
      labels: {
        rotate: -90,
      }
    },
    legend: {
      show: true,
      position: "bottom",
      offsetX: 0,
      offsetY: 8,
      markers: {size:5,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },
    },
  }
stocksTable=[
  {
    src:"./assets/images/media/apps/apple.png",
    brand:"Apple",
    code:"AAPL",
    chartOptions:this.chartOptions4,
    price:"$150.20",
    percent:"+1.50%",
    bg:"success",
    bg1:"dark"
  },
  {
    src:"./assets/images/media/apps/google.png",
    brand:"Google",
    code:"GOOG",
    chartOptions:this.chartOptions5,
    price:"$2,500.5",
    percent:"-5.25%",
    bg:"danger",
    bg1:"primarytint2color"

  },
  {
    src:"./assets/images/media/apps/microsoft.png",
    brand:"Microsoft",
    code:"MSFT",
    chartOptions:this.chartOptions6,
    price:"$300.75",
    percent:"+2.30%",
    bg:"success",
    bg1:"primarytint3color"

  },
  {
    src:"./assets/images/media/apps/amazon.png",
    brand:"Amazon",
    code:"AMZN",
    chartOptions:this.chartOptions7,
    price:"$3,000.00",
    percent:"-10.50%",
    bg:"danger",
    bg1:"secondary"
  },
  {
    src:"./assets/images/media/apps/tesla.png",
    brand:"Tesla",
    code:"TSLA",
    chartOptions:this.chartOptions8,
    price:"$700.80",
    percent:"+8.00%",
    bg:"success",
    bg1:"warning"
  },
  {
    src:"./assets/images/media/apps/facebook.png",
    brand:"Facebook",
    code:"FB",
    chartOptions:this.chartOptions9,
    price:"$350.40",
    percent:"-3.20%",
    bg:"danger",
    bg1:"info"
  },
  {
    src:"./assets/images/media/apps/nvidia.png",
    brand:"Nvidia",
    code:"NVDA",
    chartOptions:this.chartOptions10,
    price:"$800.60",
    percent:"+5.75%",
    bg:"success",
    bg1:"success"
  },
]
stockColumns = [
  { header: 'Stock', field: 'Stock' },
  { header: 'Quantity', field: 'quantity' },
  { header: 'Stock Price', field: 'Stock Price' },
  { header: 'Change', field: 'Change' },
  { header: 'Total Value', field: 'Total Value' },
  { header: 'Actions', field: 'actions' }

];
mystocks=[
  {
    bg:"primary",
    icon:"github",
    title:"Gituhb, Demo Inc",
    code:"GTHB",
    quantity:"100",
    price:"$145.20",
    change:"+$1,230.00",
    bg1:"success",
    value:"$14,520.00"
  },
  {
    bg:"primarytint1color",
    icon:"amazon",
    title:"Amazon.com Inc.",
    code:"AMZN",
    quantity:"50",
    price:"$3,500.00",
    change:"-$5,500.00",
    bg1:"danger",
    value:"$175,000.00"
  },
  {
    bg:"primarytint2color",
    icon:"microsoft",
    title:"Microsoft Corporation",
    code:"MSFT",
    quantity:"75",
    price:"$265.75",
    change:"+$876.25",
    bg1:"success",
    value:"$19,931.25"
  },
  {
    bg:"primarytint3color",
    icon:"google",
    title:"Alphabet Inc. (Google)",
    code:"GOOGL",
    quantity:"30",
    price:"$2,550.00",
    change:"+$1,800.00",
    bg1:"success",
    value:"$76,500.00"
  },
  {
    bg:"info",
    icon:"facebook",
    title:"Facebook, Inc.",
    code:"FB",
    quantity:"60",
    price:"$325.60",
    change:"-$364.00",
    bg1:"danger",
    value:"$19,536.00"
  }
]
transactionColumns = [
  { header: 'Date', field: 'Date' },
  { header: 'Stock', field: 'Stock' },
  { header: 'Shares', field: 'Shares' },
  { header: 'Type', field: 'Type' },
  { header: 'Price', field: 'Price' },
  { header: 'Change', field: 'Change' }

];
marketColumns = [
  { header: 'Symbol', field: 'Symbol' },
  { header: 'Company Name', field: 'Company Name' },
  { header: 'Change', field: 'Change' },
  { header: 'Price', field: 'Price' },
  { header: '% Change', field: 'Change' },
  { header: 'Volume', field: 'Volume' },
];
markets=[
  {symbol:"AAPL",name:"Apple Inc.",change:"$5.00",bg:"success",price:"$150.00",change1:"+3.45%",volume:"1,000,000"},
  {symbol:"GOOGL",name:"Alphabet Inc.",change:"-$10.00",bg:"danger",price:"$2,500.00",change1:"-0.40%",volume:"500,000"},
  {symbol:"MSFT",name:"Microsoft Corporation",change:"$3.00",bg:"success",price:"$300.00",change1:"+1.01%",volume:"800,000"},
  {symbol:"TSLA",name:"Tesla, Inc.",change:"$20.00",bg:"success",price:"$700.00",change1:"+2.94%",volume:"1,200,000"},
  {symbol:"NFLX",name:"Netflix, Inc.",change:"-$5.00",bg:"danger",price:"$400.00",change1:"-1.23%",volume:"600,000"},
  {symbol:"AMZN",name:"Amazon.com, Inc.",change:"$50.00",bg:"success",price:"$3,000.00",change1:"+1.69%",volume:"1,500,000"},
  {symbol:"FB",name:"Facebook.com, Inc.",change:"$24.00",bg:"success",price:"$6,000.00",change1:"+2.08%",volume:"2,258,450"},
]

stocks = [
  {
    name: 'Apple',
    icon: 'bi bi-apple text-dark',
    iconBg: 'bg-dark/10',
    change: '+0.14%',
    changeClass: 'text-success',
    ticker: 'AAPL',
    value: '$1,780.80',
    valueIcon: 'ri-arrow-up-s-fill text-success',
    chartId: 'stock-1',
    chartOptions:this.chartOptions
  },
  {
    name: 'Bitcoin',
    icon: 'bi bi-currency-bitcoin text-warning',
    iconBg: 'bg-warning/10',
    change: '-2.14%',
    changeClass: 'text-danger',
    ticker: 'BTC',
    value: '$58,151.02',
    valueIcon: 'ri-arrow-down-s-fill text-danger',
    chartId: 'stock-2',
    chartOptions:this.chartOptions1
  },
  {
    name: 'Tesla',
    icon: 'bi bi-card-list text-primarytint1color',
    iconBg: 'bg-primarytint1color/10',
    change: '+4.02%',
    changeClass: 'text-success',
    ticker: 'TSLA',
    value: '$4,125.63',
    valueIcon: 'ri-arrow-up-s-fill text-success',
    chartId: 'stock-3',
    chartOptions:this.chartOptions
  },
  {
    name: 'Amazon',
    icon: 'bi bi-gift text-primarytint2color',
    iconBg: 'bg-primarytint2color/10',
    change: '-5.14%',
    changeClass: 'text-danger',
    ticker: 'AMZN',
    value: '$63,251.11',
    valueIcon: 'ri-arrow-down-s-fill text-danger',
    chartId: 'stock-4',
    chartOptions:this.chartOptions1
  },
  {
    name: 'Aliexpress',
    icon: 'bi bi-truck text-primarytint3color',
    iconBg: 'bg-primarytint3color/10',
    change: '+1.14%',
    changeClass: 'text-success',
    ticker: 'AE',
    value: '$5,401.50',
    valueIcon: 'ri-arrow-up-s-fill text-success',
    chartId: 'stock-5',
    chartOptions:this.chartOptions
  },
  {
    name: 'Samsung',
    icon: 'bi bi-phone text-secondary',
    iconBg: 'bg-secondary/10',
    change: '+2.14%',
    changeClass: 'text-success',
    ticker: 'SSNLF',
    value: '$10,732.12',
    valueIcon: 'ri-arrow-up-s-fill text-success',
    chartId: 'stock-6',
    chartOptions:this.chartOptions
  },
  {
    name: 'Nvidia',
    icon: 'bi bi-nvidia text-info',
    iconBg: 'bg-info/10',
    change: '-2.13%',
    changeClass: 'text-danger',
    ticker: 'NVDA',
    value: '$23,235.25',
    valueIcon: 'ri-arrow-down-s-fill text-danger',
    chartId: 'stock-7',
    chartOptions:this.chartOptions1
  }
];
transactions=[
  {
    date:"12 Apr, 2024",
    src:"./assets/images/media/apps/apple.png",
    code:"APPL - Apple Inc.",
    bg:"dark",
    shares:"50",
    typebg:"primary",
    type:"Buy",
    price:"$150.00",
    value:"$7,500.00",
    change:"+2%", 
    arrow:"up",
    bg1:"success"
  },
  {
    date:"14 Apr, 2024",
    src:"./assets/images/media/apps/google.png",
    code:"GOOGL-Alphabet Inc..",
    bg:"primarytint2color",
    shares:"20",
    typebg:"primarytint1color",
    type:"Sell",
    price:"$2,400.00",
    value:"$48,000.00",
    change:"-1.5%", 
    arrow:"down",
    bg1:"danger"
  },
  {
    date:"18 Apr, 2024",
    src:"./assets/images/media/apps/tesla.png",
    code:"TSLA - Tesla Inc.",
    bg:"warning",
    shares:"15",
    typebg:"primary",
    type:"Buy",
    price:"$650.00",
    value:"$9,750.00",
    change:"+1.2%", 
    arrow:"up",
    bg1:"success"
  },
  {
    date:"20 Apr, 2024",
    src:"./assets/images/media/apps/microsoft.png",
    code:"MSFT - Microsoft Corp.",
    bg:"primarytint3color",
    shares:"30",
    typebg:"primarytint1color",
    type:"Sell",
    price:"$280.00",
    value:"$8,400.00",
    change:"-0.8%", 
    arrow:"down",
    bg1:"danger"
  },
  {
    date:"22 Apr, 2024",
    code:"NFLX - Netflix Inc.",
    bg:"danger",
    shares:"25",
    typebg:"primary",
    type:"Buy",
    price:"$500.00",
    value:"$12,500.00",
    change:"+0.5%", 
    arrow:"up",
    bg1:"success",
    icon:"ri-netflix-line"
  }
]
}
