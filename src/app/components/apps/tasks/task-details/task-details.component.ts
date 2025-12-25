import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpkReusableTablesComponent } from '../../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule,SpkReusableTablesComponent,SharedModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
  tasks=[
    {
      id:"1",
      src:"./assets/images/media/file-manager/1.png",
      storage:"0.45MB",
      project:"Full Project",
      avatarClass:'p-2'
    },
    {
      id:"2",
      src:"./assets/images/media/file-manager/3.png",
      storage:"0.99MB",
      project:"assets.zip"
    },
    {
      id:"3",
      src:"./assets/images/media/file-manager/1.png",
      storage:"245KB",
      project:"image-1.png",
      avatarClass:'p-2'
  
    },
    {
      id:"4",
      src:"./assets/images/media/file-manager/3.png",
      storage:"2MB",
      project:"documentation.zip"
    },
    {
      id:"5",
      src:"./assets/images/media/file-manager/3.png",
      storage:"3.46MB",
      project:"landing.zip"
    }
  ]
  remove(id:string){
    const data = this.tasks.filter((x: { id: string }) => {
      return x.id != id;
  
    })
    this.tasks = data;
  
  }
  task = {
    id: 'SPK - 456',
    projectName: 'New Product Launch Strategy',
    assignedBy: {
      name: 'Emily Watson',
      avatar: './assets/images/faces/11.jpg',
    },
    progress: 45,
    status: 'Inprogress',
    priority: 'High',
    startDate: '13, June 2024',
    endDate: '31, Dec 2024',
    assignedTo: [
      { name: 'Simon', avatar: './assets/images/faces/4.jpg' },
      { name: 'Sasha', avatar: './assets/images/faces/12.jpg' },
      { name: 'Anagha', avatar: './assets/images/faces/5.jpg' },
      { name: 'Hishen', avatar: './assets/images/faces/6.jpg' },
    ],
    lastUpdated: { date: '18, June 2024', time: '10:30' },
  };
}