import { Component } from '@angular/core';
import { SpkCrmCardComponent } from '../../../../@spk/reusable-dashboard/spk-crm-card/spk-crm-card.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [SharedModule,SpkCrmCardComponent,SpkApexchartsComponent,SpkDropdownsComponent,FormsModule,CommonModule,SpkReusableTablesComponent],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {
	active=1;
  chartOptions:any={
	series: [{
		name: 'Profit',
		data: [35, 36, 22, 44, 48, 37, 36, 26, 27, 33, 32, 36, 55, 53, 46, 40, 45, 38, 46, 37, 22, 34, 40, 44, 28, 33, 34, 36, 58, 56, 45, 34, 33, 22, 45, 50]
	}
	],
	chart: {
		type: 'area',
		height: 130,
		stacked: true,
		sparkline: {
			enabled: true
		},
		zoom:{
			enabled:false
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 7,
			left: 1,
			blur: 3,
			color: '#000',
			opacity: 0.2
		},
	},
	grid: {
		borderColor: '#f2f6f7',
	},
	colors: ["rgba(33, 206, 158, .55)"],
	dataLabels: {
		enabled: false,
	},
	plotOptions: {
		bar: {
			columnWidth: '40%'
		}
	},
	stroke: {
		curve: 'smooth',
		width: 2,
	},
	legend: {
		show: false,
		position: 'top',
		fontFamily: "Montserrat",
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.4,
			opacityTo: 0.1,
			stops: [0, 90, 100],
			colorStops: [
				[
					{
						offset: 0,
						color: "rgba(225,255,255,0.2)",
						opacity: 0.1
					},
					{
						offset: 75,
						color: "rgba(225,255,255,0.2)",
						opacity: 0.1
					},
					{
						offset: 100,
						color: "rgba(225,255,255,0.15)",
						opacity: 0.1
					}
				]
			]
		}
	},
	yaxis: {
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
			formatter: function (y: number) {
				return y.toFixed(0) + "";
			}
		}
	},
	xaxis: {
		type: 'month',
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
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
	},
	tooltip: {
		enabled: false,
	}
 
	
  }
  chartOptions1:any={
	series: [{
		name: 'Revenue',
		data: [14, 12, 17, 16, 18, 15, 18, 23, 28, 44, 40, 34, 34, 22, 37, 46, 21, 35, 40, 34, 46, 55, 62, 55, 23, 20, 22, 33, 35, 23, 15, 16, 17, 12, 14, 23],
	},
	],
	chart: {
		type: 'bar',
		height: 130,
		stacked: true,
		sparkline: {
			enabled: true,
		},
		zoom:{
			enabled:false
		},
		dropShadow: {
			enabled: true,
			enabledOnSeries: undefined,
			top: 3,
			left: 1,
			blur: 3,
			color: '#000',
			opacity: 0.1
		},
	},
	grid: {
		borderColor: '#f2f6f7',
	},
	stroke: {
		curve: 'smooth',
		width: 1.5,
	},
	colors: ["rgba(225,255,255,0.1)"],
	plotOptions: {
		bar: {
			columnWidth: '50%'
		}
	},
	dataLabels: {
		enabled: false,
	},
	legend: {
		show: false,
		position: 'top',
	},
	yaxis: {
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
			formatter: function (y: number) {
				return y.toFixed(0) + "";
			}
		}
	},
	xaxis: {
		type: 'month',
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
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
	},
	tooltip: {
		enabled: false,
	}
    
  }
  chartOptions2:any={
	series: [
		{
			name: "Total Income",
			data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210],
		},
		{
			name: "Total Revenue",
			data: [200, 530, 110, 130, 480, 520, 780, 435, 475, 738, 454, 480],
		},
		{
			name: "Average Profit",
			data: [740, 590, 320, 730, 340, 580, 890, 654, 410, 638, 230, 675],
		}
	],
	chart: {
		type: "area",
		height: 270,
		toolbar: {
			show: false
		},
		zoom:{
			enabled:false
		},
		dropShadow: {
			enabled: false,
			enabledOnSeries: undefined,
			top: 0,
			left: 0,
			blur: 4,
			color: '#000',
			opacity: 0.3
		}
	},
	colors: [
		"rgba(var(--primary-rgb))",
		"rgba(227, 84, 212, .4)",
		"rgba(255, 93, 159, .4)",
	],
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.4,
			opacityTo: 0.1,
			stops: [0, 90, 100],
			colorStops: [
				[
					{
						offset: 0,
						color: "rgba(var(--primary-rgb))",
						opacity: 0.3
					},
					{
						offset: 50,
						color: "rgba(var(--primary-rgb))",
						opacity: 0.2
					},
					{
						offset: 100,
						color: "rgba(var(--primary-rgb))",
						opacity: 0.0
					}
				],
				[
					{
						offset: 0,
						color: "rgba(227, 84, 212, .5)",
						opacity: 0.2
					},
					{
						offset: 50,
						color: "rgba(227, 84, 212, .5)",
						opacity: 0.2
					},
					{
						offset: 100,
						color: "rgba(227, 84, 212, .5)",
						opacity: 0.0
					}
				],
				[
					{
						offset: 0,
						color: "rgba(255, 93, 159, .6)",
						opacity: 0.08
					},
					{
						offset: 50,
						color: "rgba(255, 93, 159, .6)",
						opacity: 0.06
					},
					{
						offset: 100,
						color: "rgba(255, 93, 159, .6)",
						opacity: 0.0
					}
				],
			]
		}
	},
	dataLabels: {
		enabled: false,
	},
	legend: {
		show: true,
		position: "top",
		offsetX: 0,
		offsetY: 8,
		markers: {
			size:5,
			strokeWidth: 0,
			strokeColor: '#fff',
			fillColors: undefined,
			radius: 12,
			customHTML: undefined,
			onClick: undefined,
			offsetX: 0,
			offsetY: 0
		},
	},
	stroke: {
		curve: ['smooth', 'smooth', 'smooth'],
		width: [2, 0, 2],
		lineCap: 'round',
		dashArray: [0, 0, 4]
	},
	grid: {
		borderColor: '#f1f1f1',
		strokeDashArray: 3
	},
	yaxis: {
		axisBorder: {
			show: true,
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
	},
	xaxis: {
		type: "month",
		categories: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"sep",
			"oct",
			"nov",
			"dec",
		],
		axisBorder: {
			// show: false,
			color: "rgba(119, 119, 142, 0.05)",
			offsetX: 0,
			offsetY: 0,
		},
		axisTicks: {
			show: false,
			borderType: "solid",
			color: "rgba(119, 119, 142, 0.05)",
			width: 6,
			offsetX: 0,
			offsetY: 0,
		},
		labels: {
			rotate: -90,
		},
	},
  }
  chartOptions3:any={
	series: [
		{
		  name: "Hot Leads",
		  data: [80, 50, 100, 40, 100, 20],
		},
		{
		  name: "Warm Leads",
		  data: [20, 100, 20, 80, 20, 80],
		},
		{
		  name: "Cold Leads",
		  data: [60, 30, 60, 30, 60, 30],
		},
		{
		  name: "Qualified",
		  data: [5, 76, 78, 13, 43, 10],
		},
	  ],
	  chart: {
		height: 335,
		type: "radar",
		toolbar: {
		  show: false,
		},
		zoom:{
			enabled:false
		},
	  },
	  colors: ["rgba(var(--primary-rgb),0.9)", "rgba(227, 84, 212,0.5)", "rgba(255, 93, 159, .4)", "rgba(255, 142, 111, .5)"],
	  stroke: {
		width: 1,
	  },
	  fill: {
		opacity: 0.1,
	  },
	  markers: {
		size: 0,
	  },
	  legend: {
		fontSize: "12px",
		markers: {
		  size:4,
		  strokeWidth: 0,
		  strokeColor: "#fff",
		  fillColors: undefined,
		  radius: 5,
		  customHTML: undefined,
		  onClick: undefined,
		  offsetX: 0,
		  offsetY: 0,
		},
	  },
	  xaxis: {
		categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
		axisBorder: { show: false },
	  },
	  yaxis: {
		axisBorder: { show: false },
	  },
  }
  salesColumn=[
	{ header: 'S.No', field: 'sno' },
	{ header: 'Representative', field: 'representative' },
	{ header: 'Deals Closed', field: 'dealsclosed' },
	{ header: 'Leads', field: 'leads' },
	{ header: 'Rate (%)', field: 'rate' },
  ]
  sales=[
	{
		id:1,
		src:"./assets/images/faces/11.jpg",
		name:"John Joe",
		deals:"15",
		leads:"100",
		rate:"15.0",
		icon:"ri-arrow-up-s-fill ms-1 text-success align-middle text-lg"
	},
	{
		id:2,
		src:"./assets/images/faces/12.jpg",
		name:"Jane Smith",
		deals:"20",
		leads:"120",
		rate:"16.7",
		icon:"ri-arrow-down-s-fill ms-1 text-danger align-middle text-lg"
	},
	{
		id:3,
		src:"./assets/images/faces/15.jpg",
		name:"Michael Johnson",
		deals:"18",
		leads:"110",
		rate:"16.4",
		icon:"ri-arrow-up-s-fill ms-1 text-success align-middle text-lg"
	},
	{
		id:4,
		src:"./assets/images/faces/11.jpg",
		name:"Emily Davis",
		deals:"22",
		leads:"130",
		rate:"16.9",
		icon:"ri-arrow-up-s-fill ms-1 text-success align-middle text-lg"
	},
	{
		id:5,
		src:"./assets/images/faces/1.jpg",
		name:"Anna Garcia",
		deals:"17", 
		leads:"105",
		rate:"16.2",
		icon:"ri-arrow-down-s-fill ms-1 text-danger align-middle text-lg"
	},
	{
		id:6,
		src:"./assets/images/faces/4.jpg",
		name:"Kiara Nousin",
		deals:"20",
		leads:"35",
		rate:"57%",
		icon:"ri-arrow-up-s-fill ms-1 text-success align-middle text-lg"
	}
  ]
  leadsColumn=[
	{ header: 'S.No', field: 'sno' },
	{ header: 'Lead', field: 'lead' },
	{ header: 'Company Name', field: 'company' },
	{ header: 'Phone Number', field: 'phone' },
	{ header: 'Status', field: 'status' },
	{ header: 'Location', field: 'location' },
	{ header: 'Date', field: 'date' },
	{ header: 'Amount', field: 'amount' },
	{ header: 'Action', field: 'action' },
  ]
  leads=[
	{
		id:"01",
		src:"./assets/images/faces/2.jpg",
		name:'Sophia Sara',
		mail:"sophiasara@gmail.com",
		number:"+1(222) 547 6897",
		company:"Nova Solutions",
		status:"Won Lead",
		country:"Italy",
		date:"10-05-2024",
		amount:"$2457",
		bg:"success"
	},
	{
		id:"02",
		src:"./assets/images/faces/12.jpg",
		name:'Simon Leo',
		mail:"simonleo@gmail.com",
		number:"+1(222) 987 9874",
		company:"Global Innovations Ltd.",
		status:"New Lead",
		country:"Paris",
		date:"12-05-2024",
		amount:"$14009",
		bg:"primary"
	},
	{
		id:"03",
		src:"./assets/images/faces/14.jpg",
		name:'Hadley Kylin',
		mail:"hadleykylin@gmail.com",
		number:"+1(222) 654 6541",
		company:"Blue Enterprises",
		status:"New Lead",
		country:"Japan",
		date:"14-05-2024",
		amount:"$20000",
		bg:"primary"
	},
	{
		id:"04",
		src:"./assets/images/faces/4.jpg",
		name:'Isha Bella',
		mail:"ishabella@gmail.com",
		number:"+1(222) 321 1232",
		company:"Silver Techns.",
		status:"Lost Lead",
		country:"Califonia",
		date:"20-06-2024",
		amount:"$24000",
		bg:"danger"
	},
	{
		id:"05",
		src:"./assets/images/faces/3.jpg",
		name:'Red Siddique',
		mail:"redsiddique@gmail.com",
		number:"+1(222) 658 3256",
		company:"Omega Systems Ltd.",
		status:"New Lead",
		country:"Brazil",
		date:"03-06-2024",
		amount:"$35789",
		bg:"primary"
	}
  ]
  remove(id:string){
	const data = this.leads.filter((x: { id: string }) => x.id !== id);
	this.leads = data;
  }
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  cardData=[
  {title:"Total Leads",value:"1,1125",percent:"+2.5%",bg:"success",arrow:"up",iconBgClass:"primary",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>`},
  {title:"Conversion Rate",value:"15.8%",percent:"-2.5%",bg:"danger",arrow:"down",iconBgClass:"primarytint1color",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,61.64l-144,144a8,8,0,0,1-11.32-11.32l144-144a8,8,0,0,1,11.32,11.31ZM50.54,101.44a36,36,0,0,1,50.92-50.91h0a36,36,0,0,1-50.92,50.91ZM56,76A20,20,0,1,0,90.14,61.84h0A20,20,0,0,0,56,76ZM216,180a36,36,0,1,1-10.54-25.46h0A35.76,35.76,0,0,1,216,180Zm-16,0a20,20,0,1,0-5.86,14.14A19.87,19.87,0,0,0,200,180Z"></path></svg>`},
  {title:"Tasks Pending",value:"$3,132",percent:"+2.5%",bg:"success",arrow:"up",iconBgClass:"primarytint2color",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>`},
  {title:"Sales Pipeline",value:"$3,132",percent:"+2.5%",bg:"success",arrow:"up",iconBgClass:"primarytint3color",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path></svg>`},
  {title:"New Contacts",value:"968",percent:"-2.5%",bg:"danger",arrow:"down",iconBgClass:"secondary",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z"></path></svg>`},
]
metrics = [
 {title: 'Total Sales',value: "12,345",increase: '10% Increases',progress: 80, icon: 'bx-wallet-alt',iconColor: 'primary', liClass:"mb-4"},
 {title: 'Total Profit',value: "9,345",increase: '12% Increases',progress: 75, icon: 'bx-money-withdraw',iconColor: 'secondary',  liClass:"mb-4"},
 {title: 'Total Revenue',value: "9,345",increase: '11% Decrease',progress: 78, icon: 'bx-money-withdraw',iconColor: 'primarytint1color', liClass:"mb-4"},
 {title: 'Total loss',value: "11,345",increase: '11% Decrease',progress: 68, icon: 'bx-money-withdraw',iconColor: 'primarytint2color', liClass:"mb-2"}
];

  tasks= [
    {title: 'Conduct Product Demo Sessions',description: 'Nonumy erat ipsum ut ipsum',status: 'not started' },
    {title: 'Organize Training Session',description: 'Consetetur et amet dolor',status: 'not started'},
    {title: 'Analyze Market Trends',description: 'Nonumy erat ipsum ut ipsum',status: 'not started'},
    {title: 'Coordinate with Logistics Department',description: 'Nonumy erat ipsum ut ipsum',status: 'not started'},
    {title: 'Meeting On Updation',description: 'Nonumy erat ipsum ut ipsum',status: 'not started',},
    {title: 'Plan Social Media Content Calendar',description: 'Accusam aliquyam ea sea',status: 'not started',},
  ];
}
