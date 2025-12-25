import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-alerts.component.html',
  styleUrl: './spk-alerts.component.scss'
})
export class SpkAlertsComponent {
  @Input() alertClass: string = ''; // Default alert class
  @Input() message: string = '';
  @Input() avatarClass: string = '';
  @Input() icon: SafeHtml = '';
  @Input() image: string | null = null; 
  visible: boolean = true;

  dismiss(): void {
    this.visible = false;
  }
}
