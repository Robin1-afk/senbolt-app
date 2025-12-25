import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-tooltip',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './spk-tooltip.component.html',
  styleUrl: './spk-tooltip.component.scss'
})
export class SpkTooltipComponent {
  @Input() customClass: string = '';
  @Input() Popover: string = '';
}
