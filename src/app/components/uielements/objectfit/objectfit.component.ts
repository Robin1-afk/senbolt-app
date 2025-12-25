import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/uielements'
@Component({
  selector: 'app-objectfit',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './objectfit.component.html',
  styleUrls: ['./objectfit.component.scss']
})
export class ObjectfitComponent {
  prsimCodeData: any = PrismCode;
}