import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss'
})
export class CoverComponent {
  constructor(){
    document.body.classList.add('bg-white');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('bg-white');    
  }
       // Use @ViewChild to get references to the input elements in the template
       @ViewChild('oneInput') oneInput!: ElementRef<HTMLInputElement>;
       @ViewChild('twoInput') twoInput!: ElementRef<HTMLInputElement>;
       @ViewChild('threeInput') threeInput!: ElementRef<HTMLInputElement>;
       @ViewChild('fourInput') fourInput!: ElementRef<HTMLInputElement>;
     
       // Automatically move the focus to the next input field after entering a digit
       onDigitInput(event: KeyboardEvent, nextInput: HTMLInputElement | null): void {
         const inputElement = event.target as HTMLInputElement;
         if (inputElement.value.length > 0) {
           // If a digit is entered, move the focus to the next input field
           if (nextInput) {
             nextInput.focus();
           }
         }
       }
}
