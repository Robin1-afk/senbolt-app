import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkApexchartsComponent } from '../../../../../@spk/spk-apexcharts/apexcharts.component';
import { SpkCryptoMarketcapCardComponent } from '../../../../../@spk/reusable-apps/spk-crypto-marketcap-card/spk-crypto-marketcap-card.component';

@Component({
  selector: 'app-market-cap',
  standalone: true,
  imports: [SharedModule,FormsModule,SpkDropdownsComponent,SpkReusableTablesComponent,SpkApexchartsComponent,SpkCryptoMarketcapCardComponent],
  templateUrl: './market-cap.component.html',
  styleUrl: './market-cap.component.scss'
})
export class MarketCapComponent {
  chartOptions:any= {
    chart: {
      type: 'area',
      height: 40,
      width: 163,
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
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [{
      name: 'Value',
      data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      axisBorder: {
        show: false
      },
    },
   
    colors: ['rgb(33, 206, 158)'],
  
  }
  chartOptions1:any= {
    chart: {
      type: 'area',
      height: 40,
      width: 163,
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
      curve: 'straight',
      lineCap: 'butt',
      colors: undefined,
      width: 1,
      dashArray: 3,
    },
    fill: {
      gradient: {
        enabled: true
      }
    },
    series: [{
      name: 'Value',
      data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    yaxis: {
      min: 0,
      show: false,
      axisBorder: {
        show: false
      },
    },
    xaxis: {
      axisBorder: {
        show: false
      },
    },
   
    colors: ['rgb(227, 84, 212)'],
  
  }
  chartOptions2:any = {
    chart: {
      type: "bar",
      height: 30,
      width: "130",
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 0,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
          65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
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
    colors: ["rgba(227, 84, 212, 0.4)"],
  };
  chartOptions3:any = {
    chart: {
      type: "bar",
      height: 30,
      width: "130",
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 0,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
          65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
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
    colors: ["rgba(33, 206, 158, 0.4)"],
  };
  chartOptions4:any = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    yaxis1: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(10, 145, 81)"],
  };
  chartOptions5:any= {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    yaxis1: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(10, 145, 81)"],
  };
  chartOptions6:any= {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    yaxis1: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(237, 78, 131)"],
  };
  chartOptions7:any = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    yaxis1: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(10, 145, 81)"],
  };
  chartOptions8:any= {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    yaxis1: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(10, 145, 81)"],
  };
  chartOptions9:any = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    yaxis1: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(237, 78, 131)"],
  };
  chartOptions10:any = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    yaxis1: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(237, 78, 131)"],
  };
  chartOptions11:any = {
    chart: {
      type: "line",
      height: 30,
      width: 120,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.1,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 1,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Value",
        data: [
          0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
          35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
          61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
          46,
        ],
      },
    ],
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
    yaxis1: {
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: ["rgb(10, 145, 81)"],
  };
  marketcapColumn=[
    {header:"",field:""},
    {header:"#",field:"#"},
    {header:"Crypto Name",field:"Crypto Name"},
    {header:"MarketCap",field:"MarketCap"},
    {header:"last 1Week",field:"last 1Week"},
    {header:"1h Change",field:"1h Change"},
    {header:"Price (USD)",field:"Price"},
    {header:"24h Change",field:"24h Change"},
    {header:"Volume (24h)",field:"Volume (24h)"},
    {header:"Circulating Supply",field:"Circulating Supply"},
    {header:"Trade",field:"Trade"},
  ]
  cryptoData=[
    {
      id:1,
      src:"./assets/images/crypto-currencies/square-color/Bitcoin.svg",
      coin:"Bitcoin (BTC)",
      price:"$582.23B",
      chartOptions:this.chartOptions2,
      percent:"0.483%",
      bg:"danger",
      arrow:'down',
      value:"$29,948.80",
      arrow1:"up",
      bg1:"success",
      percent1:"0.239%",
      volume:"$11.79B USD",
      supply:"19.43M of (21M)",
      progressWidth: { success: '88%', danger: '12%' },
      supplyClass:'mb-2'
    },
    {
      id:2,
      src:"./assets/images/crypto-currencies/square-color/Ethereum.svg",
      coin:"Etherium (ETH)",
      price:"$226.91B",
      chartOptions:this.chartOptions3,
      percent:"0.87%",
      arrow:"down",
      bg:"danger",
      value:"$1,895.96",
      bg1:"danger",
      arrow1:'down',
      percent1:"0.29%",
      volume:"$2.83B USD",
      supply:"120M",

    },
    {
      id:3,
      src:"./assets/images/crypto-currencies/square-color/Golem.svg",
      coin:"Golem (GLM)",
      price:"$202.07M",
      chartOptions:this.chartOptions3,
      percent:"0.61%",
      arrow:"up",
      bg:"success",
      value:"$1.201472",
      bg1:"danger",
      arrow1:'down',
      percent1:"34.96%",
      volume:"$2,112,645 USD",
      supply:" 1,000M",
      supplyClass:'mb-2',
      progressWidth: { success: '100%', danger: '' },
    },
    {
      id:4,
      src:"./assets/images/crypto-currencies/square-color/Dash.svg",
      coin:"Dash (DASH)",
      price:"$365.877M",
      chartOptions:this.chartOptions3,
      percent:"0.59%",
      arrow:"up",
      bg:"success",
      value:"$32.13",
      bg1:"success",
      arrow1:'up',
      percent1:"1.24%",
      volume:"$3.61M USD",
      supply:"11.37M of (18.92M)",
      progressWidth: { success: '56%', danger: '44%' },
      supplyClass:'mb-2'

    },
    {
      id:5,
      src:"./assets/images/crypto-currencies/square-color/Litecoin.svg",
      coin:"Litecoin (LTC)",
      price:"$6.80B",
      chartOptions:this.chartOptions2,
      percent:"0.90%",
      arrow:"down",
      bg:"danger",
      value:"$92.98",
      bg1:"success",
      arrow1:'up',
      percent1:"2.22%",
      volume:"$11.46B USD",
      supply:"73.40M",
      progressWidth: { success: '100%', danger: '' },
      supplyClass:'mb-2'

    },
    {
      id:6,
      src:"./assets/images/crypto-currencies/square-color/Ripple.svg",
      coin:"Ripple (XRP)",
      price:"$42.48B",
      chartOptions:this.chartOptions3,
      percent:"0.01%",
      arrow:"up",
      bg:"success",
      value:"$1.83",
      bg1:"success",
      arrow1:'up',
      percent1:"0.91%",
      volume:"$2.99B USD",
      supply:"52.54B of (100B)",
      progressWidth: { success: '52%', danger: '48%' },
      supplyClass:'mb-2'

    },
    {
      id:7,
      src:"./assets/images/crypto-currencies/square-color/EOS.svg",
      coin:"EOS",
      price:"$85.2M",
      chartOptions:this.chartOptions3,
      percent:"0.61%",
      arrow:"down",
      bg:"danger",
      value:"$1.765957",
      bg1:"danger",
      arrow1:'down',
      percent1:"20.65%",
      volume:"$116.91M USD",
      supply:"10.1B of (105B)",
      progressWidth: { success: '10%', danger: '90%' },
      supplyClass:'mb-2'

    },
    {
      id:8,
      src:"./assets/images/crypto-currencies/square-color/Bytecoin.svg",
      coin:"Bytecoin (BCN)",
      price:"$6.2M",
      chartOptions:this.chartOptions2,
      percent:"25.24%",
      arrow:"down",
      bg:"danger",
      value:"$1.00039",
      bg1:"danger",
      arrow1:'down',
      percent1:"27.12%",
      volume:"$6,184 USD",
      supply:"184.02B of (184.07B)",
      progressWidth: { success: '99%', danger: '1%' },
      supplyClass:'mb-2'

    },
    {
      id:9,
      src:"./assets/images/crypto-currencies/square-color/IOTA.svg",
      coin:"IOTA",
      price:"$510.429M",
      chartOptions:this.chartOptions2,
      percent:"1.08%",
      arrow:"down",
      bg:"danger",
      value:"$1.184992",
      bg1:"danger",
      arrow1:'down',
      percent1:"1.41%",
      volume:"$7.50M USD",
      supply:"2.78B",

    },
    {
      id:10,
      src:"./assets/images/crypto-currencies/square-color/Monero.svg",
      coin:"Monero",
      price:"$3.062B",
      chartOptions:this.chartOptions3,
      percent:"3.22%",
      arrow:"down",
      bg:"danger",
      value:"$165.76",
      bg1:"danger",
      arrow1:'down',
      percent1:"3.48%",
      volume:"$105.8M USD",
      supply:"18.15M",

    }
  ]
  cryptoCards = [
    {
      name: 'Bitcoin',
      symbol: 'BTC ',
      rank: '- Rank 1',
      price1: '$1.04',
      price: '$35,876.29',
      volumeChange: '(+2.33%)',
      marketCap: '$1.054B',
      chartOptions: this.chartOptions, // Add your chart options here
      imageUrl: './assets/images/crypto-currencies/square-color/Bitcoin.svg',
      marketCapChange:'+280.30',
      percent:'(0.96%)',
      arrow:"down",
      bg:"success",
      text:"Market Cap:",
      marketCapClass:'mb-0 fs-14'
    },
    {
      name: 'Dash',
      symbol: 'DASH',
      rank: '- Rank 50',
      price1: '$112.45',
      price: '$112.34',
      volumeChange: '(+1.25%)',
      marketCap: '$1.21B',
      chartOptions: this.chartOptions1, // Add your chart options here
      imageUrl: './assets/images/crypto-currencies/square-color/Dash.svg',
      marketCapChange:'-0.05',
      percent:'(-0.02%)',
      text:"Market Cap:",
      arrow:"down",
      bg:"danger",
      marketCapClass:'mb-0 fs-14'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      rank:'- Rank 2',
      price1: '$2.15K',
      price: '$2,135.67',
      volumeChange: '(+3.12%)',
      marketCap: '$250.87B',
      chartOptions: this.chartOptions, // Add your chart options here
      imageUrl: './assets/images/crypto-currencies/square-color/Ethereum.svg',
      marketCapChange:'+5.42',
      percent:'(2.21%)',
      arrow:"down",
      bg:"success",
      text:"Market Cap:",
      marketCapClass:'mb-0 fs-14'
    }
  ];
}
  