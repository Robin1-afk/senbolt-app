import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-badges',
  standalone: true,
  imports: [],
  templateUrl: './spk-badges.component.html',
  styleUrl: './spk-badges.component.scss'
})
export class SpkBadgesComponent {
@Input() class:string='';
@Input() variant:string='';

}
