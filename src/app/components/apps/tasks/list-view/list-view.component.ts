import { ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../../shared/shared.module';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpkListviewCardComponent } from '../../../../../@spk/reusable-apps/spk-listview-card/spk-listview-card.component';
import { SpkFlatpickrComponent } from '../../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,RouterModule,SpkFlatpickrComponent,SpkDropdownsComponent,
    FlatpickrModule,NgSelectModule,FormsModule,SpkListviewCardComponent,SpkNgSelectComponent,SpkReusableTablesComponent,
   CommonModule],
  providers: [FlatpickrDefaults],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {

  cardData=[
    {
      id:1,
      customClass:"flex items-start justify-between mb-2",
      titleClass:"dark:text-textmuted/50 block mb-1",
      valueClass:"fw-medium mb-0",
      cardClass:"overflow-hidden main-content-card",
      title:"New Tasks",
      value:"45,478",
      graph:"Increased",
      color:"success",
      percentage:"2.56%",
      percentageIcon:"ti ti-arrow-narrow-up text-[1rem]",
      bg:"primary",
      icon:"ri-task-line text-xl",
    },
    {
      id:2,
      customClass:"flex items-start justify-between mb-2",
      titleClass:"dark:text-textmuted/50 block mb-1",
      valueClass:"fw-medium mb-0",
      cardClass:"overflow-hidden main-content-card",
      title:"Completed Tasks",
      value:"2,345",
      graph:"Decreased",
      color:"danger",
      percentage:"3.05%",
      percentageIcon:"ti ti-arrow-narrow-down text-[1rem]",
      bg:"primarytint1color",
      icon:"ri-check-line text-xl"
    },
    {
      id:3,
      customClass:"flex items-start justify-between mb-2",
      titleClass:"dark:text-textmuted/50 block mb-1",
      valueClass:"fw-medium mb-0",
      cardClass:"overflow-hidden main-content-card",
      title:"Pending Tasks",
      value:"1245",
      graph:"Increased",
      color:"success",
      percentage:"2.16%",
      percentageIcon:"ti ti-arrow-narrow-up text-[1rem]",
      bg:"primarytint2color",
      icon:"ri-time-line text-xl"
    },
    {
      id:4,
      customClass:"flex items-start justify-between mb-2",
      titleClass:"dark:text-textmuted/50 block mb-1",
      valueClass:"fw-medium mb-0",
      cardClass:"overflow-hidden main-content-card",
      title:"Inprogress Tasks",
      value:"658",
      graph:"Increased",
      color:"success",
      percentage:"2.1%",
      percentageIcon:"ti ti-arrow-narrow-up text-[1rem]",
      bg:"primarytint3color",
      icon:"ri-loader-line text-xl"
    }
  ]

initCounterUp() {
  const elements = document.querySelectorAll('.count-up');
  elements.forEach((el) => {
    const target = +el.getAttribute('data-count')!;
    const updateCount = () => {
      const current = +el.textContent!;
      const increment = Math.ceil(target / 100);
      if (current < target) {
        el.textContent = `${current + increment}`;
        setTimeout(updateCount, 41);
      } else {
        el.textContent = `${target}`;
      }
    };
    updateCount();
  });
}
constructor(private renderer: Renderer2, private el: ElementRef) {
   
}
ngAfterViewInit(): void {
  const taskBtns = this.el.nativeElement.querySelectorAll('.task-delete-btn');

  taskBtns.forEach((btn: HTMLElement) => {
    this.renderer.listen(btn, 'click', () => {
      const task = btn.closest('.task-list');
      if (task) {
        this.renderer.removeChild(task.parentNode, task);
      }
    });
  });
}

lists=[
  {
    task:"Design New Landing Page",
    id:"SPK - 01",
    assigneddate:"02-06-2024",
    status:"New",
    bg:"primary",
    duedate:"10-06-2024",
    bg1:"secondary",
    priority:"Medium",
    images:[
      './assets/images/faces/2.jpg',
      './assets/images/faces/8.jpg',
      './assets/images/faces/2.jpg'
    ],
    count:2,
    update:"In Review",
    bg2:"info",
    checked:false
  },
  {
    task:"New Project Buleprint",
    id:"SPK - 04",
    assigneddate:"05-06-2024",
    status:"Inprogress",
    bg:"secondary",
    duedate:"15-06-2024",
    bg1:"danger",
    priority:"High",
    images:[
      './assets/images/faces/12.jpg',
      './assets/images/faces/11.jpg',
    ],
    count:4,
    update:"On Hold",
    bg2:"warning",
    checked:true
  },
  {
    task:"Server Side Validation",
    id:"SPK - 11",
    assigneddate:"12-06-2024",
    status:"Pending",
    bg:"warning",
    duedate:"16-06-2024",
    bg1:"success",
    priority:"Low",
    images:[
      './assets/images/faces/5.jpg',
      './assets/images/faces/9.jpg',
      './assets/images/faces/13.jpg',
    ],
    count:5,
    update:"In Review",
    bg2:"info",
    checked:false
  },
  {
    task:"New Project Buleprint",
    id:"SPK - 04",
    assigneddate:"05-06-2024",
    status:"Inprogress",
    bg:"secondary",
    duedate:"15-06-2024",
    bg1:"danger",
    priority:"High",
    images:[
      './assets/images/faces/12.jpg',
      './assets/images/faces/11.jpg',
      './assets/images/faces/13.jpg',
    ],
    count:4,
    update:"In Review",
    bg2:"info",
    checked:true
  },
  {
    task:"Server Side Validation",
    id:"SPK - 11",
    assigneddate:"12-06-2024",
    status:"Pending",
    bg:"warning",
    duedate:"16-06-2024",
    bg1:"success",
    priority:"Low",
    images:[
      './assets/images/faces/5.jpg',
      './assets/images/faces/9.jpg',
      './assets/images/faces/13.jpg',
    ],
    count:5,
    update:"In Review",
    bg2:"info",
    checked:false
  },
  {
    task:"New Plugin Development",
    id:"SPK - 24",
    assigneddate:"08-06-2024",
    status:"Completed",
    bg:"success",
    duedate:"17-06-2024",
    bg1:"success",
    priority:"Low",
    images:[
      './assets/images/faces/2.jpg',
      './assets/images/faces/8.jpg',
    ],
    count:2,
    update:"On Hold",
    bg2:"warning",
    checked:true
  },
  {
    task:"Designing New Authentication Page",
    id:"SPK - 16",
    assigneddate:"03-06-2024",
    status:"Inprogress",
    bg:"secondary",
    duedate:"08-06-2024",
    bg1:"secondary",
    priority:"Medium",
    images:[
      './assets/images/faces/10.jpg',
      './assets/images/faces/15.jpg',
    ],
    count:3,
    update:"In Review",
    bg2:"info",
    checked:false
  },
  {
    task:"New Plugin Development",
    id:"SPK - 24",
    assigneddate:"08-06-2024",
    status:"Completed",
    bg:"success",
    duedate:"17-06-2024",
    bg1:"success",
    priority:"Low",
    images:[
      './assets/images/faces/2.jpg',
      './assets/images/faces/8.jpg',
    ],
    count:2,
    update:"In Review",
    bg2:"info",
    checked:false
  },
  {
    task:"Designing New Authentication Page",
    id:"SPK - 16",
    assigneddate:"03-06-2024",
    status:"Inprogress",
    bg:"secondary",
    duedate:"08-06-2024",
    bg1:"secondary",
    priority:"Medium",
    images:[
      './assets/images/faces/10.jpg',
      './assets/images/faces/15.jpg',
    ],
    count:3,
    update:"In Review",
    bg2:"info",
    checked:false
  },
  {
    task:"Documentation For New Template",
    id:"SPK - 07",
    assigneddate:"12-06-2024",
    status:"New",
    bg:"primary",
    duedate:"25-06-2024",
    bg1:"danger",
    priority:"High",
    images:[
      './assets/images/faces/12.jpg',
    ],
    update:"On Hold",
    bg2:"warning",
    checked:false
  }
]
allTasksChecked!: boolean;
toggleSelectAll(event: Event) {
  this.allTasksChecked = (event.target as HTMLInputElement).checked;
}
handleToggleSelectAll(checked: any) {
  this.lists.forEach(list => list.checked = checked);
  this.allTasksChecked = checked;
}

listColumns=[
  {header:"Task",field:"Task"},
  {header:"Task ID",field:"Task ID"},
  {header:"Priority",field:"Priority"},
  {header:"Assigned Date",field:"Assigned Date"},
  {header:"Due Date",field:"Due Date"},
  {header:"Status",field:"Status"},
  {header:"Assigned To",field:"Assigned To"},
  {header:"Action",field:"Action"},
  {header:"Status Update",field:"Status Update"},
]
Status=[
  {label:'New',value:4},
  {label:'Inprogress',value:1},
  {label:'On-hold',value:2},
  {label:'Completed',value:3},
]
Priority=[
  {label:'High',value:1},
  {label:'Medium',value:2},
  {label:'Low',value:3},
]
tags=[
  {value:1,label:'Angelina May'},
  {value:2,label:'Kiara advain'},
  {value:3,label:'Hercules Jhon'},
  {value:4,label:'Mayor Kim'},
]
selectedChoices = [];

tasks = [
  {
    taskName: "Implement a sticky navigation bar",
    taskID: "SPK - 01",
    priority: "Medium",
    startDate: "02-06-2024",
    endDate: "10-06-2024",
    status: "New",
    statusClass: "badge bg-primary-transparent text-primary",
    avatars: [
      { img: "./assets/images/faces/2.jpg" },
      { img: "./assets/images/faces/8.jpg" },
      { img: "./assets/images/faces/2.jpg" },
      { additional: "+2" }
    ],
    actions: ["edit", "delete"],
    checked: false
  },
  {
    taskName: "Integrate new UI components",
    taskID: "SPK - 04",
    priority: "High",
    startDate: "05-06-2024",
    endDate: "15-06-2024",
    status: "Inprogress",
    statusClass: "badge bg-secondary-transparent text-secondary",
    avatars: [
      { img: "./assets/images/faces/12.jpg" },
      { img: "./assets/images/faces/11.jpg" },
      { additional: "+4" }
    ],
    actions: ["edit", "delete"],
    checked: true
  },
  {
    taskName: "Optimize API endpoints for faster response times",
    taskID: "SPK - 11",
    priority: "Low",
    startDate: "12-06-2024",
    endDate: "16-06-2024",
    status: "Pending",
    statusClass: "badge bg-warning-transparent text-warning",
    avatars: [
      { img: "./assets/images/faces/5.jpg" },
      { img: "./assets/images/faces/9.jpg" },
      { img: "./assets/images/faces/13.jpg" },
      { additional: "+5" }
    ],
    actions: ["edit", "delete"],
    checked: false
  },
  {
    taskName: "Write unit tests for new JavaScript functions",
    taskID: "SPK - 24",
    priority: "Low",
    startDate: "08-06-2024",
    endDate: "17-06-2024",
    status: "Completed",
    statusClass: "badge bg-success-transparent text-success",
    avatars: [
      { img: "./assets/images/faces/2.jpg" },
      { img: "./assets/images/faces/8.jpg" },
      { img: "./assets/images/faces/2.jpg" },
      { additional: "+2" }
    ],
    actions: ["edit", "delete"],
    checked: false
  },
  {
    taskName: "Generate sales reports using ApexCharts",
    taskID: "SPK - 16",
    priority: "Medium",
    startDate: "03-06-2024",
    endDate: "08-06-2024",
    status: "Inprogress",
    statusClass: "badge bg-secondary-transparent text-secondary",
    avatars: [
      { img: "./assets/images/faces/10.jpg" },
      { img: "./assets/images/faces/15.jpg" },
      { additional: "+3" }
    ],
    actions: ["edit", "delete"],
    checked: true
  },
  {
    taskName: "Research free hosting options for a Blazor Server app",
    taskID: "SPK - 07",
    priority: "High",
    startDate: "12-06-2024",
    endDate: "25-06-2024",
    status: "New",
    statusClass: "badge bg-primary-transparent text-primary",
    avatars: [{ img: "./assets/images/faces/12.jpg" }],
    actions: ["edit", "delete"],
    checked: true
  },
  {
    taskName: "Updating Old UI",
    taskID: "SPK - 13",
    priority: "Low",
    startDate: "06-06-2024",
    endDate: "12-06-2024",
    status: "Completed",
    statusClass: "badge bg-success-transparent text-success",
    avatars: [
      { img: "./assets/images/faces/11.jpg" },
      { img: "./assets/images/faces/1.jpg" },
      { img: "./assets/images/faces/10.jpg" },
      { additional: "+1" }
    ],
    actions: ["edit", "delete"],
    checked: false
  },
  {
    taskName: "Create wireframes for the new dashboard layout",
    taskID: "SPK - 20",
    priority: "High",
    startDate: "14-06-2024",
    endDate: "19-06-2024",
    status: "Pending",
    statusClass: "badge bg-warning-transparent text-warning",
    avatars: [
      { img: "./assets/images/faces/3.jpg" },
      { img: "./assets/images/faces/9.jpg" },
      { additional: "+2" }
    ],
    actions: ["edit", "delete"],
    checked: true
  },
  {
    taskName: "Resolve outstanding tickets in the support queue",
    taskID: "SPK - 26",
    priority: "Medium",
    startDate: "11-06-2024",
    endDate: "18-06-2024",
    status: "Completed",
    statusClass: "badge bg-success-transparent text-success",
    avatars: [
      { img: "./assets/images/faces/5.jpg" },
      { img: "./assets/images/faces/14.jpg" },
      { img: "./assets/images/faces/12.jpg" },
      { img: "./assets/images/faces/3.jpg" },
      { additional: "+1" }
    ],
    actions: ["edit", "delete"],
    checked: false
  },
  {
    taskName: "Implement a dark mode toggle for the web application",
    taskID: "SPK - 32",
    priority: "Low",
    startDate: "03-06-2024",
    endDate: "09-06-2024",
    status: "Inprogress",
    statusClass: "badge bg-secondary-transparent text-secondary",
    avatars: [
      { img: "./assets/images/faces/12.jpg" },
      { img: "./assets/images/faces/6.jpg" },
      { additional: "+4" }
    ],
    actions: ["edit", "delete"],
    checked: false
  }
]


}
