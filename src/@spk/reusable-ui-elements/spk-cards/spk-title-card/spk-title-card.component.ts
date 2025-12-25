import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-title-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './spk-title-card.component.html',
  styleUrl: './spk-title-card.component.scss'
})
export class SpkTitleCardComponent {
  @Input() CustomClass: string = ''; // Custom class for the box
  @Input() Imagetag: boolean = false; // Show or hide image
  @Input() Imgsrc: string = ''; // Image source
  @Input() Anchortagbefore: boolean = false; // Show anchor tag before header
  @Input() AnchortagNavigate: string = ''; // Anchor navigation
  @Input() Cardheader: boolean = false; // Show or hide card header
  @Input() CustomHeaderClass: string = ''; // Custom header class
  @Input() Title: string = ''; // Card title
  @Input() Linktag: boolean = false; // Show or hide link
  @Input() Navigate: string = ''; // Navigation URL for the link
  @Input() LinkClass: string = ''; // Custom class for the link
  @Input() Icontag: boolean = false; // Show or hide icon in link
  @Input() Icon: string = ''; // Icon class
  @Input() Cardfooter: boolean = false; // Show or hide footer
  @Input() CustomFooterClass: string = ''; // Custom footer class
  @Input() ButtonTag: boolean = false; // Show or hide button
  @Input() TwoButtonTag: boolean = false; // Show or hide button
  @Input() Footertext: string = ''; // Footer text
  @Input() CustomBodyClass: string = ''; // Custom body class
  @Output() OnclickFunc: EventEmitter<void> = new EventEmitter<void>(); // Click event for link

  handleClick() {
    this.OnclickFunc.emit(); // Emit click event
  }
}
