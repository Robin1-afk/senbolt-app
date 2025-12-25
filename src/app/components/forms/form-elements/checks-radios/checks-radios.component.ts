import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ToggleBtnDirective } from '../../../../shared/directives/toggle-btn.directive';
import * as prismCodeData from '../../../../shared/prismData/forms'

@Component({
  selector: 'app-checks-radios',
  standalone: true,
  imports: [SharedModule, CommonModule,FormsModule,ShowcodeCardComponent,ToggleBtnDirective],
  templateUrl: './checks-radios.component.html',
  styleUrl: './checks-radios.component.scss',
})
export class ChecksRadiosComponent {
  prismCode = prismCodeData;
}
