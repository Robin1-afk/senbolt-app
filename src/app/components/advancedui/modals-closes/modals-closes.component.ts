import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as prismCodeData from '../../../shared/prismData/advancedUi';
import * as tsCodedata from '../../../shared/prismData/advancedUi';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,CommonModule,ShowcodeCardComponent],
  templateUrl: './modals-closes.component.html',
  styleUrls: ['./modals-closes.component.scss']
})
export class ModalsClosesComponent {
  prismCode = prismCodeData;
  tsCodedata=tsCodedata
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private renderer: Renderer2) {}
 
  ngOnInit(): void {}
}
