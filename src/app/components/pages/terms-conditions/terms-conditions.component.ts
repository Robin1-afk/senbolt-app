import { Component } from '@angular/core';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [SharedModule, OverlayscrollbarsModule],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent {

}
