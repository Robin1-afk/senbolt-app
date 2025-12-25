import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'spk-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-toast.component.html',
  styleUrl: './spk-toast.component.scss'
})
export class SpkToastComponent {

  @Input() classlist = ''; // Content of the toast
  @Input() id = ''; // Content of the toast

}
