import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [SharedModule,SpkApexchartsComponent,SpkDropdownsComponent,SpkReusableTablesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			500: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			770: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			1400: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},
		
		  },
	  });
	}
  chartOptions:any={
    chart: {
        height: 344,
        toolbar: {
          show: false,
        },
        zoom:{
          enabled :false
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 1,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.1,
        },
      },
      grid: {
        show: true,
        borderColor: "rgba(119, 119, 142, 0.1)",
        strokeDashArray: 4,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1.5, 2],
        curve: "straight",
        dashArray: [0, 5],
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        fontWeight: 600,
        fontSize: "11px",
        tooltipHoverFormatter: function (val: string, opts: { w: { globals: { series: { [x: string]: { [x: string]: string; }; }; }; }; seriesIndex: string | number; dataPointIndex: string | number; }) {
          return (
            val +
            " - " +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            ""
          );
        },
        labels: {
          colors: "#74767c",
        },
        markers: {
          width: 8,
          height: 8,
          strokeWidth: 0,
          radius: 12,
          offsetX: 0,
          offsetY: 0,
        },
      },
      series: [
        {
          name: "Last Year",
          data: [44, 55, 41, 67, 42, 22, 43, 21, 41, 56, 27, 43],
          type: "area",
        },
        {
          name: "This Year",
          data: [23, 11, 22, 35, 17, 28, 22, 37, 21, 44, 22, 30],
          type: "line",
        },
      ],
      fill: {
        opacity: 1,
        type: ['gradient','soild'],
        gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 0.01,
            opacityFrom: 0.02,
            opacityTo: 0.02,
        },
      },
      colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 0.5)"],
      yaxis: {
        title: {
          style: {
            color: "#adb5be",
            fontSize: "14px",
            fontFamily: "poppins, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-label",
          },
        },
        labels: {
          show: true,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      xaxis: {
        type: "day",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
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
          rotate: -90,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
  }
  chartOptions2:any={
    series: [{
      name: 'Paid',
      data: [50, 20, 32, 32, 20, 50, 20, 40, 25, 55, 20, 30],
      type: 'area',
  }, {
      name: 'UnPaid',
      data: [25, 15, 40, 20, 25, 15, 58, 28, 30, 15, 58, 28],
      type: "line",
  }],
  chart: {
      height: 230,
      toolbar: {
          show: false,
      },
      background: 'none',
      fill: "#fff",
  },
  grid: {
      borderColor: '#f2f6f7',
  },
  // colors: ["rgb(132, 90, 223)", "#ffb8a5"],
  colors: ["rgba(var(--primary-rgb), 0.05)", "#ffb8a5"],
  background: 'transparent',
  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'smooth',
      width: 2,
      dashArray: [0, 5],
  },

  legend: {
      show: true,
      position: 'top',
  },
  xaxis: {
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
  yaxis: {
      show: false,
      axisBorder: {
          show: false,
      },
      axisTicks: {
          show: false,
      }
  },
  tooltip: {
      x: {
          format: 'dd/MM/yy HH:mm'
      },
  },
}
coursesColumn=[
  { header: 'S.No', field: 'sno' },
  { header: 'Course', field: 'course' },
  { header: 'Classes', field: 'classes' },
  { header: 'Last Updated', field: 'lastupdated' },
  { header: 'Instructor', field: 'instructor' },
  { header: 'Students', field: 'students' },
  { header: 'Actions', field: 'actions' },
]
courses=[
  {
    img:"./assets/images/media/media-78.png",
    course:"Coding Classes",
    price:"$644",

  },
  {
    img:"./assets/images/media/media-76.png",
    course:"Data Science",
    price:"$657",
    imageClass:'bg-secondary-transparent'
  },
  {
    img:"./assets/images/media/media-79.png",
    course:"Marketing",
    price:"$457"
  },
  {
    img:"./assets/images/media/media-78.png",
    course:"Java",
    price:"$778"
  },
  {
    img:"./assets/images/media/media-78.png",
    course:"Coding Classes",
    price:"$644"
  },
  {
    img:"./assets/images/media/media-76.png",
    course:"Data Science",
    price:"$657",
    imageClass:'bg-secondary-transparent'

  },
  {
    img:"./assets/images/media/media-79.png",
    course:"Marketing",
    price:"$457"
  },
]
courseslist=[
  {
    id:"1",
    src:"./assets/images/media/media-1.jpg",
    course:"CSS Zero to Hero Master Class",
    dept:"UI/UX Designing",
    classes:"51",
    date:"22-06-2023",
    name:"Burak Oin",
    students:"256"
  },
  {
    id:"2",
    src:"./assets/images/media/media-4.jpg",
    course:"Digital Marketing Course From Scratch",
    dept:"Marketing",
    classes:"115",
    date:"21-06-2023",
    name:"Stuart Little",
    students:"1,189"
  },
  {
    id:"3",
    src:"./assets/images/media/media-10.jpg",
    course:"Digital Marketing Course From Scratch",
    dept:"Programming",
    classes:"30",
    date:"15-06-2023",
    name:"Boran Ray",
    students:"3.365"
  },
  {
    id:"4",
    src:"./assets/images/media/media-15.jpg",
    course:"Master Linear Algebra Medium Level",
    dept:"Mathematics",
    classes:"90",
    date:"11-06-2023",
    name:"Arya Neo",
    students:"773"
  },
  {
    id:"5",
    src:"./assets/images/media/media-23.jpg",
    course:"Learn How to Trade & Invest",
    dept:"Stocks & Trading",
    classes:"161",
    date:"10-06-2023",
    name:"Sia Niu",
    students:"51"
  }
]

remove(id:string){
	const data = this.courseslist.filter((x: { id: string }) => x.id !== id);
	this.courseslist = data;
  }

  courseList = [
    {
      name: 'John Henry',
      qualification: 'M.Tech',
      classes: '321 Classes',
      subject: 'Digital Marketing',
      image: './assets/images/faces/2.jpg'
    },
    {
      name: 'Mortal Yun',
      qualification: 'P.H.D',
      classes: '25 Classes',
      subject: 'Stocks & Trading',
      image: './assets/images/faces/12.jpg'
    },
    {
      name: 'Trex Con',
      qualification: 'MBBS',
      classes: '39 Classes',
      subject: 'Science',
      image: './assets/images/faces/13.jpg'
    },
    {
      name: 'Saiu Sarah',
      qualification: 'P.H.D',
      classes: '11 Classes',
      subject: 'Science',
      image: './assets/images/faces/3.jpg'
    },
    {
      name: 'Ion Hau',
      qualification: 'M.Tech',
      classes: '124 Classes',
      subject: 'Web Development',
      image: './assets/images/faces/4.jpg'
    },
    {
      name: 'Roman Killon',
      qualification: 'M.Tech',
      classes: '1263 Classes',
      subject: 'Ui / Ux Designing',
      image: './assets/images/faces/14.jpg'
    },
    {
      name: 'Suzika Stallone',
      qualification: 'Phd',
      classes: '110 Classes',
      subject: 'Machine Learning',
      image: './assets/images/faces/5.jpg'
    },
    {
      name: 'Robert Lewis',
      qualification: 'Phd',
      classes: '150 Classes',
      subject: 'Java Development',
      image: './assets/images/faces/15.jpg'
    }
  ];
}
