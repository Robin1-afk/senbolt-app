import { Component, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'spk-dashboard-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-dashboard-card.component.html',
  styleUrl: './spk-dashboard-card.component.scss'
})
export class SpkDashboardCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() linkText: string = '';
  @Input() textcolor: string = '';
  @Input() Bgcolor: string = '';
  @Input() percentageChange: string = '';
  @Input() direction: string = '';

  @Input() icon!: SafeHtml; // Use SafeHtml type for icon

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
