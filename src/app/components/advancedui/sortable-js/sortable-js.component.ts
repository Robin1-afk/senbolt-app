import { Component } from '@angular/core';
import { CdkDrag, CdkDropList, CdkDragHandle, DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { SortablejsModule } from '@maksim_m/ngx-sortablejs';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-sortable-js',
  standalone: true,
  imports: [SharedModule,CdkDrag,CdkDropList,CdkDragHandle,DragDropModule ,SortablejsModule],
  templateUrl: './sortable-js.component.html',
  styleUrl: './sortable-js.component.scss'
})
export class SortableJsComponent {
  isCollapsed = false;
  isCollapsed1 = false;
  closeResult: string | undefined;

  ngOnInit(): void {}
  fullScreenToggle() {
    document
      .querySelector('.fullscreentoggle')
      ?.classList.toggle('card-fullscreen');
  }

    // Define sortable options
    normalOptions = {
      animation: 150,
      group: 'shared',
      // Add other options here as needed
    };
    // Handle sort end event
    onSortEnd(event: any) { }
    normalList1:any
    normalList2:any
    normalList3:any
    normalList4:any
    normalList5:any
    normalList6:any
    normalList7:any
    normalList8:any
  items: string[] = [
    'Design logo for fictional company',
    'Draft 300-word blog post',
    'Create project plan with milestones',
    'Develop sample interview questions',
    'Generate customer feedback for product',
    'Write email template for newsletter'
  ];
  leftItems: string[] = [
    'Sketch a website homepage',
    'Plan team-building activity',
    'Summarize meeting minutes',
    'Code a simple webpage',
    'Create survey questions',
    'Schedule team meeting'
  ];

  rightItems: string[] = [
    'Edit product description',
    'Brainstorm marketing ideas',
    'Write slogan for brand',
    'Update contact information',
    'Proofread blog post',
    'Analyze sales data'
  ];

  list1 = [
    'Analyze market trends.',
    'Edit video content.',
    'Plan social media calendar.',
    'Update company policies.',
    'Compile sales reports.',
    'Schedule client calls.',
  ];

  list2 = [
    {value: 'Analyze market trends.', disabled: false},
    {value: 'Edit video content.', disabled: false },
    {value: 'Plan social media calendar.', disabled: true, class:'filtered'},
    {value: 'Update company policies.', disabled: false},
    {value: 'Compile sales reports.', disabled: false},
    {value: 'Schedule client calls.', disabled: false},
  ];
  
  list3 = [
    'Design logo for fictional company',
    'Draft 300-word blog post',
    'Create project plan with milestones',
    'Develop sample interview questions',
    'Generate customer feedback for product.',
    'Write email template for newsletter.',
  ];

  list4 = [
    'Design logo for fictional company',
    'Draft 300-word blog post',  
    'Create project plan with milestones',
    'Develop sample interview questions',
    'Generate customer feedback for product.',
    'Write email template for newsletter.',
  ];

  list5 = ['Item-1','Item-2','Item-3','Item-4','Item-5','Item-6','Item-7','Item-8','Item-9','Item-10'];

  numbers = [1, 2, 3, 4, 5, 6];

  
  sortPredicate(index: number, item: CdkDrag<number>) {
    return (index + 1) % 2 === item.data % 2;
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  onDrop1(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onDrop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list1, event.previousIndex, event.currentIndex);
  }
 
  onDrop3(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list2, event.previousIndex, event.currentIndex);
  }

  onDrop4(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list5, event.previousIndex, event.currentIndex);
  }

  onDrop5(event: CdkDragDrop<unknown>) {
    moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
  }
}
