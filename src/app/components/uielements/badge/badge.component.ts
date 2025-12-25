import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from "../../../shared/components/showcode-card/showcode-card.component";
import * as PrismCode from '../../../shared/prismData/uielements';
@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  prsimCodeData: any = PrismCode;
  gradientBadges=[
    { text: 'Primary', class: 'bg-primary-gradient' },
    { text: 'Secondary', class: 'bg-secondary-gradient' },
    { text: 'Success', class: 'bg-success-gradient' },
    { text: 'Danger', class: 'bg-danger-gradient' },
    { text: 'Warning', class: 'bg-warning-gradient' },
    { text: 'Info', class: 'bg-info-gradient' },
    { text: 'Orange', class: 'bg-orange-gradient' },
    { text: 'Purple', class: 'bg-purple-gradient' }
  ]
  outlineBadges=[
    { text: 'Primary', class: 'primary' },
    { text: 'Secondary', class: 'secondary' },
    { text: 'Success', class: 'success' },
    { text: 'Danger', class: 'danger' },
    { text: 'Warning', class: 'warning' },
    { text: 'Info', class: 'info' },
    { text: 'light ', class: 'light text-dark' },
    { text: 'dark', class: 'dark' }
  ]
  pillBadges=[
    { text: 'Primary', class: 'badge !rounded-full text-white bg-primary' },
    { text: 'Secondary', class: 'badge !rounded-full text-white bg-secondary' },
    { text: 'Success', class: 'badge !rounded-full text-white bg-success' },
    { text: 'Danger', class: 'badge !rounded-full text-white bg-danger' },
    { text: 'Warning', class: 'badge !rounded-full text-white bg-warning' },
    { text: 'Info', class: 'badge !rounded-full text-white bg-info' },
    { text: 'Light', class: 'badge !rounded-full  bg-light text-dark' },
    { text: 'Dark', class: 'badge !rounded-full text-white bg-dark text-white' }
  ]
  lightpillBadges=[
    { text: 'Primary', class: 'badge !rounded-full bg-primary/10 text-primary' },
    { text: 'Secondary', class: 'badge !rounded-full bg-secondary/10 text-secondary' },
    { text: 'Success', class: 'badge !rounded-full bg-success/10 text-success' },
    { text: 'Danger', class: 'badge !rounded-full bg-danger/10 text-danger' },
    { text: 'Warning', class: 'badge !rounded-full bg-warning/10 text-warning' },
    { text: 'Info', class: 'badge !rounded-full bg-info/10 text-info' },
    { text: 'Light', class: 'badge !rounded-full bg-light text-dark' },
    { text: 'Dark', class: 'badge !rounded-full bg-dark/10 text-dark' }
  ]
}