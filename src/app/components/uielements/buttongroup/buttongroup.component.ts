import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/uielements';
@Component({
  selector: 'app-buttongroup',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './buttongroup.component.html',
  styleUrls: ['./buttongroup.component.scss']
})
export class ButtongroupComponent {
  prsimCodeData: any = PrismCode;
}