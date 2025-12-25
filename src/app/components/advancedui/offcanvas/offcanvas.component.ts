import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as prismCodeData from '../../../shared/prismData/advancedUi'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [SharedModule,CommonModule,ShowcodeCardComponent],
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent {
  closeResult = '';
  prismCode = prismCodeData;

}
