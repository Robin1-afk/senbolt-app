import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,RouterModule,CommonModule,SpkNgSelectComponent,SpkReusableTablesComponent,SpkDropdownsComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projectList=[
    {
      src:"./assets/images/company-logos/1.png",
      title:"Development of Enhanced Analytics Platform",
      subtext:"Total",
      percent:"18/22",
      subtext1:" tasks completed",
      description:"Build an advanced analytics dashboard integrating real-time data from multiple sources.",
      images:[
        './assets/images/faces/5.jpg',"./assets/images/faces/7.jpg","./assets/images/faces/9.jpg","./assets/images/faces/11.jpg"
      ],
      count:2,
      assigneddate:"15,Jun 2024",
      duedate:"30,Aug 2024",
      progress:65,
      status:"Medium",
      bg:"warning"
    },
    {
      src:"./assets/images/company-logos/3.png",
      title:"E-commerce Platform Optimization",
      subtext:"Total",
      percent:"10/20",
      subtext1:" tasks completed",
      description:"Enhance performance and user experience for a high-traffic e-commerce platform.",
      images:[
        './assets/images/faces/4.jpg',"./assets/images/faces/6.jpg","./assets/images/faces/12.jpg"
      ],
      count:1,
      assigneddate:"02,Jul 2024",
      duedate:"15,Sep 2024",
      progress:45,
      status:"High",
      bg:"danger"
    },
    {
      src:"./assets/images/company-logos/7.png",
      title:"Data Migration to Cloud",
      subtext:"Total",
      percent:"5/8",
      subtext1:" tasks completed",
      description:"Transfer legacy data systems to cloud infrastructure for scalability and accessibility.",
      images:[
        './assets/images/faces/1.jpg',"./assets/images/faces/21.jpg"
      ],
      count:0,
      assigneddate:"15,Oct 2024",
      duedate:"30,Dec 2024",
      progress:62,
      status:"Low",
      bg:"success"
    },
    {
      src:"./assets/images/company-logos/8.png",
      title:"Cybersecurity Audit and Enhancements",
      subtext:"Total",
      percent:"2/6",
      subtext1:" tasks completed",
      description:"Conduct a comprehensive audit and implement security measures to protect data and systems.",
      images:[
        './assets/images/faces/12.jpg',"./assets/images/faces/11.jpg"
      ],
      count:0,
      assigneddate:"01,Nov 2024",
      duedate:"15,Jan 2025",
      progress:40,
      status:"High",
      bg:"danger"
    },
    {
      src:"./assets/images/company-logos/6.png",
      title:"AI-Powered Customer Support System",
      subtext:"Total",
      percent:"3/10",
      subtext1:" tasks completed",
      description:"Implement a machine learning-driven system to automate customer support inquiries.",
      images:[
        './assets/images/faces/5.jpg',"./assets/images/faces/12.jpg","./assets/images/faces/9.jpg","./assets/images/faces/11.jpg"
      ],
      count:1,
      assigneddate:"05,Sep 2024",
      duedate:"25,Nov 2024",
      progress:30,
      status:"Medium",
      bg:"warning"
    },
    {
      src:"./assets/images/company-logos/4.png",
      title:"Mobile App Launch",
      subtext:"Total",
      percent:"5/15",
      subtext1:" tasks completed",
      description:"Develop and release a new mobile application for iOS and Android platforms.",
      images:[
        './assets/images/faces/13.jpg',"./assets/images/faces/14.jpg","./assets/images/faces/15.jpg",
      ],
      count:0,
      assigneddate:"10,Aug 2024",
      duedate:"30,Oct 2024",
      progress:35,
      status:"Medium",
      bg:"info"
    },
    {
      src:"./assets/images/company-logos/5.png",
      title:"IT Infrastructure Upgrade",
      subtext:"Total",
      percent:"2/12",
      subtext1:" tasks completed",
      description:"Modernize network and server infrastructure to improve reliability and security.",
      images:[
        './assets/images/faces/16.jpg',"./assets/images/faces/11.jpg"
      ],
      count:0,
      assigneddate:"20,Jul 2024",
      duedate:"30,Oct 2024",
      progress:15,
      status:"Low",
      bg:"success"
    },
  ]
  projectColumn=[
    {header:"Project Name",field:"Project Name"},
    {header:"Description",field:"Description"},
    {header:"Team",field:"Team"},
    {header:"Assigned Date",field:"Assigned Date"},
    {header:"Due Date",field:"Due Date"},
    {header:"Status",field:"Status"},
    {header:"Priority",field:"Priority"},
    {header:"Actions",field:"Actions"},
  ]
  Project=[
    {label:"Sort By",value:1},
    {label:"Newest",value:2},
    {label:"Date Added",value:3},
    {label:"Type",value:4},
    {label:"A - Z",value:5},

  ]
}
