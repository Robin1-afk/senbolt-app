import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-collapse-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-collapse-card.component.html',
  styleUrl: './spk-collapse-card.component.scss'
})
export class SpkCollapseCardComponent {
  @Input() title: string = 'Card Title';
  @Input() subtitle?: string = '';
  @Input() content?: string = 'Default card content';
  @Input() isCollapsible: boolean = false;
  @Input() isClosable: boolean = false;
  @Input() isFullscreenable: boolean = false;

  isCollapsed: boolean = false;
  isClosed: boolean = false;
  isFullscreen: boolean = false;

  collapseId!: string; // Unique ID for each card
  collapseTarget!: string;

  ngOnInit() {
    this.collapseId = `collapse-${Math.random().toString(36).substr(2, 9)}`;
    this.collapseTarget = `#${this.collapseId}`;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeCard() {
    this.isClosed = true;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}
