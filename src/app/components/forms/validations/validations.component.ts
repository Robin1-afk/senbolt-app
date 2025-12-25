import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
@Component({
  selector: 'app-validations',
  standalone: true,
  imports: [SharedModule,SpkFlatpickrComponent],
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.scss'
})
export class ValidationsComponent {

}
