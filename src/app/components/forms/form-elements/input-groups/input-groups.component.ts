import { Component } from '@angular/core';
import * as prismCodeData from '../../../../shared/prismData/forms'
import { SharedModule } from '../../../../shared/shared.module';


@Component({
  selector: 'app-input-groups',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './input-groups.component.html',
  styleUrl: './input-groups.component.scss'
})
export class InputGroupsComponent {
  prismCode = prismCodeData;

}
