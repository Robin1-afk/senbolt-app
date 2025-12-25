import { Component } from '@angular/core';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkProjectCardComponent } from '../../../../@spk/reusable-dashboard/spk-project-card/spk-project-card.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SharedModule,SpkReusableTablesComponent,SpkProjectCardComponent,SpkDropdownsComponent,SpkApexchartsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    active=1;
chartOptions:any={
    series: [
        {
          data: [12, 14, 18, 47, 42, 15, 47, 75, 65, 19, 14, 50],
        },
      ],
      chart: {
        type: "bar",
        width: 70,
        height: 40,
        sparkline: {
          enabled: true,
        },
        zoom:{
          enabled:false
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "80%",
          borderRadius: "2",
        },
      },
      stroke: {
        curve: "smooth",
        width: "2",
      },
      labels:[1,2,3,4,5,6,7,8,9,10,11,12],
      colors: ["rgb(255, 93, 159)"],
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
        data: [12, 14, 18, 47, 42, 15, 47, 75, 65, 19, 14, 50],
      },
    ],
    chart: {
      type: "bar",
      width: 70,
      height: 40,
      sparkline: {
        enabled: true,
      },
      zoom:{
        enabled:false
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
        borderRadius: "2",
      },
    },
    stroke: {
      curve: "smooth",
      width: "2",
    },
    labels:[1,2,3,4,5,6,7,8,9,10,11,12],
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
chartOptions2:any={
  series: [
      {
        data: [12, 14, 18, 47, 42, 15, 47, 75, 65, 19, 14, 50],
      },
    ],
    chart: {
      type: "bar",
      width: 70,
      height: 40,
      sparkline: {
        enabled: true,
      },
      zoom:{
        enabled:false
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
        borderRadius: "2",
      },
    },
    stroke: {
      curve: "smooth",
      width: "2",
    },
    labels:[1,2,3,4,5,6,7,8,9,10,11,12],
    colors: ["rgb(255, 93, 159)"],
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
        data: [12, 14, 18, 47, 42, 15, 47, 75, 65, 19, 14, 50],
      },
    ],
    chart: {
      type: "bar",
      width: 70,
      height: 40,
      sparkline: {
        enabled: true,
      },
      zoom:{
        enabled:false
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
        borderRadius: "2",
      },
    },
    stroke: {
      curve: "smooth",
      width: "2",
    },
    labels:[1,2,3,4,5,6,7,8,9,10,11,12],
    colors: ["rgb(255, 142, 111)"],
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
          name: "Projects",
          type: "area",
          data: [15, 28, 23, 23, 41, 58, 48, 50, 22, 31, 40, 45],
        },
        {
          name: "Revenue",
          type: "bar",
          data: [20, 29, 37, 35, 44, 43, 50, 20, 20, 45, 45, 52],
        },
      ],
      chart: {
        type: "area",
        height: 362,
        animations: {
          speed: 500,
        },
        toolbar: {
          show: false,
        },
        zoom:{
          enabled:false
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 8,
          left: 0,
          blur: 4,
          color: "#000",
          opacity: 0.08,
        },
      },
      colors: [ "rgb(227, 84, 212)","rgba(var(--primary-rgb))"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3,
      },
      fill: {
        type: ['gradient','solid'],
        gradient:{
            opacityFrom: 0.1,
            opacityTo: 0.2,
            shadeIntensity: 0.1,
        },
      },
      stroke: {
        curve: ["smooth","smooth"],
        width: [2, 1.5],
        dashArray: [4, 5],
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: function (value: any) {
            return value;
          },
        },
      },
      legend: {
      	show: true,
		position: "bottom",
		fontSize: '12px',
		fontFamily: 'Poppins',
		markers: {
		  size: 5,
		  shape: undefined,
		  border:'none',
		  strokeWidth: 0
	  },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
          borderRadius: 3,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
        },
      },
}
chartOptions5:any={
  series: [86, 80, 60],
  chart: {
    height: 260,
    type: 'radialBar',
    zoom:{
      enabled:false
    },
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
          offsetY: 0
        },
        value: {
          fontSize: '14px',
          offsetY: 5
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function () {
            return 249
          }
        }
      }
    }
  },
  stroke: {
    lineCap: 'round'
  },
  grid: {
      padding: {
          bottom: -10,
          top: -10
      }
  },
  colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 0.5)", "rgba(255, 93, 159, 0.4)"],
  labels: ['New Projects', 'Completed', 'Pending'],
}
chartOptions6:any={
    series: [{
        name: 'This Week',
        data: [44, 42, 57, 86, 58, 55, 70],
    }, {
        name: 'Last Week',
        data: [34, 22, 42, 56, 21, 86, 60],
    }],
    chart: {
        type: 'line',
        height: 335,
        toolbar: {
          show: false,
        },
        zoom:{
          enabled:false
        },
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    stroke: {
        width: 2,
        curve: 'smooth',
        dashArray: [0, 3],
    },
    colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212)"],
    plotOptions: {
        bar: {
            borderRadius: 2,
            colors: {
                ranges: [{
                    from: -100,
                    to: -46,
                    color: '#ebeff5'
                }, {
                    from: -45,
                    to: 0,
                    color: '#ebeff5'
                }]
            },
            columnWidth: '50%',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 1,
                left: 1,
                blur: 2,
                opacity: 0.5,
            }
        }
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: 'top',
        markers:{
          size:5
        }
    },
    tooltip: {
        enabled: true,
        theme: "dark",
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
           
        }
    },
    xaxis: {
        type: 'day',
        categories: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
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
summaryColumns=[
  { header: 'S.No', field: 'sno' },
  { header: 'Poject Title', field: 'Poject Title' },
  { header: 'Tasks', field: 'Tasks' },
  { header: 'Progress', field: 'progress' },
  { header: 'Assigned Team', field: 'Assigned Team' },
  { header: 'Status', field: 'Status' },
  { header: 'Due Date', field: 'Due Date' },
  { header: 'Actions', field: 'actions' },

]
teamColumns=[
  { header: 'Name', field: 'name' },
  { header: 'Works', field: 'Works' },
  { header: 'Status', field: 'Status' },
  { header: 'Tasks', field: 'Tasks' },
  { header: 'Actions', field: 'actions' },
]
teams=[
  {
    src:"./assets/images/faces/2.jpg",
    name:"Richard Dom",
    role:"Team Leader",
    works:"457",
    bg:"success",
    status:"Online",
    tasks:"564",
    tasks1:"1145"
  },
  {
    src:"./assets/images/faces/11.jpg",
    name:"Jennifer Tab",
    role:"Project Manager",
    works:"965",
     bg:"success",
    status:"Online",
    tasks:"1,754",
    tasks1:"2145"
  },
  {
    src:"./assets/images/faces/3.jpg",
    name:"Nikki Jey",
    role:"UI Developer",
    works:"647",
     bg:"danger",
    status:"Offline",
    tasks:"631",
    tasks1:"1145"
  },
  {
    src:"./assets/images/faces/21.jpg",
    name:"Arifa Zed",
    role:"Web Developer",
    works:"983",
     bg:"success",
    status:"Online",
    tasks:"502",
    tasks1:"1236"
  },
  {
    src:"./assets/images/faces/4.jpg",
    name:"Xiong Yu",
    role:"Team Member",
    works:"631",
     bg:"success",
    status:"Online",
    tasks:"360",
    tasks1:"457"
  },
  {
    src:"./assets/images/faces/11.jpg",
    name:"Emanuel Gen",
    role:"Project Manager",
    works:"478",
    bg:"danger",
   status:"Offline",
    tasks:"558",
    tasks1:"698"
  }
]
remove(sno:number){
	const data = this.summaries.filter((x: { sno: number }) => x.sno !== sno);
	this.summaries = data;
  }
summaries=[
  {
    sno:1,
    title:'Home Page',
    tasks:"210",
    tasks1:"234",
    percentage:"35%",
    images:[
      "./assets/images/faces/8.jpg",
      "./assets/images/faces/4.jpg",
      "./assets/images/faces/6.jpg",
      "./assets/images/faces/7.jpg"
    ],
    bg:"primary",
    status:"In Progress",
    date:"14-05-2024",
    progress:"35"
  },
  {
    sno:2,
    title:'Landing Design',
    tasks:"162",
    tasks1:"185",
    percentage:"80%",
    images:[
      "./assets/images/faces/8.jpg",
      "./assets/images/faces/4.jpg",
      "./assets/images/faces/6.jpg",
      "./assets/images/faces/7.jpg",
      "./assets/images/faces/8.jpg"
    ],
    bg:"primary",
    status:"In Progress",
    date:"20-05-2024",
    progress:"80"
  },
  {
    sno:3,
    title:'New Template Design',
    tasks:"10",
    tasks1:"100",
    percentage:"10%",
    images:[
      "./assets/images/faces/8.jpg",
      "./assets/images/faces/4.jpg",
      "./assets/images/faces/16.jpg",
    ],
    bg:"warning",
    status:"Pending",
    date:"29-05-2023",
    progress:"10"
  },
  {
    sno:4,
    title:'HR Management Design',
    tasks:"48",
    tasks1:"52",
    percentage:"63%",
    images:[
      "./assets/images/faces/8.jpg",
      "./assets/images/faces/14.jpg",
      "./assets/images/faces/4.jpg",
      "./assets/images/faces/16.jpg",
    ],
    bg:"primary",
    status:"In Progress",
    date:"18-05-2023",
    team:"+2",
    progress:"63"
  },
  {
    sno:5,
    title:'Designing New Template',
    tasks:"185",
    tasks1:"192",
    percentage:"100%",
    images:[
      "./assets/images/faces/8.jpg",
      "./assets/images/faces/14.jpg",
      "./assets/images/faces/4.jpg",
      "./assets/images/faces/16.jpg",
    ],
    bg:"success",
    status:"Completed",
    date:"11-05-2023",
    team:"+2",
    progress:"100"
  },
  {
    sno:6,
    title:'Documentation Project',
    tasks:"25",
    tasks1:"72",
    percentage:"50%",
    images:[
      "./assets/images/faces/8.jpg",
      "./assets/images/faces/14.jpg",
      "./assets/images/faces/4.jpg",
      "./assets/images/faces/16.jpg",
      "./assets/images/faces/21.jpg"
    ],
    bg:"primary",
    status:"In Progress",
    date:"18-05-2023",
    progress:"50"
  }
]
team: any;
cardData = [
  {
    title: 'New Projects',
    count: '432',
    percentage: '-5.20%',
    iconClass: 'ri-pages-line text-[1rem]',
    badgeClass: 'danger',
    avatarClass: 'bg-primary svg-white',
    chartOptions: this.chartOptions,
    chartId: 'Projects-2',
  },
  {
    title: 'Completed',
    count: '122',
    percentage: '+7.20%',
    iconClass: 'ri-check-double-line text-[1rem]',
    badgeClass: 'success',
    avatarClass: 'bg-primarytint1color svg-white',
    chartOptions: this.chartOptions1,
    chartId: 'Projects-1',
  },
  {
    title: 'Ongoing Projects',
    count: '1,265',
    percentage: '-5.20%',
    iconClass: 'ri-loop-left-fill text-[1rem]',
    badgeClass: 'danger',
    avatarClass: 'bg-primarytint2color svg-white',
    chartOptions: this.chartOptions2,
    chartId: 'Projects-3',
  },
  {
    title: 'Pending Projects',
    count: '1,265',
    percentage: '+5.20%',
    iconClass: 'ri-time-line text-[1rem]',
    badgeClass: 'success',
    avatarClass: 'bg-primarytint3color svg-white',
    chartOptions: this.chartOptions3,
    chartId: 'Projects-4',
  },
];
}
