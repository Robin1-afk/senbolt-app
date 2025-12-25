import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-showcode-card',
  templateUrl: './showcode-card.component.html',
  styleUrl: './showcode-card.component.scss',
  standalone: true,
  imports : [CommonModule]
})
export class ShowcodeCardComponent {

  @Input('title') title!:string;
  @Input('prism') prism!:string;
  @Input('tsCode') tsCode!:string;
  @Input('classbody') classbody!:string;
  @Input('boxClass') boxClass!:string;
  @Input('boxHeader') boxHeader?:string;
  toggleStatus = false;

  toggleShowCode(){
    this.toggleStatus = !this.toggleStatus;
  }
  hasTsCode = false;
}
