import { Component } from '@angular/core';
import * as prismCodeData from '../../../../shared/prismData/forms'
import { NgSelectModule } from '@ng-select/ng-select';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent,NgSelectModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  prismCode = prismCodeData;

}
