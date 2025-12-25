import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-css-grid',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './css-grid.component.html',
  styleUrl: './css-grid.component.scss'
})
export class CssGridComponent {
 
}
