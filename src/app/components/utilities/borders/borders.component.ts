import { Component } from '@angular/core';
import * as prismcodeData from '../../../shared/prismData/utilities'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-borders',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './borders.component.html',
  styleUrl: './borders.component.scss'
})
export class BordersComponent {
prismCode = prismcodeData;
}
