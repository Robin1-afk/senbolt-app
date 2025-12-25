import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-medical',
  standalone: true,
  imports: [SharedModule,SpkApexchartsComponent,SpkReusableTablesComponent,SpkDropdownsComponent],
  templateUrl: './medical.component.html',
  styleUrl: './medical.component.scss'
})
export class MedicalComponent {
chartOptions:any=
  {
    series: [
      {
          name: "Old Patients",
          data: [30, 35, 35, 30, 45, 25, 36, 54, 36, 29, 49, 42],
      },
      {
          name: "New Patients",
          data: [45, 30, 49, 30, 45, 25, 36, 54, 36, 29, 49, 42],
      },
  ],
  chart: {
      type: "bar",
      height: 360,
      toolbar: {
          show: false,
      },
      dropShadow: {
          enabled: false,
      },
      stacked: true,
  },
  plotOptions: {
      bar: {
          columnWidth: "30%",
          borderRadiusApplication: "around",
          borderRadiusWhenStacked: "all",
          borderRadius: 3,
      },
  },
  stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      // width: [5, 5],
      dashArray: 0,
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
  colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 1)"],
  dataLabels: {
      enabled: false,
  },
  legend: {
    show: true,
  showForNullSeries: true,
  showForZeroSeries: true,
  position: 'top',
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
  chartOptions1:any={
    series: [230, 200, 178, 153],
    chart: {
      // width: 300,
      height: 260,
      type: 'polarArea',
    },
    colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 1)", "rgba(255, 93, 159, 1)", "rgba(255, 142, 111, 1)"],
    labels: ["Revenue", "Income", "Profit", "Patients"],
    legend: {
      show: false,
    },
    stroke: {
      width: 0
    },
    fill: {
      opacity: 0.8
    },
  }
  chartOptions2:any={
    series: [1754, 1234],
    labels: ["Male", "Female"],
    chart: {
      height: 230,
      type: "donut",
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: "#525050",
        opacity: 0.1,
      },
    },
    dataLabels: {
      enabled: false,
    },
  
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "round",
      colors: "#fff",
      width: 0,
      dashArray: 0,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "80%",
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
    colors: ["rgba(var(--primary-rgb))", "rgb(227, 84, 212)"],
  }
  chartOptions3:any={
    series: [
      {
        type: "area",
        name: "Day Shift",
        data: [15, 30, 22, 49, 32, 45, 30, 45, 65, 45, 25, 45],
      },
      {
        type: "line",
        name: "Night Shift",
        data: [8, 40, 15, 32, 45, 30, 20, 35, 28, 43, 30, 40],
      },
    ],
    chart: {
      type: "line",
      height: 330,
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(var(--primary-rgb))", "rgba(227, 84, 212, 0.5)"],
    fill: {
      type: ["gradient", "solid"],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
        colorStops: [
          [
            {
              offset: 0,
              color: "rgba(var(--primary-rgb),0.1)",
              opacity: 50,
            },
            {
              offset: 75,
              color: "rgba(var(--primary-rgb),0.1)",
              opacity: 0.5,
            },
            {
              offset: 100,
              color: "transparent",
              opacity: 0.5,
            },
          ],
          [
            {
              offset: 0,
              color: "rgba(158, 92, 247, 0.1)",
              opacity: 1,
            },
            {
              offset: 75,
              color: "rgba(158, 92, 247, 0.1)",
              opacity: 0.3,
            },
            {
              offset: 100,
              color: "transparent",
              opacity: 1,
            },
          ],
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "top",
      offsetX: 0,
      offsetY: 8,
      markers:{
        size:5
      }
    },
    stroke: {
      curve: "smooth",
      width: [2, 2],
      lineCap: "round",
    },
    grid: {
      borderColor: "#edeef1",
      strokeDashArray: 2,
    },
    yaxis: {
      axisBorder: {
        show: true,
        color: "rgba(158, 92, 247, 0.05)",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "rgba(158, 92, 247, 0.05)",
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
        show: false,
        color: "rgba(158, 92, 247, 0.05)",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "rgba(158, 92, 247, 0.05)",
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        rotate: -90,
      },
    },
  }
  patientColumns=[
    { header: 'Sno', field: 'Sno' },
    { header: 'Patient ID', field: 'patientID' },
    { header: 'Name', field: 'name' },
    { header: 'Gender', field: 'gender' }, 
    { header: 'Age', field: 'age' },
    { header: 'Assgined Doctor', field: 'assigneddoctor' },
    { header: 'Disease', field: 'disease' },
    { header: 'Contact Number', field: 'contactnumber' },
    { header: 'Appointmented Date', field: 'appointmentedate' },
    { header: 'Room No', field: 'roomno' },
    { header: 'Action', field: 'action' },
  ]
  doctorColumns=[
    { header: 'Doctor', field: 'doctor' },
    { header: 'Qualification', field: 'qualification' },
    { header: 'Experience', field: 'experience' },
    { header: 'Action', field: 'action' },
  ]
  patientslist=[
    {
      src:"./assets/images/faces/11.jpg",
      sno:"01",
      id:"PAC-9ABC",
      name:"Jhon Doe",
      gender:"Male",
      age:"25",
      doctor:"Dr.M.Smith",
      disease:"Hypertension",
      bg:"primary",
      contact:"123-456-7890",
      date:"2023-10-20",
      room:"101"
    },
    {
      src:"./assets/images/faces/2.jpg",
      sno:"02",
      id:"PAC-3SFW",
      name:"Jane smith",
      gender:"Female",
      age:"35",
      doctor:"Dr. Johnson",
      disease:"Diabetes",
      bg:"secondary",
      contact:"987-654-3210",
      date:"2023-09-15",
      room:"102"
    },
    {
      src:"./assets/images/faces/12.jpg",
      sno:"03",
      id:"PAC-6SKF",
      name:"Robert Jhonson",
      gender:"Male",
      age:"45",
      doctor:"Dr.M.Angle",
      disease:"Asthma",
      bg:"success",
      contact:"456-789-0123",
      date:"2023-11-05",
      room:"103"
    },
    {
      src:"./assets/images/faces/5.jpg",
      sno:"04",
      id:"PAC-3ESD",
      name:"Emiley Davis",
      gender:"Female",
      age:"28",
      doctor:"Dr.S.Mary",
      disease:"Allergies",
      bg:"orange",
      contact:"789-012-3456",
      date:"2023-08-12",
      room:"104"
    },
    {
      src:"./assets/images/faces/11.jpg",
      sno:"05",
      id:"PAC-3KSE",
      name:"William Martinez",
      gender:"Male",
      age:"38",
      doctor:"Dr.S.Mary",
      disease:"General",
      bg:"info",
      contact:"234-567-8901",
      date:"2023-12-08",
      room:"105"
    },
    {
      src:"./assets/images/faces/4.jpg",
      sno:"06",
      id:"PAC-4DFS",
      name:"Sarah Wilson",
      gender:"Female",
      age:"28",
      doctor:"Dr.T.Laytoya Thoma",
      disease:"High Cholesterol",
      bg:"warning",
      contact:"567-890-1234",
      date:"2023-07-25",
      room:"106"
    }
  ]
  doctorslist=[
    {
      id:"1",
      src:"./assets/images/faces/doctors/1.jpg",
      name:"Dr. Smith",
      specialization:"Cardiology",
      qualification:"MBBS, Ph.D",
      exp:"4"
    },
    {
      id:"2",
      src:"./assets/images/faces/doctors/2.jpg",
      name:"Dr. Johnson",
      specialization:"Orthopedics",
      qualification:"MBBS, MD,DM",
      exp:"6"
    },
    {
      id:"3",
      src:"./assets/images/faces/doctors/3.jpg",
      name:"Dr.L.Rickie Smtih",
      specialization:"Orthopedics",
      qualification:"MBBS, MD,DM",
      exp:"6"
    },
    {
      id:"4",
      src:"./assets/images/faces/doctors/4.jpg",
      name:"Dr.M.Angle",
      specialization:"Gynecologist",
      qualification:"MBBS, MD, Ph.D",
      exp:"10"
    },
    {
      id:"5",
      src:"./assets/images/faces/doctors/5.jpg",
      name:"Dr.S.Mary",
      specialization:"Neurosurgeon",
      qualification:"MBBS, MD, Ph.D",
      exp:"3"
    },
    {
      id:"6",
      src:"./assets/images/faces/doctors/6.jpg",
      name:"Dr.T.Laytoya Thoma",
      specialization:"Dermatologists",
      qualification:"MBBS, MD, Ph.D",
      exp:"5"
    }
  ]
  remove(id:string){
    const data = this.doctorslist.filter((x: { id: string }) => x.id !== id);
    this.doctorslist = data;
    }
    
    stats = [
      {
        title: 'Total Patients',
        count: '12,457',
        change: '- 0.02%',
        changeClass: 'bg-danger/10 text-danger',
        icon: 'ri-arrow-down-s-fill',
        svgIconClass: 'text-primary',
        svgIconPath: 'M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z',
        svgIconOpacityPath: 'M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z'
      },
      {
        title: 'Total Doctors',
        count: '2,987',
        change: '- 0.02%',
        changeClass: 'bg-danger/10 text-danger',
        icon: 'ri-arrow-down-s-fill',
        svgIconClass: 'text-primarytint1color',
        svgIconPath: 'M240,160a32,32,0,1,1-32-32A32,32,0,0,1,240,160Z',
        svgIconOpacityPath: 'M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z'
      },
      {
        title: 'Total Appointments',
        count: '35,324',
        change: '- 2.15%',
        changeClass: 'bg-success/10 text-success',
        icon: 'ri-arrow-down-s-fill',
        svgIconClass: 'text-primarytint2color',
        svgIconPath: 'M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z',
        svgIconOpacityPath: 'M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-48-56a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,152Z'
      },
      {
        title: 'Total Staff',
        count: '5,478',
        change: '+ 1.05%',
        changeClass: 'bg-success/10 text-success',
        icon: 'ri-arrow-up-s-fill',
        svgIconClass: 'text-primarytint3color',
        svgIconPath: 'M168,144a40,40,0,1,1-40-40A40,40,0,0,1,168,144ZM64,56A32,32,0,1,0,96,88,32,32,0,0,0,64,56Zm128,0a32,32,0,1,0,32,32A32,32,0,0,0,192,56Z',
        svgIconOpacityPath: 'M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1,0-16,24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.85,8,57,57,0,0,0-98.15,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z'
      }
    ];
}
