import { Component, Input } from '@angular/core';
import { SpkDropdownsComponent } from '../reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'spk-kanban-card',
  standalone: true,
  imports: [SpkDropdownsComponent],
  templateUrl: './kanban-card.component.html',
  styleUrl: './kanban-card.component.scss'
})
export class KanbanCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() iconClass: string = '';
  @Input() textcolor: string = '';
  @Input() Bgcolor: string = '';
  @Input() percentageChange: string = '';
  @Input() direction: string = '';
}
