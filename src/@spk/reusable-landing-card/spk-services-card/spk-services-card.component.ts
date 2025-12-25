import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-services-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-services-card.component.html',
  styleUrl: './spk-services-card.component.scss'
})
export class SpkServicesCardComponent {
  @Input() bgColor: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  constructor(private sanitizer: DomSanitizer) {}
  @Input() svg!: SafeHtml; 
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
