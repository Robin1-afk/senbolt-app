import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-product-card',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './spk-product-card.component.html',
  styleUrl: './spk-product-card.component.scss'
})
export class SpkProductCardComponent {
  @Input() product: any;
}
