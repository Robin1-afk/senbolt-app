import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkAnalyticsCardComponent } from '../../../../@spk/reusable-dashboard/spk-analytics-card/spk-analytics-card.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [SharedModule,SpkAnalyticsCardComponent,SpkDropdownsComponent,SpkApexchartsComponent,CommonModule,SpkReusableTablesComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  referrals=[
    { header: 'Source', field: 'source' },
    { header: 'Total', field: 'total' },
    { header: 'Growth', field: 'growth' },

  ]
  referalsdata=[
    {
      source:"Search Engines",
      total:"300",
      growth:"+5.2%",
      bg:"success"
    },
    {
      source:"Social Media",
      total:"450",
      growth:"+10.3%",
      bg:"success"
    },
    {
      source:"Direct",
      total:"200",
      growth:"+2.5%",
      bg:"success"
    },
    {
      source:"Referral Sites",
      total:"150",
      growth:"-1.2%",
      bg:"danger"
    },
    {
      source:"Email",
      total:"100",
      growth:"+3.8%",
      bg:"success"
    },
  ]
chartOptions:any={
  series: [
    {
      data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
    },
  ],
  chart: {
    height: 85,
    width: 100,
    type: 'area',
    zoom: {
        enabled: false
    },
    sparkline: {
        enabled: true
    }
},
tooltip: {
    enabled: true,
    x: {
        show: false
    },
    y: {
        title: {
            formatter: function () {
                return ''
            }
        }
    },
    marker: {
        show: false
    }
},
dataLabels: {
    enabled: false
},
grid: {
    borderColor: 'transparent',
},
xaxis: {
    crosshairs: {
        show: false,
    }
},
yaxis: { 
  max: 65,
},
colors: ["rgba(var(--primary-rgb))"],
stroke: {
    width: [.75],
},
fill: {
  opacity: 0.001,
  type: ['gradient'],
  gradient: {
    shade: 'light',
    type: "horizontal",
    shadeIntensity: 0.5,
    gradientToColors: ['rgba(var(--primary-rgb), 0.1)'],
    inverseColors: true,
    opacityFrom: 0.35,
    opacityTo: 0.05,
    stops: [0, 50, 100],
    colorStops: [
      [
          {
              offset: 0,
              color: "rgba(var(--primary-rgb), 0.4)",
              opacity: 1
          },
          {
              offset: 55,
              color: "rgba(var(--primary-rgb), 0.1)",
              opacity: 0.1
          },
          {
              offset: 100,
              color: "rgba(var(--primary-rgb), 0.5)",
              opacity: 0.3
          }
      ],
    ]
  }
}
}
chartOptions1:any={
  series: [
    {
      data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
    },
  ],
  chart: {
    height: 85,
    width: 100,
    type: 'area',
    zoom: {
        enabled: false
    },
    sparkline: {
        enabled: true
    }
},
tooltip: {
    enabled: true,
    x: {
        show: false
    },
    y: {
        title: {
            formatter: function () {
                return ''
            }
        }
    },
    marker: {
        show: false
    }
},
dataLabels: {
    enabled: false
},
grid: {
    borderColor: 'transparent',
},
xaxis: {
    crosshairs: {
        show: false,
    }
},
yaxis: { 
  max: 65,
},
stroke: {
    width: [.75],
},
colors: ["rgb(227, 84, 212)"],
fill: {
  opacity: 0.001,
  type: ['gradient'],
  gradient: {
    shade: 'light',
    type: "horizontal",
    shadeIntensity: 0.5,
    gradientToColors: ['rgba(227, 84, 212, 0.1)'],
    inverseColors: true,
    opacityFrom: 0.35,
    opacityTo: 0.05,
    stops: [0, 50, 100],
    colorStops: [
      [
          {
              offset: 0,
              color: "rgba(227, 84, 212, 0.4)",
              opacity: 1
          },
          {
              offset: 55,
              color: "rgba(227, 84, 212, 0.1)",
              opacity: 0.1
          },
          {
              offset: 100,
              color: "rgba(227, 84, 212, 0.5)",
              opacity: 0.3
          }
      ],
    ]
  }
}
}
chartOptions2:any={
  series: [
    {
      data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
    },
  ],
  chart: {
    height: 85,
    width: 100,
    type: 'area',
    zoom: {
        enabled: false
    },
    sparkline: {
        enabled: true
    }
},
tooltip: {
    enabled: true,
    x: {
        show: false
    },
    y: {
        title: {
            formatter: function () {
                return ''
            }
        }
    },
    marker: {
        show: false
    }
},
dataLabels: {
    enabled: false
},
grid: {
    borderColor: 'transparent',
},
xaxis: {
    crosshairs: {
        show: false,
    }
},
yaxis: { 
  max: 65,
},
stroke: {
    width: [.75],
},
colors: ["rgb(255, 93, 159)"],
fill: {
  opacity: 0.001,
  type: ['gradient'],
  gradient: {
    shade: 'light',
    type: "horizontal",
    shadeIntensity: 0.5,
    gradientToColors: ['rgba(255, 93, 159, 0.1)'],
    inverseColors: true,
    opacityFrom: 0.35,
    opacityTo: 0.05,
    stops: [0, 50, 100],
    colorStops: [
      [
          {
              offset: 0,
              color: "rgba(255, 93, 159, 0.4)",
              opacity: 1
          },
          {
              offset: 55,
              color: "rgba(255, 93, 159, 0.1)",
              opacity: 0.1
          },
          {
              offset: 100,
              color: "rgba(255, 93, 159, 0.5)",
              opacity: 0.3
          }
      ],
    ]
  }
}
}
chartOptions3:any={
  series: [
    {
      data: [1, 20, 15, 35, 30, 25, 55, 45, 65],
    },
  ],
  chart: {
    height: 85,
    width: 100,
    type: 'area',
    zoom: {
        enabled: false
    },
    sparkline: {
        enabled: true
    }
},
tooltip: {
    enabled: true,
    x: {
        show: false
    },
    y: {
        title: {
            formatter: function () {
                return ''
            }
        }
    },
    marker: {
        show: false
    }
},
dataLabels: {
    enabled: false
},
grid: {
    borderColor: 'transparent',
},
xaxis: {
    crosshairs: {
        show: false,
    }
},
yaxis: { 
  max: 65,
},
stroke: {
    width: [.75],
},
colors: ["rgb(255, 142, 111)"],
fill: {
  opacity: 0.001,
  type: ['gradient'],
  gradient: {
    shade: 'light',
    type: "horizontal",
    shadeIntensity: 0.5,
    gradientToColors: ['rgba(255, 142, 111, 0.1)'],
    inverseColors: true,
    opacityFrom: 0.35,
    opacityTo: 0.05,
    stops: [0, 50, 100],
    colorStops: [
      [
          {
              offset: 0,
              color: "rgba(255, 142, 111, 0.4)",
              opacity: 1
          },
          {
              offset: 55,
              color: "rgba(255, 142, 111, 0.1)",
              opacity: 0.1
          },
          {
              offset: 100,
              color: "rgba(255, 142, 111, 0.5)",
              opacity: 0.3
          }
      ],
    ]
  }
}
}
cardData = [
  {
    title: 'Total Followers',
    value: '13,124',
    percentageChange: '2.62%',
    chartOptions: this.chartOptions,
    iconClass: 'bx bx-group',
    percentageClass:"Increased ",
    bgClass: 'bg-primary',
    trend: 'up',
  },
  {
    title: 'Session Rate',
    value: '11,287',
    percentageChange: '0.56%',
    chartOptions: this.chartOptions1,
    iconClass: 'bx bx-trending-up',
    percentageClass:"Increased ",
    bgClass: 'bg-primarytint1color ',
    trend: 'up',
  },
  {
    title: 'Conversion Rate',
    value: '17,658',
    percentageChange: '3.76%',
    chartOptions: this.chartOptions2,
    percentageClass:"Decreased ",
    iconClass: 'bx bx-dollar',
    bgClass: 'bg-primarytint2color ',
    trend: 'down',
  },
  {
    title: 'Total Review',
    value: '5,124',
    percentageChange: '2.57%',
    chartOptions: this.chartOptions3,
    iconClass: 'bx bx-like',
    percentageClass:"Increased ",
    bgClass: 'bg-primarytint3color ',
    trend: 'up',
  }
];
chartOptions4:any={
  series: [
    {
      type: "line",
      name: "Viewers",
      data: [
        {
          x: "Jan",
          y: 320,
        },
        {
          x: "Feb",
          y: 560,
        },
        {
          x: "Mar",
          y: 250,
        },
        {
          x: "Apr",
          y: 486,
        },
        {
          x: "May",
          y: 310,
        },
        {
          x: "Jun",
          y: 560,
        },
        {
          x: "Jul",
          y: 560,
        },
        {
          x: "Aug",
          y: 860,
        },
        {
          x: "Sep",
          y: 400,
        },
        {
          x: "Oct",
          y: 500,
        },
        {
          x: "Nov",
          y: 350,
        },
        {
          x: "Dec",
          y: 700,
        },
      ],
    },
    {
      type: "area",
      name: "Followers",
      data: [
        {
          x: "Jan",
          y: 680,
        },
        {
          x: "Feb",
          y: 800,
        },
        {
          x: "Mar",
          y: 680,
        },
        {
          x: "Apr",
          y: 840,
        },
        {
          x: "May",
          y: 980,
        },
        {
          x: "Jun",
          y: 720,
        },
        {
          x: "Jul",
          y: 900,
        },
        {
          x: "Aug",
          y: 1000,
        },
        {
          x: "Sep",
          y: 850,
        },
        {
          x: "Oct",
          y: 950,
        },
        {
          x: "Nov",
          y: 750,
        },
        {
          x: "Dec",
          y: 860,
        },
      ],
    },
    {
      type: "bar",
      name: "Sessions",
      chart: {
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.1,
        },
      
      },
      data: [
        {
          x: "Jan",
          y: 180,
        },
        {
          x: "Feb",
          y: 250,
        },
        {
          x: "Mar",
          y: 300,
        },
        {
          x: "Apr",
          y: 350,
        },
        {
          x: "May",
          y: 350,
        },
        {
          x: "Jun",
          y: 250,
        },
        {
          x: "Jul",
          y: 150,
        },
        {
          x: "Aug",
          y: 250,
        },
        {
          x: "Sep",
          y: 350,
        },
        {
          x: "Oct",
          y: 350,
        },
        {
          x: "Nov",
          y: 250,
        },
        {
          x: "Dec",
          y: 200,
        },
      ],
    },
  ],
  chart: {
    type: "area",
    height: 398,
    animations: {
      speed: 500,
    },
    toolbar: {
      show: false,
    },
    zoom:{
      enabled :false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 8,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.1,
    },
  },
  colors: ["rgba(227, 84, 212, 1)", "rgba(255, 93, 159, 0.25)", "rgba(var(--primary-rgb))"],
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "#f1f1f1",
    strokeDashArray: 3,
  },
  markers: {
    size: 6,
    hover: {
        size: 6
    },
    discrete: [{
      seriesIndex: 0,
      dataPointIndex: 1,
      fillColor: '#fff',
      strokeColor: 'rgb(227, 84, 212)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 2,
      fillColor: '#fff',
      strokeColor: 'rgb(227, 84, 212)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0, 
      dataPointIndex: 3,
      fillColor: '#fff',
      strokeColor: 'rgb(227, 84, 212)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 4,
      fillColor: '#fff',
      strokeColor: 'rgb(227, 84, 212)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 5,
      fillColor: '#fff',
      strokeColor: 'rgb(227, 84, 212)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 6,
      fillColor: '#fff',
      strokeColor: 'rgb(227, 84, 212)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 7,
      fillColor: '#fff',
      strokeColor: 'rgb(227, 84, 212)',
      size: 3,
      shape: "circle" 
    },
    {
      seriesIndex: 0,
      dataPointIndex: 8,
      fillColor: '#fff',
      strokeColor: 'rgb(227, 84, 212)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 9, 
      fillColor: '#fff',
      strokeColor: 'rgb(227, 84, 212)',
      size: 3, 
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 10,
      fillColor: '#fff',
      strokeColor: 'rgb(227, 84, 212)',
      size: 3, 
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 1,
      fillColor: '#fff',
      strokeColor: 'rgb(255, 93, 159)',
      size: 3, 
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 2,
      fillColor: '#fff',
      strokeColor: 'rgb(255, 93, 159)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 3,
      fillColor: '#fff',
      strokeColor: 'rgb(255, 93, 159)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 4,
      fillColor: '#fff',
      strokeColor: 'rgb(255, 93, 159)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 5,
      fillColor: '#fff',
      strokeColor: 'rgb(255, 93, 159)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 6,
      fillColor: '#fff',
      strokeColor: 'rgb(255, 93, 159)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 7,
      fillColor: '#fff',
      strokeColor: 'rgb(255, 93, 159)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 8,
      fillColor: '#fff',
      strokeColor: 'rgb(255, 93, 159)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 9,
      fillColor: '#fff',
      strokeColor: 'rgb(255, 93, 159)',
      size: 3, 
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 10,
      fillColor: '#fff',
      strokeColor: 'rgb(255, 93, 159)',
      size: 3, 
      shape: "circle"
    },
    ],
  },
  fill: {
    type: ['soild','gradient','soild'],
    gradient:{
        opacityFrom: 0.05,
        opacityTo: 0.05,
        shadeIntensity: 0.1,
    },
  },
  stroke: {
    curve: ["smooth","stepline", "smooth"],
    width: [2, 2, 2],
    dashArray: [0, 0, 0, 0],
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: function (value: string) {
        return "$" + value;
      },
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
      borderRadius: "2",
    },
  },
  tooltip: {
    y: [
      {
        formatter: function (e: number | undefined) {
          return void 0 !== e ? e.toFixed(0) : e;
        },
      },
      {
        formatter: function (e: number | undefined) {
          return void 0 !== e ? e.toFixed(0) : e;
        },
      },
      {
        formatter: function (e: number | undefined) {
          return void 0 !== e ? e.toFixed(0) : e;
        },
      },
    ],
  },
  legend: {
    show: true,
    position: "top",
    inverseOrder: true,
  },
}
chartOptions5:any={
  series: [300, 450, 200, 150, 100],
  chart: {
    height: 230,
    type: "donut",
  },
  labels: ["Search Engines", "Social Media", "Direct", "Referral Sites", "Email"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: [
    "rgb(227, 84, 212)",
    "rgba(var(--primary-rgb))",
    "rgb(255, 93, 159)",
    "rgb(255, 142, 111)",
    "rgb(158, 92, 247)",
  ],
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "75%",
        background: "transparent",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "20px",
            color: "#495057",
            offsetY: -4,
          },
          value: {
            show: true,
            fontSize: "18px",
            color: undefined,
            offsetY: 8,
            formatter: function (val: string) {
              return val + "%";
            },
          },
          total: {
            show: true,
            showAlways: true,
            label: "Total",
            fontSize: "22px",
            fontWeight: 600,
            color: "#495057",
          },
        },
      },
    },
  },
}
chartOptions6:any={
  series: [{
    name: 'Last Year',
    data: [35, 36, 22, 44, 48, 37, 36, 26, 27, 33, 32, 36]
},{
  name: 'This Year',
  data: [55, 53, 46, 40, 45, 38, 46, 37, 22, 34, 40, 44,]
},
],
chart: {
    type: 'line',
    height: 170,
    stacked: true,
    toolbar: {
      show: false,
    },
    sparkline: {
        enabled: false
    },
    dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 6,
        left: 1,
        blur: 4,
        color: '#000',
        opacity: 0.12
    },
    zoom:{
      enabled :false
    },
},
grid: {
  show: true,
  xaxis: {
    lines: {
        show: true
    }
},   
yaxis: {
    lines: {
        show: false
    }
},  
padding: {
  top:2,
  right:2,
  bottom:2,
  left:2
},  
  borderColor: '#f1f1f1',
  strokeDashArray: 3
},
markers: {
  size: 4,
  hover: {
      size: 3
  },
},
colors: [ "rgba(227, 84, 212, 1)","rgba(var(--primary-rgb))"],
stroke: {
    curve: 'straight',
    width: 2,
    dashArray: 2
},
legend: {
    show: true,
    position: "bottom",
    fontSize: '10px',
    fontFamily: 'Poppins',
    markers: {
      size: 4,
      shape: undefined,
      border:'none',
      strokeWidth: 0
  },
},
yaxis: {
  axisBorder: {
    show: false,
    color: "rgba(119, 119, 142, 0.05)",
    offsetX: 0,
    offsetY: 0,
},
axisTicks: {
    show: true,
    borderType: "solid",
    color: "rgba(119, 119, 142, 0.05)",
    width: 6,
    offsetX: 0,
    offsetY: 0,
},
    title: {
        style: {
            color: '#adb5be',
            fontSize: '14px',
            fontFamily: 'poppins, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-label',
        },
    },
    labels: {
      show: false,
        formatter: function (y: number) {
            return y.toFixed(0) + "";
        }
    }
},
xaxis: {
    type: 'month',
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    axisBorder: {
      show: true,
      color: "rgba(119, 119, 142, 0.05)",
      offsetX: 0,
      offsetY: 0,
  },
  title: {
    style: {
        color: '#adb5be',
        fontSize: '5px',
        fontFamily: 'poppins, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-label',
    },
},
},
}
statistics=[
  { header: 'Total Visitors', field: 'visitors' },
  { header: 'Sessions Duration', field: 'sessionduraion' },
  { header: 'New Visitors', field: 'newvisitors' },
  { header: 'Returning Visitors', field: 'returningvisitors' },
  { header: 'Bounce Rate', field: 'bouncerate' },
  { header: 'Conversion Rate', field: 'conversionrate' },
  { header: 'Average Session Duration', field: 'avgsessionduration' },
  { header: 'Top Referral Sources', field: 'toprefferalsource' },

]
visitors=[
  {
    total:"32,190",
    duration:"15m 30s",
    visitors:"12,345",
    rate:"19,845",
    bouncerate:"45%",
    conversionrate:"3.5%",
    avgduration:"3m 45s",
    sources:"Google, Facebook",
    bg1:"table-success",
    bg5:"table-danger"
  },
  {
    total:"28,674",
    duration:"13m 25s",
    visitors:"10,432",
    rate:"18,242",
    bouncerate:"47%",
    conversionrate:"3.8%",
    avgduration:"3m 10s",
    sources:"Twitter, LinkedIn",
    bg6:"table-warning"
  },
  {
    total:"35,789",
    duration:"16m 10s",
    visitors:"13,567",
    rate:"22,222",
    bouncerate:"43%",
    conversionrate:"3.2%",
    avgduration:"4m 05s",
    sources:"Bing, YouTube",
    bg2:"table-warning",
    bg4:"table-success",
    bg7:"table-success"
  },
  {
    total:"30,234",
    duration:"14m 50s",
    visitors:"11,678",
    rate:"18,556",
    bouncerate:"46%",
    conversionrate:"3.6%",
    avgduration:"3m 30s",
    sources:"Instagram, Reddit",
  },
  {
    total:"33,456",
    duration:"15m 45s",
    visitors:"12,890",
    rate:"20,566",
    bouncerate:"44%",
    conversionrate:"3.4%",
    avgduration:"3m 55s",
    sources:"Yahoo, Pinterest",
    bg8:"table-success",
    bg1:"table-danger",

  },
  
]
activities=[
  {bg:"primary",icon:"timer-2-line",title:"Avg. Session Duration",status:"Increased by",bg1:"success",percent:"5.2%",arrow:"up",duration:"2m 35s"},
  {bg:"primarytint1color",icon:"user-add-line fs-18",title:"New Users",status:"Increased by",bg1:"success",percent:"10.3%",arrow:"up",duration:"5,621"},
  {bg:"primarytint2color",icon:"eye-line fs-18",title:"Page Views",status:"Decreased by",bg1:"danger",percent:"2.15%",arrow:"down",duration:"45,890"},
  {bg:"primarytint3color",icon:"line-chart-line fs-18",title:"Conversion Rate",status:"Increased by",bg1:"success",percent:"1.5%",arrow:"up",duration:"4.8%"},
  {bg:"secondary",icon:"arrow-down-s-line fs-18",title:"Bounce Rate",status:"Decreased by",bg1:"danger",percent:"3.8%",arrow:"down",duration:"32.5%"},
  {bg:"warning",icon:"user-line fs-18",title:"Returning Visitors",status:"Increased by",bg1:"success",percent:"7.2%",arrow:"up",duration:"8,932"},
  {bg:"info",class:"mb-0",icon:"money-dollar-circle-line fs-18",title:"Avg. Order Value",status:"Decreased by",bg1:"danger",percent:"2.7%",arrow:"down",duration:"$56.78"},
]
countries = [
  {name: 'United States',flag: './assets/images/flags/us_flag.jpg',percentage: '5.1%',percentageClass: 'text-success', changeDirection: 'up',liClass:"mb-4",visitors: '26,890'},
  {name: 'Germany',flag: './assets/images/flags/germany_flag.jpg',percentage: '1.3%',percentageClass: 'text-success',changeDirection: 'up',liClass:"mb-4",    visitors: '12,345'  },
  {name: 'Spain',flag: './assets/images/flags/spain_flag.jpg',percentage: '2.7%',percentageClass: 'text-success',changeDirection: 'up',liClass:"mb-4",    visitors: '18,765'  },
  {name: 'China',flag: './assets/images/flags/china_flag.jpg',percentage: '1.0%',percentageClass: 'text-danger',changeDirection: 'down',liClass:"mb-4",    visitors: '9,874'  },
  {name: 'Mexico',flag: './assets/images/flags/mexico_flag.jpg',percentage: '2.7%',percentageClass: 'text-success',changeDirection: 'up',liClass:"mb-4",    visitors: '21,456'  },
  {name: 'Canada',flag: './assets/images/flags/canada_flag.jpg',percentage: '2.1%',percentageClass: 'text-success',changeDirection: 'up',liClass:"mb-4",    visitors: '28,976'  },
  {name: 'Argentina',flag: './assets/images/flags/argentina_flag.jpg',percentage: '5.4%',percentageClass: 'text-success',changeDirection: 'up',liClass:"mb-4",    visitors: '21,456'  },
  {name: 'Singapore',flag: './assets/images/flags/singapore_flag.jpg',percentage: '0.7%',percentageClass: 'text-success',changeDirection: 'up',liClass:"mb-4",    visitors: '16,789'  },
  {name: 'Italy',flag: './assets/images/flags/italy_flag.jpg',percentage: '0.3%',percentageClass: 'text-danger',changeDirection: 'down',liClass:"mb-2",    visitors: '21,456'}
];
progressItems = [
  {path: 'main/landing-page/home',liClass:"mb-3",visits: '2,345 Visits',progress: 50,progressBarClass: 'primary'},
  {path: 'main/landing-page/products/popular-category',liClass:"mb-3",visits: '1,987 Visits',progress: 30,progressBarClass: 'primarytint1color '},
  {path: 'main/landing-page/blog/latest-article',liClass:"mb-3",visits: '1,532 Visits',progress: 20,progressBarClass: 'primarytint2color '},
  {path: 'main/landing-page/about-us/team-page',liClass:"mb-3",visits: '1,254 Visits',progress: 40,progressBarClass: 'primarytint3color '},
  {path: 'main/landing-page/about-us/profile',liClass:"mb-3",visits: '1,103 Visits',progress: 40,progressBarClass: 'primarytint3color '},
  {path: 'main/landing-page/contact/support',liClass:"mb-0",visits: '985 Visits',progress: 60,progressBarClass: 'info'}
];
}
