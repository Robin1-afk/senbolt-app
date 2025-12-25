import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-crm-card',
  imports: [],
  templateUrl: './spk-crm-card.component.html',
  styleUrl: './spk-crm-card.component.scss'
})
export class SpkCrmCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() value: string = '';
  @Input() percentageChange: string = '';
  @Input() iconSvg: string = '';
  @Input() iconClass: string = '';
  @Input() iconBgClass: string = '';
  @Input() bg: string = '';
  @Input() arrow: string = '';
  constructor(private sanitizer: DomSanitizer) {}
  @Input() svg!: SafeHtml; 
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
