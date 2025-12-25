import { Component } from '@angular/core';
import * as prismCodeData from '../../../shared/prismData/utilities'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-avatars',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './avatars.component.html',
  styleUrl: './avatars.component.scss'
})
export class AvatarsComponent {
  prismCode = prismCodeData;
}
