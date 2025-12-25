import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as prismcodeData from '../../../shared/prismData/uielements'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,CommonModule],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  prsimCodeData = prismcodeData;

}
