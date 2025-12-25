import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as PrismCode from '../../../shared/prismData/uielements';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  prsimCodeData: any = PrismCode;
}