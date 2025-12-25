import { Component } from '@angular/core';
import { SpkSalesCardsComponent } from '../../../../@spk/reusable-dashboard/spk-sales-cards/spk-sales-cards.component';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [SharedModule,SpkSalesCardsComponent,SpkApexchartsComponent,SpkDropdownsComponent,SpkReusableTablesComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

  jobColumns=[
    { header: 'Job Title', field: 'job' },
    { header: 'Applicants', field: 'applications' },
    { header: 'Openings End', field: 'openings' },
    { header: 'Location', field: 'location' },
    { header: 'Action', field: 'action' },
]
applicationColumns=[
  { header: 'S.No', field: 'sno' },
  { header: 'Candidate', field: 'candidate' },
  { header: 'Category', field: 'category' },
  { header: 'Designation', field: 'designation' },
  { header: 'Mail', field: 'mail' },
  { header: 'Location', field: 'location' },
  { header: 'Date', field: 'date' },
  { header: 'Type', field: 'type' },
  { header: 'Action', field: 'action' },
]
applications=[
  {
    id:"01",
    src:"./assets/images/faces/4.jpg",
    name:"Mayor Kelly",
    category:"Manufacture",
    role:"Team Lead",
    mail:"mayorkelly@gmail.com",
    location:"Germany",
    date:"Sep 15 - Oct 12, 2023",
    bg:"primary",
    type:"Full Time",
    bg1:"primary"
  },
  {
    id:"02",
    src:"./assets/images/faces/15.jpg",
    name:"Andrew Garfield",
    category:"Development",
    role:"Sr.UI Developer",
    mail:"andrewgarfield@gmail.com",
    location:"Canada",
    date:"Apr 10 - Dec 12, 2023",
    bg:"primary",
    type:"Full Time",
    bg1:"secondary"

  },
  {
    id:"03",
    src:"./assets/images/faces/11.jpg",
    name:"Simon Cowel",
    category:"Service",
    role:"Sr.UI Developer",
    mail:"simoncowel234@gmail.com",
    location:"Europe",
    date:"Sep 15 - Oct 12, 2023",
    bg:"secondary",
    type:"Part Time",
    bg1:"secondary"
  },
  {
    id:"04",
    src:"./assets/images/faces/8.jpg",
    name:"Mirinda Hers",
    category:"Marketing",
    role:"Sales Executive",
    mail:"mirindahers@gmail.com",
    location:"USA",
    date:"Apr 10 - Dec 12, 2023",
    bg:"danger",
    type:"Hybrid",
    bg1:"danger"
  },
  {
    id:"05",
    src:"./assets/images/faces/16.jpg",
    name:"Andrew Garfield",
    category:"Development",
    role:"Sr.UI Developer",
    mail:"andrewgarfield@gmail.com",
    location:"London",
    date:"Jun 10 - Dec 12, 2023",
    bg:"success",
    type:"Freelancer",
    bg1:"secondary"
  }
]
chartOptions:any={
	series: [
        {
          name: "Applications",
          data: [30, 25, 36, 30, 45, 35, 64],
        },
        {
          name: "Shortlisted",
          data: [33, 21, 32, 37, 23, 32, 47],
        },
        {
          name: "Rejected",
          data: [30, 25, 36, 30, 45, 35, 64],
        },
        {
          name: "On-Hold",
          data: [44, 55, 41, 42, 22, 43, 21],
        },
      ],
      chart: {
        type: "bar",
        height: 325,
        fontFamily: "Montserrat, sans-serif",
        foreColor: "#d4d7d9",
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: "top",
        fontSize: '12px',
        fontFamily: 'Poppins',
        markers: {
          size: 6,
          shape: undefined,
          border:'none',
          strokeWidth: 0
      },
    },
      tooltip: {
        enabled: true,
        theme: "dark",
        shared: true,
        intersect: false,
      },
      
      colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 0.5)", "rgba(255, 93, 159, .4)", "rgba(255, 142, 111, .3)"],
      labels: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      plotOptions: {
        bar: {
          columnWidth: "25%",
          borderRadius: 5,
        },
      },
      xaxis: {
        show: false,
  
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        }
      }
}
chartOptions1:any={
  series: [1754, 634],
  labels: ["Male", "Female"],
  chart: {
      height: 200,
      type: 'donut',
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
      width: 1,
      dashArray: 0,
  },
  plotOptions: {
      pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
          expandOnClick: false,
          donut: {
              size: '70%',
              background: 'transparent',
              labels: {
                  show: true,
                  name: {
                      show: true,
                      fontSize: '20px',
                      color: '#495057',
                      offsetY: -25
                  },
                  value: {
                      show: true,
                      fontSize: '12px',
                      color: undefined,
                      offsetY: -25,
                      formatter: function (val:any) {
                          return val + "%"
                      }
                  },
                  total: {
                      show: true,
                      showAlways: true,
                      label: 'Total',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#495057',
                  }

              }
          }
      }
  },
  grid: {
      padding: {
          bottom: -100
      }
  },
  colors: ["rgba(var(--primary-rgb))", "rgb(227, 84, 212)"],
}
jobs=[
  {
   icon:"android-line",
    title:"Sr. Mobile App Developer",
    posted:"1 day",
    applicants:"56",
    date:"27 May 2024",
    location:"Georgia, XY",
    bg:"primary"
  },
  {
    icon:"database-2-line",
    bg:"secondary",
     title:"Data Scientist Trainee",
     posted:"1 day",
     applicants:"784",
     date:"03 Jun 2024",
     location:"Siberia, PQ"
   },
   {
    icon:"reactjs-line",
    bg:"info",
     title:"React Developer",
     posted:"1 day",
     applicants:"421",
     date:"18 Jun 2024",
     location:"Italy, Rs"
   },
   {
    icon:"amazon-line",
    bg:"success",
     title:"AWS Engineer",
     posted:"1 day",
     applicants:"257",
     date:"15 Jun 2024",
     location:"Georgia, XY"
   },
   {
    icon:"layout-masonry-line",
    bg:"warning",
     title:"Ui Developer",
     posted:"2 days",
     applicants:"87",
     date:"20 Jun 2024",
     location:"Canada, UK"
   },
   {
    icon:"angularjs-line",
    bg:"danger",
     title:"Angular Developer",
     posted:"3 days",
     applicants:"06",
     date:"23 Jun 2024",
     location:"Germany, US"
   }
]
remove(date:string){
	const data = this.jobs.filter((x: { date: string }) => x.date !== date);
	this.jobs = data;
  }
  cardData:any=[
    {
       id:1,
      customClass:"items-center gap-3",
      customClass1:"flex-fill",
      svgClass:"avatar avatar-lg bg-primary/10 svg-primary avatar-rounded border-[3px] flex-shrink-0 border-primary/50",
      valueClass:"mb-1",
      title:"JOB APPLICATIONS",
      value:"47,784",
      graph:"Increased",
      color:"success",
      percentage:"1.6%",
      percentageIcon:"ti ti-arrow-narrow-up fs-16",
      bg:"primary",
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,80l-96,56L32,80l96-56Z" opacity="0.2"></path><path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path></svg>`
    },
    {
      id:2,
      customClass:"items-center  gap-3",
      customClass1:"flex-fill",
      valueClass:"mb-1",
      svgClass:"avatar avatar-lg bg-primarytint1color/10 svg-primarytint1color avatar-rounded border-[3px] flex-shrink-0 border-primarytint1color/50",
      title:"INTERVIEW SCHEDULE",
      value:"5,358",
      graph:"Decreased",
      color:"danger",
      percentage:"3.1%",
      percentageIcon:"ti ti-arrow-narrow-down fs-16",
      bg:"primarytint1color ",
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path></svg>`
    },
    {
      id:3,
      customClass:"items-center  gap-3",
      customClass1:"flex-fill",
      valueClass:"mb-1",
      svgClass:"avatar avatar-lg bg-primarytint2color/10 svg-primarytint2color avatar-rounded border-[3px] flex-shrink-0 border-primarytint2color/50",
      title:"SHORTLISTED",
      value:"784",
      graph:"Increased",
      color:"success",
      percentage:"1.3%",
      percentageIcon:"ti ti-arrow-narrow-up fs-16",
      bg:"primarytint2color ",
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M120,104A40,40,0,1,1,80,64,40,40,0,0,1,120,104Z" opacity="0.2"></path><path d="M152,80a8,8,0,0,1,8-8h88a8,8,0,0,1,0,16H160A8,8,0,0,1,152,80Zm96,40H160a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm0,48H184a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm-96.25,22a8,8,0,0,1-5.76,9.74,7.55,7.55,0,0,1-2,.26,8,8,0,0,1-7.75-6c-6.16-23.94-30.34-42-56.25-42s-50.09,18.05-56.25,42a8,8,0,0,1-15.5-4c5.59-21.71,21.84-39.29,42.46-48a48,48,0,1,1,58.58,0C129.91,150.71,146.16,168.29,151.75,190ZM80,136a32,32,0,1,0-32-32A32,32,0,0,0,80,136Z"></path></svg>`
    },
    {
      id:4,
      customClass:"items-center  gap-3",
      customClass1:"flex-fill",
      valueClass:"mb-1",
      svgClass:"avatar avatar-lg bg-primarytint3color/10 svg-primarytint3color avatar-rounded border-[3px] flex-shrink-0 border-primarytint3color/50",
      title:"REJECTED APPLICATIONS",
      value:"47,784",
      graph:"Decreased",
      color:"danger",
      percentage:"0.3%",
      percentageIcon:"ti ti-arrow-narrow-down fs-16",
      bg:"primarytint3color ",
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>`
    },
    {
      id:5,
      customClass:"items-center  gap-3",
      customClass1:"flex-fill",
      valueClass:"mb-1",
      svgClass:"avatar avatar-lg bg-secondary/10 svg-secondary avatar-rounded border-[3px] flex-shrink-0 border-secondary/50",
      title:"ON-HOLD APPLICATIONS",
      value:"11,574",
      graph:"Increased",
      color:"success",
      percentage:"0.1%",
      percentageIcon:"ti ti-arrow-narrow-up fs-16",
      bg:"primary",
      svg:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M159.46,53l-17.78,83H114.32L96.54,53A24,24,0,0,1,120,24h16A24,24,0,0,1,159.46,53Z" opacity="0.2"></path><path d="M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm0-80v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16h56.43L88.72,54.71A32,32,0,0,1,120,16h16a32,32,0,0,1,31.29,38.71L151.57,128H208A16,16,0,0,1,224,144ZM120.79,128h14.42l16.43-76.65A16,16,0,0,0,136,32H120a16,16,0,0,0-15.65,19.35ZM208,184V144H48v40H208Z"></path></svg>`
    },
  ]
}
