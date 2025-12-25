import { Component,OnInit } from '@angular/core';
import flatpickr from 'flatpickr';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule,FlatpickrDefaults  } from 'angularx-flatpickr';
import { SpkFlatpickrComponent } from '../../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-date-time-picker',
  standalone: true,
  imports: [SharedModule, FormsModule, FlatpickrModule,SpkFlatpickrComponent],
  templateUrl: './date-time-picker.component.html',
  providers: [
    FlatpickrDefaults,
  ],
  styleUrl: './date-time-picker.component.scss'
})
export class DateTimePickerComponent {
 
}
