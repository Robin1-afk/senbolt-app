import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import * as prsimCodeData from '../../../shared/prismData/uielements'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-spinners',
  standalone: true,
  imports: [SharedModule,CommonModule,ShowcodeCardComponent],
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.scss']
})
export class SpinnersComponent {
  prsimCodeData = prsimCodeData;
  colors: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  spinnerTypes: string[] = ['border', 'grow'];
}
