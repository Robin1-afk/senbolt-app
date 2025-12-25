import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-glance-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-glance-cards.component.html',
})
export class SpkGlanceCardsComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string; // URL or SVG path
  @Input() buttonText!: string;
  @Input() buttonAction!: () => void; // Action for button click
  @Input() bgColorClass!: string; // Class for background color
  @Input() borderColorClass!: string; // Class for border color
  constructor(private sanitizer: DomSanitizer) {}
  @Input() svg!: SafeHtml; 
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
