import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkHrmCardComponent } from '../../../../@spk/reusable-dashboard/spk-hrm-card/spk-hrm-card.component';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';


@Component({
  selector: 'app-hrm',
  standalone: true,
  imports: [SharedModule,SpkHrmCardComponent,SpkApexchartsComponent,SpkDropdownsComponent,SpkReusableTablesComponent],
  templateUrl: './hrm.component.html',
  styleUrl: './hrm.component.scss'
})
export class HrmComponent {
chartOptions:any={
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    zoom:{
      enabled:false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "rgba(var(--primary-rgb))",
      opacity: 0.4,
    },
  },
  stroke: {
    curve: 'straight',
    width: "1",
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(var(--primary-rgb),0.1)',
            opacity: 0.3
          },
          {
            offset: 60,
            color: 'rgba(var(--primary-rgb),0.1)',
            opacity: 0.3
          }
        ],
      ]
    },
  },
  colors: ["rgba(var(--primary-rgb))"],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
}
chartOptions1:any={
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    zoom:{
      enabled:false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "rgba(var(--primary-rgb))",
      opacity: 0.4,
    },
  },
  stroke: {
    curve: 'straight',
    width: "1",
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(227, 84, 212, 0.1)',
            opacity: 0.3
          },
          {
            offset: 60,
            color: 'rgba(227, 84, 212, 0.1)',
            opacity: 0.3
          }
        ],
      ]
    },
  },
  colors: ["rgb(227, 84, 212)"],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
}
chartOptions2:any={
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    zoom:{
      enabled:false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "rgb(255, 93, 159)",
      opacity: 0.4,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(255, 93, 159, 0.1)',
            opacity: 0.3
          },
          {
            offset: 60,
            color: 'rgba(255, 93, 159, 0.1)',
            opacity: 0.3
          }
        ],
      ]
    },
  },
  colors: ["rgb(255, 93, 159)"],
  stroke: {
    curve: 'straight',
    width: "1",
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
}
chartOptions3:any={
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    zoom:{
      enabled:false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "rgb(255, 142, 111)",
      opacity: 0.4,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: 'rgba(255, 142, 111, 0.1)',
            opacity: 0.3
          },
          {
            offset: 60,
            color: 'rgba(255, 142, 111, 0.1)',
            opacity: 0.3
          }
        ],
      ]
    },
  },
  colors: ["rgb(255, 142, 111)"],
  stroke: {
    curve: 'straight',
    width: "1",
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
}
chartOptions4:any={
  series: [
    {
      type: "bar",
      name: "New Projects",
      data: [45, 30, 49, 45, 36, 42, 30, 35, 35, 54, 29, 36],
    },
    {
      type: "bar",
      name: "Inprogress Projects",
      data: [30, 35, 25, 20, 35, 25, 36, 54, 36, 29, 49, 42],
    },
    {
    type: "line",
    name: "Completed Projects",
      data: [15, 30, 19, 30, 34, 25, 36, 45, 36, 29, 49, 42],
    },
    {
      type: "area",
      name: "Onhold Projects",
      data: [15, 20, 20, 15, 25, 25, 15, 15, 45, 30, 45, 20],
    },
  ],
  chart: {
    type: "bar",
    height: 336,
    toolbar: {
      show: false,
    },
    zoom:{
      enabled:false
    },
    dropShadow: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "33%",
      borderRadiusApplication: "around",
      borderRadiusWhenStacked: "all",
      borderRadius: 3,
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    width: [5, 5, 2, 2],
    dashArray: [0, 0, 3, 3],
  },
  grid: {
    borderColor: "#f5f4f4",
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true, // Ensure y-axis grids are shown
      },
    },
  },
  colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 0.4)", "rgba(255, 93, 159, 0.2)", "rgba(255, 142, 111, 0.1)"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
    position: "bottom",
  },
  yaxis: {
    title: {
      style: {
        color: "#adb5be",
        fontSize: "14px",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 600,
        cssClass: "apexcharts-yaxis-label",
      },
    },
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
    labels: {
      formatter: function (y: number) {
        return y.toFixed(0) + "";
      },
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
      show: false,
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
chartOptions5:any={
  series: [500, 350, 150],
  chart: {
  height: 250,
  type: 'polarArea',
  zoom:{
    enabled:false
  },
},
labels: ['Total','Male', 'Female'],
fill: {
  opacity: 0.9
},
stroke: {
  width: 1,
  colors: undefined
},
colors: ["rgba(var(--primary-rgb))", "rgb(227, 84, 212)", "rgb(255, 93, 159)"],
yaxis: {
  show: false
},
legend: {
  show: true,
  showForNullSeries: true,
  showForZeroSeries: true,
  position: 'bottom',
  horizontalAlign: 'center', 
  floating: false,
  fontSize: '12px',
  bottom:'12px',
  fontFamily: 'Helvetica, Arial',
  fontWeight: 400,
  inverseOrder: false,
  markers: {
      size: 5,
      shape: undefined,
      border:'none',
      strokeWidth: 0
  },
},
}
employees=[
  {
    number:"01",
    id:"#emp23520",
    src:"./assets/images/faces/1.jpg",
    name:"Richard Dom",
    position:"Team Leader",
    dept:"Backend",
    mail:"richard116@demo.com",
    bg:"success",
    status:"Active",
    contact:"+0987654321",
     salary:"$15,000"
  },
  {
    number:"02",
    id:"#emp23521",
    src:"./assets/images/faces/2.jpg",
    name:"Kakashra Sri",
    position:"Web Developer",
    dept:"Front End",
    mail:"Kakashra987@demo.com",
    bg:"success",
    status:"Active",
    contact:"+0986548761",
     salary:"$20,000"
  },
  {
    number:"03",
    id:"#emp23522",
    src:"./assets/images/faces/3.jpg",
    name:"Nikki Jey",
    position:"Project Manager",
    dept:"HR",
    mail:"Nikki654@demo.com",
    bg:"info",
    status:"On Leave",
    contact:"+0986548787",
     salary:"$25,000"
  },
  {
    number:"04",
    id:"#emp23523",
    src:"./assets/images/faces/4.jpg",
    name:"Sasukey Ahuhi",
    position:"Project Manager",
    dept:"HR",
    mail:"Sasukey986@demo.com",
    bg:"success",
    status:"Active",
    contact:"+0986548788",
     salary:"$30,000"
  },
  {
    number:"05",
    id:"#emp23524",
    src:"./assets/images/faces/5.jpg",
    name:"Xiong Yu",
    position:"UI Developer",
    dept:"Engineering",
    mail:"Xiongu987@demo.com",
    bg:"success",
    status:"Active",
    contact:"+0986548988",
     salary:"$35,000"
  },
  {
    number:"06",
    id:"#emp23525",
    src:"./assets/images/faces/6.jpg",
    name:"Arifa Zed",
    position:"Team Member",
    dept:"IT",
    mail:"Arifa432@demo.com",
    bg:"danger",
    status:"Resigned",
    contact:"+0986548985",
     salary:"$40,000"
  },
  {
    number:"07",
    id:"#emp23526",
    src:"./assets/images/faces/7.jpg",
    name:"Jennifer Tab",
    position:"Project Manager",
    dept:"Front End",
    mail:"Jennifer543@demo.com",
    bg:"success",
    status:"Active",
    contact:"+09865489987",
     salary:"$45,000"
  },
]
remove(id:string){
	const data = this.employees.filter((x: { id: string }) => x.id !== id);
	this.employees = data;
  }
  click(id:number){
    const data = this.leaves.filter((x: { id: number }) => x.id !== id);
    this.leaves = data;
    }
  employeeColumns=[
      { header: 'S.No', field: 'sno' },
      { header: 'Employee Id', field: 'empid' },
      { header: 'Employee Name', field: 'empname' },
      { header: 'Position', field: 'position' },
      { header: 'Department', field: 'dept' },
      { header: 'Email', field: 'email' },
      { header: 'Status', field: 'status' },
      { header: 'Contact', field: 'contact' },
      { header: 'Salary', field: 'salary' },
      { header: 'Action', field: 'action' },
  ]
  leaveColumns=[
    { header: 'Employee', field: 'emp' },
    { header: 'Type', field: 'type' },
    { header: 'Days', field: 'days' },
    { header: 'Status', field: 'status' },
    { header: 'Start Date', field: 'startdate' },
    { header: 'Action', field: 'action' },
]
leaves=[
  {
    id:1,
    src:"./assets/images/faces/2.jpg",
    employee:"Socrates Itumay",
    role:"Team Lead",
    type:"Sick",
    days:'2 Days',
    bg:"success",
    status:"Approved",
    date:"30-05-2024"
  },
  {
    id:2,
    src:"./assets/images/faces/4.jpg",
    employee:"Samantha Paul",
    role:"Sr.UI Developer",
    type:"Casual",
    days:'1 Day',
    bg:"warning",
    status:"Pending",
    date:"29-05-2024"
  },
  {
    id:3,
    src:"./assets/images/faces/14.jpg",
    employee:"Gray Noal",
    role:"Java Developer",
    type:"Paternity",
    days:'5 Days',
    bg:"success",
    status:"Approved",
    date:"28-05-2024"
  },
  {
    id:4,
    src:"./assets/images/faces/15.jpg",
    employee:"Gray Noal",
    role:"React Developer",
    type:"Personal",
    days:'2 Days',
    bg:"danger",
    status:"Rejected",
    date:"27-05-2024"
  },
  {
    id:5,
    src:"./assets/images/faces/8.jpg",
    employee:"Emiley Jackson",
    role:"Full Stack Developer",
    type:"Maternity",
    days:'2 Days',
    bg:"success",
    status:"Approved",
    date:"26-05-2024"
  },
  {
    id:6,
    src:"./assets/images/faces/16.jpg",
    employee:"Pope Johnson",
    role:"Jr.Java Developer",
    type:"Gifted",
    days:'2 Days',
    bg:"warning",
    status:"Pending",
    date:"25-05-2024"
  }
]
hrmData = [
  {
    title: 'Total Employees',
    value: '12,116',
    percentage: '2.5',
    subtitle: 'Increased from last year',
    badgeClass: 'bg-success',
    iconClass: 'ri-arrow-left-up-line',
    chartId: 'employees',
    chartOptions: this.chartOptions,
  },
  {
    title: 'Total Job Applied',
    value: '15,784',
    percentage: '1.5',
    subtitle: 'Decreased from last year',
    badgeClass: 'bg-danger',
    iconClass: 'ri-arrow-left-down-line',
    chartId: 'job-applied',
    chartOptions: this.chartOptions1,
  },
  {
    title: 'Total Compensation',
    value: '$56,784',
    percentage: '6.0',
    subtitle: 'Increased from last year',
    badgeClass: 'bg-success',
    iconClass: 'ri-arrow-left-up-line',
    chartId: 'total-payouts',
    chartOptions: this.chartOptions2
  },
  {
    title: 'Annual Compensation',
    value: '$6.8k',
    percentage: '6.0',
    subtitle: 'Increased from last year',
    badgeClass: 'bg-success',
    iconClass: 'ri-arrow-left-up-line',
    chartId: 'gross-salary',
    chartOptions: this.chartOptions3
  }
];
events = [
  {
    date: '02',
    day: 'Mon',
    description: 'You have an announcement - Ipsum Est Diam Eirmod',
    time: '10:00AM',
    badge: 'Announcement',
    badgeClass: 'primary',
    avatarClass: 'primary',
  },
  {
    date: '08',
    day: 'Tue',
    description: 'National holiday - Vero Jayanti',
    time: '',
    badge: 'Holiday',
    badgeClass: 'warning',
    avatarClass: 'primarytint1color',
  },
  {
    date: '12',
    day: 'Wed',
    description: 'John pup birthday - Team Member',
    time: '09:00AM',
    badge: 'Birthday',
    badgeClass: 'success',
    avatarClass: 'primarytint2color',
  },
  {
    date: '20',
    day: 'Thu',
    description: 'National Holiday - Dolore Ipsum',
    time: '',
    badge: 'Holiday',
    badgeClass: 'warning',
    avatarClass: 'primarytint3color',
  },
  {
    date: '12',
    day: 'Wed',
    description: 'Amet sed no dolor kasd - Et Dolores Tempor Erat',
    time: '04:00PM',
    badge: 'Announcement',
    badgeClass: 'primary',
    avatarClass: 'warning',
  },
  {
    date: '21',
    day: 'Fri',
    description: 'John pup birthday - Team Member',
    time: '09:00AM',
    badge: 'Birthday',
    badgeClass: 'success',
    avatarClass: 'secondary',
  },
];
schedule = [
  {
    name: 'Anurag Batiya',
    avatar: './assets/images/faces/15.jpg',
    date: '03 May',
    time: '9.00am-10.00am',
    bgClass: 'bg-danger',
  },
  {
    name: 'Project Meeting',
    avatar: './assets/images/faces/3.jpg',
    date: '04 May',
    time: '9.00am-10.00am',
    bgClass: 'bg-primary1',
  },
  {
    name: 'Team Meeting',
    avatar: './assets/images/faces/6.jpg',
    date: '05 May',
    time: '9.00am-10.00am',
    bgClass: 'bg-primarytint2color ',
  },
  {
    name: 'Client Meeting',
    avatar: './assets/images/faces/13.jpg',
    date: '06 May',
    time: '9.00am-10.00am',
    bgClass: 'bg-primarytint3color ',
  },
  {
    name: 'Client Meeting',
    avatar: './assets/images/faces/3.jpg',
    date: '06 May',
    time: '9.00am-10.00am',
    bgClass: 'bg-secondary',
  },
  {
    name: 'Team Meeting',
    avatar: './assets/images/faces/11.jpg',
    date: '05 May',
    time: '9.00am-10.00am',
    bgClass: 'bg-success',
  },
  {
    name: 'Project Meeting',
    avatar: './assets/images/faces/1.jpg',
    date: '04 May',
    time: '9.00am-10.00am',
    bgClass: 'bg-info',
  }
];
}
