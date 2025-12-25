import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [SharedModule,RouterModule,SpkDropdownsComponent,SpkReusableTablesComponent,FormsModule

  ],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {
  lists=[
    {
      id:1,
      src:"./assets/images/media/jobs/2.png",
      role:"HTML Developer - Fresher",
      type:"Remote/Onsite",
      src1:"./assets/images/company-logos/8.png",
      company:"HorizonTech Ventures",
      dept:"Development",
      applications:"18",
      bg:"primary",
      date:"Nov 12 2024",
      vacancies:"36",
      bg1:"success",
      status:"Approved",
      jobtype:"Full Time",
      expire:"Oct 15 2024",
      checked:false
    },
    {
      id:2,
      src:"./assets/images/media/jobs/1.png",
      role:"React Lead Developer",
      type:"Remote/Onsite",
      src1:"./assets/images/company-logos/10.png",
      company:"FusionTech Industries",
      dept:"Design",
      applications:"31",
      bg:"danger",
      date:"Oct 15 2024",
      vacancies:"50",
      bg1:"danger",
      status:"Rejected",
      jobtype:"Full Time",
      expire:"Sep 27 2024",
      checked:true
    },
    {
      id:3,
      src:"./assets/images/media/jobs/3.png",
      role:"Vuejs Frontend Developer",
      type:"Remote/Onsite",
      src1:"./assets/images/company-logos/1.png",
      company:"Optima Ventures Inc.",
      dept:"Management",
      applications:"35",
      bg:"primary",
      date:"May 15 2024",
      vacancies:"50",
      bg1:"warning",
      status:"Pending",
      jobtype:"Part Time",
      expire:" Dec 19 2024",
      checked:true
    },
    {
      id:4,
      src:"./assets/images/media/jobs/4.png",
      role:"Wordpress Developer - Remote",
      type:"Remote/Onsite",
      src1:"./assets/images/company-logos/2.png",
      company:"Tech Innovators Ltd.",
      dept:"Marketing",
      applications:"20",
      bg:"primary",
      date:"Feb 12 2024",
      vacancies:"60",
      bg1:"success",
      status:"Approved",
      jobtype:"Part Time",
      expire:"Jan 12  2024",
      checked:false
    },
    {
      id:5,
      src:"./assets/images/media/jobs/2.png",
      role:"HTML Developer - Fresher",
      type:"Remote/Onsite",
      src1:"./assets/images/company-logos/8.png",
      company:"HorizonTech Ventures",
      dept:"Development",
      applications:"18",
      bg:"primary",
      date:"Nov 12 2024",
      vacancies:"36",
      bg1:"success",
      status:"Approved",
      jobtype:"Full Time",
      expire:"Oct 15 2024",
      checked:false
    },
    {
      id:6,
      src:"./assets/images/media/jobs/1.png",
      role:"React Lead Developer",
      type:"Remote/Onsite",
      src1:"./assets/images/company-logos/10.png",
      company:"FusionTech Industries",
      dept:"Design",
      applications:"31",
      bg:"danger",
      date:"Oct 15 2024",
      vacancies:"50",
      bg1:"danger",
      status:"Rejected",
      jobtype:"Full Time",
      expire:"Sep 27 2024",
      checked:true
    },
    {
      id:7,
      src:"./assets/images/media/jobs/3.png",
      role:"Vuejs Frontend Developer",
      type:"Remote/Onsite",
      src1:"./assets/images/company-logos/1.png",
      company:"Optima Ventures Inc.",
      dept:"Management",
      applications:"35",
      bg:"primary",
      date:"May 15 2024",
      vacancies:"50",
      bg1:"warning",
      status:"Pending",
      jobtype:"Part Time",
      expire:" Dec 19 2024",
      checked:true
    },
    {
      id:8,
      src:"./assets/images/media/jobs/4.png",
      role:"Wordpress Developer - Remote",
      type:"Remote/Onsite",
      src1:"./assets/images/company-logos/2.png",
      company:"Tech Innovators Ltd.",
      dept:"Marketing",
      applications:"20",
      bg:"primary",
      date:"Feb 12 2024",
      vacancies:"60",
      bg1:"success",
      status:"Approved",
      jobtype:"Part Time",
      expire:"Jan 12  2024",
      checked:false
    },
  ]
    allTasksChecked: boolean=false;
    handleToggleSelectAll(checked: any) {
      this.lists.forEach(list => list.checked = checked);
      this.allTasksChecked = checked;
    }
  remove(id:number){
    const data = this.lists.filter((x: { id: number }) => {
      return x.id != id;
  
    })
    this.lists = data;
  
  }
  toggleSelectAll(event: Event) {
    this.allTasksChecked = (event.target as HTMLInputElement).checked;
  }
  joblistColumn=[
    {header:"Job Title",field:"Job Title"},
    {header:"Company",field:"Company"},
    {header:"Department",field:"Department"},
    {header:"Applications",field:"Applications"},
    {header:"Posted Date",field:"Posted Date"},
    {header:"Vacancies",field:"Vacancies"},
    {header:"Job Type",field:"Job Type"},
    {header:"Status",field:"Status"},
    {header:"Expires on",field:"Expires on"},
    {header:"Action",field:"Action"},
  ]
}
