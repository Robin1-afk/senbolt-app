import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-overview',
  standalone: true,
  imports: [SharedModule,RouterModule,CommonModule,FormsModule,ReactiveFormsModule,SpkReusableTablesComponent,SpkDropdownsComponent,CdkDropList,CdkDrag],
  templateUrl: './project-overview.component.html',
  styleUrl: './project-overview.component.scss'
})
export class ProjectOverviewComponent {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
  }

projects=[
  {
    checked:true,
    task:"Implement responsive design",
    bg:"primarytint2color",
    status:"Not Started",
    date:"17-Jan-2024"
  },
  {
    checked:false,
    task:"Fix login authentication issue",
    bg:"success",
    status:"Completed",
    date:"17-Jan-2024"
  },
  {
    checked:false,
    task:"Optimize database queries",
    bg:"primarytint2color",
    status:"Not Started",
    date:"18-Feb-2024"
  },
  {
    checked:true,
    task:"Integrate third-party API",
    bg:"warning",
    status:"Pending",
    date:"19-Feb-2024"
  },
  {
    checked:true,
    task:"Create user documentation",
    bg:"primarytint2color",
    status:"Not Started",
    date:"21-Feb-2024"
  },
  {
    checked:false,
    task:"Deploy to staging environment",
    bg:"primary",
    status:"In Progress",
    date:"24-Feb-2024"
  },
  {
    checked:true,
    task:"Conduct security audit",
    bg:"primarytint2color",
    status:"Not Started",
    date:"27-Feb-2024"
  },
]

toggleRowChecked(row: any): void {
  // Check if all rows are selected
  this.allTasksChecked = this.projects.every(row => row.checked);

  // Update the state of the header checkbox accordingly
}
handleToggleSelectAll(checked: any) {
  this.projects.forEach(projects => projects.checked = checked);
  this.allTasksChecked = checked;
}

allTasksChecked: boolean = false;
tasks: any[] = [/* your tasks here */];

toggleSelectAll(event: Event) {
  this.allTasksChecked = (event.target as HTMLInputElement).checked;
}


remove(date:string){
  const data = this.projects.filter((x: { date: string }) => {
    return x.date != date;

  })
  this.projects = data;
}
projectColumn=[
  {header:"",field:"",tableHeadColumn:'todolist-handle-drag'},
  {header:"Task Title",field:"Task Title"},
  {header:"Status",field:"Status"},
  {header:"End Date",field:"End Date"},
  {header:"Action",field:"Action"}
]
}
