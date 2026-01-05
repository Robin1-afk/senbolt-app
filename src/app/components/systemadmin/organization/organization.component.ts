import { Component } from '@angular/core';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SharedModule } from '../../../shared/shared.module';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss'
})
export class OrganizationComponent {

}