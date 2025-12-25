import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropzoneComponent , DropzoneDirective,
  DropzoneConfigInterface, 
  DropzoneModule,
  DROPZONE_CONFIG} from 'ngx-dropzone-wrapper';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};
import { SharedModule } from '../../../../shared/shared.module';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SortablejsModule} from '@maksim_m/ngx-sortablejs'; 
import { FlatpickrDefaults } from 'angularx-flatpickr';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import flatpickr from 'flatpickr'
import { SpkKanbanDraggableCardsComponent } from '../../../../../@spk/reusable-apps/spk-kanban-draggable-cards/spk-kanban-draggable-cards.component';
import { KanbanCardComponent } from "../../../../../@spk/spk-kanban-card/kanban-card.component";
import { SpkFlatpickrComponent } from '../../../../../@spk/spk-flatpickr/spk-flatpickr.component';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [SharedModule,
    SortablejsModule,
    NgSelectModule,
    FilePondModule,
    OverlayscrollbarsModule,
    FormsModule,
    ReactiveFormsModule,
    DropzoneModule,
    SpkNgSelectComponent,
    SpkKanbanDraggableCardsComponent,SpkFlatpickrComponent],
   providers: [FlatpickrDefaults,{
    provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
  }],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent {
  constructor(private renderer:Renderer2,private el:ElementRef) {
  }
 
  // selectedDate: Date | null = null; 
  flatpickrOptions: any = {
    inline: true,
   
  };
  // flatpickrOptions: FlatpickrOptions;

  ngOnInit() {
   
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };
  
    flatpickr('#targetDate', this.flatpickrOptions)
  }
  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };
  
  pondFiles: FilePond.FilePondOptions["files"] = [
  
  ];
  
  pondHandleInit() {
  }
  
  pondHandleAddFile(event: any) {

  }
  
  pondHandleActivateFile(event: any) {
  }
     // Define sortable options
    //  normalOptions = {
    //   animation: 150,
    //   group: 'shared',
    //   // Add other options here as needed
    // };
    normalList1 = []; 
    normalList2 = []; 
    normalList3 = []; 
    normalList4 = []; 
    normalList5 = []; 




    normalOptions: any = {
         animation: 150,
      group: 'shared',
      // Your sortable options
      onEnd: (event: any) => this.handleDragEnd(event)
    };
    normalOptions1: any = {
      animation: 150,
   group: 'shared',
   // Your sortable options
   onEnd: (event: any) => this.handleDragEnd1(event)
 };
 normalOptions2: any = {
  animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd2(event)
};
normalOptions3: any = {
  animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd3(event)
};
normalOptions4: any = {
  animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd4(event)
};
   
ngAfterViewInit() {
  // Optionally, check the initial state of cards here
  this.handleDragEnd(event);
}
    handleDragEnd(event: any): void {
      const container = document.getElementById('new-tasks-draggable');
      const cardElements = document.querySelectorAll('#new-tasks-draggable .card');
      this.isHidden = cardElements.length === 0; // Hide button if no cards are left
      if (container) {
        // Check if there are no child cards left
        if (container.children.length === 0) {
          container.classList.add('task-Null');
        } else {
          container.classList.remove('task-Null');
        }
      }
    }
    handleDragEnd1(event: any): void {
      const container1 = document.getElementById('todo-tasks-draggable');
      const cardElements = document.querySelectorAll('#todo-tasks-draggable .card');
      this.isHidden = cardElements.length === 0; // Hide button if no cards are left
      if (container1) {
        // Check if there are no child cards left
        if (container1.children.length === 0) {
          container1.classList.add('task-Null');
        } else {
          container1.classList.remove('task-Null');
        }
      }
    }
    handleDragEnd2(event: any): void {
      const container2 = document.getElementById('inprogress-tasks-draggable');
      const cardElements = document.querySelectorAll('#inprogress-tasks-draggable .card');
      this.isHidden = cardElements.length === 0; // Hide button if no cards are left
      if (container2) {
        // Check if there are no child cards left
        if (container2.children.length === 0) {
          container2.classList.add('task-Null');
        } else {
          container2.classList.remove('task-Null');
        }
      }
    }
    isHidden:boolean=false;
handleDragEnd3(event: any): void {
  const container3 = document.getElementById('inreview-tasks-draggable');
  if (container3) {
    // Check if there are no child cards left
    if (container3.children.length === 0) {
      container3.classList.add('task-Null');
    } else {
      container3.classList.remove('task-Null');
    }
  }
  const cardElements = document.querySelectorAll('#inreview-tasks-draggable .card');
  this.isHidden = cardElements.length === 0; // Hide button if no cards are left
}


handleDragEnd4(event: any): void {
  const container4 = document.getElementById('completed-tasks-draggable');  
  const cardElements = document.querySelectorAll('#completed-tasks-draggable .card');
  this.isHidden = cardElements.length === 0; // Hide button if no cards are left
  if (container4) {
    // Check if there are no child cards left
    if (container4.children.length === 0) {
      container4.classList.add('task-Null');
    } else {
      container4.classList.remove('task-Null');
    }
  }
}
Project=[
  {label:"Sort By",value:1},
  {label:"Newest",value:2},
  {label:"Date Added",value:3},
  {label:"Type",value:4},
  {label:"A - Z",value:5},

]
Assigned=[
  {label:"Angelina May",value:1},
  {label:"Sarah Ruth",value:2},
  {label:"Hercules Jhon",value:3},
  {label:"Mayor Kim",value:4},
]
selected=[1,2]
Tags=[
  {label:"Select Tag",value:1},
  {label:"UI/UX",value:2},
  {label:"Marketing",value:3},
  {label:"Finance",value:4},
  {label:"Designing",value:5},
  {label:"Admin",value:6},
  {label:"Authentication",value:7},
  {label:"Product",value:8},
  {label:"Development",value:7},
]
newTasks = [
  {
      id: '#SHG - 01',
      idBg:"primarytint1color",
      title: 'Update Website Content',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [{ type: 'info', label: 'Development' }],
      priority: 'High Priority',
      status: 'In Progress',
      avatars: ['./assets/images/faces/1.jpg', './assets/images/faces/2.jpg', './assets/images/faces/3.jpg', './assets/images/faces/4.jpg'],
      likes: 11,
      comments: 2,
      priorityBg:"primary"
  },
  {
      id: '#SHG - 02',
      idBg:"primarytint1color",
      title: 'Implement new feature for Karban app.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [{ type: 'info', label: 'Development' }],
      priority: 'Low',
      status: 'In Progress',
      avatars: ['./assets/images/faces/1.jpg', './assets/images/faces/2.jpg', './assets/images/faces/3.jpg', './assets/images/faces/4.jpg'],
      likes: 15,
      comments: 3,
      priorityBg:"warning"

  },
  {
      id: '#SHG - 03',
      idBg:"primarytint1color",
      title: 'Develop new feature for Karban app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [
          { type: 'primarytint3color', label: 'Development' },
          { type: 'primarytint2color', label: 'UI/UX' },
      ],
      priority: 'Low',
      status: 'In Progress',
      avatars: ['./assets/images/faces/5.jpg', './assets/images/faces/9.jpg'],
      likes: 25,
      comments: 5,
      priorityBg:"warning"

  },
  {
      id: '#SHG - 04',
      idBg:"primarytint1color",
      title: 'Design multi-usage landing page.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [
          { type: 'info', label: 'Development' },
          { type: 'primarytint3color', label: 'Designing' },
      ],
      priority: 'Low',
      status: 'In Progress',
      avatars: ['./assets/images/faces/5.jpg', './assets/images/faces/9.jpg'],
      likes: 25,
      comments: 5,
      priorityBg:"warning"

  },
];
todoTasks = [
  {
      id: '#SHG - 05',
      idBg:"info",
      title: 'Adding Authentication Pages.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      priority: 'Low',
      status: 'In Progress',
      avatars: ['./assets/images/faces/4.jpg', './assets/images/faces/13.jpg', './assets/images/faces/5.jpg'],
      likes: 8,
      comments: 4,
      badges: [
          { label: 'Authentication', type: 'primarytint2color' }
      ],
      priorityBg:"warning"
  },
  {
      id: '#SHG - 06',
      idBg:"info",
      title: 'New Marketing Campaign Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      priority: 'High',
      status: 'In Progress',
      avatars: ['./assets/images/faces/4.jpg', './assets/images/faces/13.jpg', './assets/images/faces/5.jpg'],
      likes: 23,
      comments: 12,
      badges: [
          {  label: 'Marketing', type: 'primarytint3color' }
      ],
      priorityBg:"primary"
  },
  // Add more tasks as needed
];
inprogressTasks = [
  {
      id: '#SHG - 07',
      idBg:"primarytint1color",
      title: 'Developing Calendar & Mail pages.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [
          { label: 'UI Design', type: 'primarytint1color' },
          { label: 'Development', type: 'info' },
      ],
      priority: 'Medium',
      status: 'In Progress',
      avatars: ['./assets/images/faces/7.jpg', './assets/images/faces/10.jpg', './assets/images/faces/11.jpg'],
      likes: 10,
      comments: 18,
      priorityBg:"info"
  },
  {
      id: '#SHG - 08',
      idBg:"primarytint1color",
      title: 'Project Design in Figma and Sketch',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      badges: [
          { label: 'Design', type: 'primarytint3color' },
      ],
      priority: 'Medium',
      status: 'In Progress',
      avatars: ['./assets/images/faces/13.jpg', './assets/images/faces/6.jpg'],
      likes: 5,
      comments: 2,
      priorityBg:"info"

  },
  // Add more tasks as needed
];
completedTasks = [
  {
    id: '#SHG - 11',
    idBg:"primarytint1color",
    status: 'Review',
    title: 'New Project Update',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'High',
    avatars: ['./assets/images/faces/6.jpg', './assets/images/faces/13.jpg'],
    likes: 9,
    comments: 35,
    badges: [
      { label: 'Review', type: 'primarytint3color' },
  ],
  priorityBg:"primary"
  },
  {
    id: '#SHG - 12',
    idBg:"primarytint1color",
    status: 'Development',
    title: 'React JS New Version Update',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'High',
    avatars: ['./assets/images/faces/10.jpg', './assets/images/faces/11.jpg', './assets/images/faces/1.jpg'],
    likes: 22,
    comments: 12,
    badges: [
      { label: 'Development', type: 'primarytint3color' },
  ],
  priorityBg:"primary"
  },
  {
    id: '#SHG - 13',
    idBg:"primarytint1color",
    status: 'Discussion',
    title: 'Project Discussion with Client',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    priority: 'High',
    avatars: ['./assets/images/faces/4.jpg'],
    likes: 11,
    comments: 12,
    badges: [
      { label: 'Discussion', type: 'primarytint3color' },
  ],
  priorityBg:"primary"
  }
  // Add more tasks as needed
];
}
