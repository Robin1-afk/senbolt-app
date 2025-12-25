import { Component } from '@angular/core';
import flatpickr from 'flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { CommonModule } from '@angular/common';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { SharedModule } from '../../../shared/shared.module';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';


@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [SharedModule,SpkNgSelectComponent,SpkFlatpickrComponent,SpkDropdownsComponent,
    FlatpickrModule,FormsModule,ReactiveFormsModule,CommonModule,CdkDropList,CdkDrag,SpkReusableTablesComponent],
  providers: [FlatpickrDefaults],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
modal: any;
  constructor(
		// config: NgbModalConfig,
	) {
		// customize default values of modals used by this component tree
		// config.backdrop = 'static';
		// config.keyboard = false;
	}
  selectedTags=['Angelina May']
  
  flatpickrOptions: any = {
    inline: true,
  };
  ngOnInit(): void {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
  
    };
    flatpickr('#addignedDate', this.flatpickrOptions);
}
tasks=[
  {
    title:"Software Development Tasks",
    bg:"primary",
    status:"In Progress",
    date:"15-Jan-2024",
    bg1:"primarytint2color",
    priority:"Medium",
    src:"./assets/images/faces/7.jpg",
    name:"Mehtha",
    bg2:"primary",
    percent:"32",
    progress:"32%",
    checked:false
  },
  {
    title:"Bug Fixes and Issue Tracking",
    bg:"primarytint2color",
    status:"Not Started",
    date:"16-Jan-2024",
    bg1:"primarytint3color",
    priority:"High",
    src:"./assets/images/faces/12.jpg",
    name:"Ranjeeth",
    bg2:"secondary",
    percent:"80",
    progress:"80%",
    checked:true
  },
  {
    title:"IT Infrastructure Upgrades",
    bg:"primarytint2color",
    status:"Not Started",
    date:"18-Feb-2024",
    bg1:"primarytint1color",
    priority:"Low",
    src:"./assets/images/faces/8.jpg",
    name:"Vency",
    bg2:"secondary",
    percent:"90",
    progress:"90%",
    checked:false
  },
  {
    title:"Network Configuration",
    bg:"warning",
    status:"Pending",
    date:"19-Feb-2024",
    bg1:"primarytint1color",
    priority:"Medium",
    src:"./assets/images/faces/15.jpg",
    name:"Cimen Sobs",
    bg2:"secondary",
    percent:"69",
    progress:"69%",
    checked:true
  },
  {
    title:"Backup and Recovery Report",
    bg:"primarytint2color",
    status:"Not Started",
    date:"21-Feb-2024",
    bg1:"primarytint3color",
    priority:"High",
    src:"./assets/images/faces/14.jpg",
    name:" Dhruv Dany",
    bg2:"warning",
    percent:"96",
    progress:"96%",
    checked:true
  },
  {
    title:"User Account Management",
    bg:"primary",
    status:"In Progress",
    date:"24-Feb-2024",
    bg1:"primarytint1color",
    priority:"Low",
    src:"./assets/images/faces/11.jpg",
    name:"Rony Parker",
    bg2:"danger",
    percent:"88",
    progress:"88%",
    checked:false
  },
  {
    title:"Deployment Schedule",
    bg:"primarytint2color",
    status:"Not Started",
    date:"27-Feb-2024",
    bg1:"primarytint3color",
    priority:"High",
    src:"./assets/images/faces/4.jpg",
    name:"Monjitha",
    bg2:"teal",
    percent:"36",
    progress:"36%",
    checked:true
  },
  {
    title:"Database Management",
    bg:"primarytint2color",
    status:"Not Started",
    date:"03-Mar-2024",
    bg1:"primarytint2color",
    priority:"Medium",
    src:"./assets/images/faces/3.jpg",
    name:"Killies",
    bg2:"pink",
    percent:"57",
    progress:"57%",
    checked:false
  },
  {
    title:"Monitoring and Alert",
    bg:"primarytint2color",
    status:"Not Started",
    date:"05-Mar-2024",
    bg1:"primarytint1color",
    priority:"Low",
    src:"./assets/images/faces/13.jpg",
    name:"Tom Cruz",
    bg2:"dark",
    percent:"79",
    progress:"79%",
    checked:false
  },
  {
    title:"Server Maintenance",
    bg:"success",
    status:"Completed",
    date:"17-Jan-2024",
    bg1:"primarytint1color",
    priority:"Low",
    src:"./assets/images/faces/13.jpg",
    name:"Palam Nath",
    bg2:"success",
    percent:"58",
    progress:"58%",
    checked:false
  },
]
getCheckedTasks() {
  return this.tasks.filter(task => task.checked);
}
click(id:string){
  const data = this.tasks.filter((x: { date: string }) => {
    return x.date != id;

  })
  this.tasks = data;

}
handleToggleSelectAll(checked: any) {
  this.tasks.forEach(task => task.checked = checked);
  this.allTasksChecked = checked;
}
allTasksChecked: boolean=false;
toggleSelectAll(event: Event) {
  this.allTasksChecked = (event.target as HTMLInputElement).checked;
}
todolistColumn=[
  {header:"",field:"",tableHeadColumn:"todolist-handle-drag"},
  {header:"Task Title",field:"Task Title",},
  {header:"Status",field:"Status"},
  {header:"Dead Line",field:"Dead Line"},
  {header:"Priority",field:"Priority"},
  {header:"Assigner",field:"Assigner"},
  {header:"Progress",field:"Progress",tableHeadColumn:"todolist-progress"},
  {header:"Action",field:"Action",tableHeadColumn:"text-end"},
]
Status=[
  {label:'In progress',value:1},
  {label:'Not Started',value:2},
  {label:'Completed',value:3},
  {label:'Pending',value:4},
]
Priority=[
  {label:'Critical',value:1},
  {label:'High',value:2},
  {label:'Medium',value:3},
  {label:'Low',value:4},

]
tags=[
  {value:1,label:'Angelina May'},
  {value:2,label:'Kiara advain'},
  {value:3,label:'Hercules Jhon'},
  {value:4,label:'Mayor Kim'},
]
selectedChoices = [1];
}
