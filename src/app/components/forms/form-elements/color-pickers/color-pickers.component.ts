import { Component,ViewChild } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxColorsModule } from 'ngx-colors';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import * as prismCodeData from '../../../../shared/prismData/forms'
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-color-pickers',
  standalone: true,
  imports: [SharedModule,ColorPickerModule,NgxColorsModule,FormsModule,MatIconModule,ShowcodeCardComponent],
  templateUrl: './color-pickers.component.html',
  styleUrl: './color-pickers.component.scss'
})
export class ColorPickersComponent {
  public color: string = '#2889e9';
  public color1: string = '#2889e9';
  public color2: string = '#e920e9';
 


  public onEventLog(event: string, data: any): void {
  }
 
  constructor() { }
  color3:string = '#EC407A';
  input1: string = "#00897B";
  prismCode = prismCodeData;



}

