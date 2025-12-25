import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as PrismCode from '../../../shared/prismData/uielements'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-images-figures',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './images-figures.component.html',
  styleUrls: ['./images-figures.component.scss']
})
export class ImagesFiguresComponent {
  prsimCodeData: any = PrismCode;
}