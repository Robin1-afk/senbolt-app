import { Component, AfterViewInit, ElementRef } from '@angular/core';
import Cleave from 'cleave.js';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import { SharedModule } from '../../../../shared/shared.module';
@Component({
  selector: 'app-input-masks',
  standalone: true,
  imports: [SharedModule, NgxCleaveDirectiveModule,],
  templateUrl: './input-masks.component.html',
  styleUrl: './input-masks.component.scss',
})
export class InputMasksComponent {
  ngAfterViewInit(): void {
    /* date format*/
    const cleaveInstance = new Cleave('.date-format', {
      date: true,
      delimiter: '-',
      datePattern: ['d', 'm', 'Y'],
    });
    /* date format-1 */
    const dt2 = new Cleave('.date-format-1', {
      date: true,
      delimiter: '-',
      datePattern: ['m', 'd', 'Y'],
    });
    /* date format-2 */
    const cleave = new Cleave('.date-format-2', {
      date: true,
      datePattern: ['m', 'y'],
    });

    /* number formatting */
    var n1 = new Cleave('.number-format', {
      numeral: true,
      numeralThousandsGroupStyle: 'lakh',
    });
    /* time format-1 */
    const t1 = new Cleave('.time-format-1', {
      time: true,
      timePattern: ['h', 'm', 's'],
    });
    /* time format-2 */
    const t2 = new Cleave('.time-format-2', {
      time: true,
      timePattern: ['h', 'm'],
    });
    /* formatting into blocks */
    const c1 = new Cleave('.formatting-blocks', {
      blocks: [4, 3, 3, 4],
      uppercase: true,
    });
    /* delimeter */
    const d1 = new Cleave('.delimiter', {
      delimiter: '·',
      blocks: [3, 3, 3],
      uppercase: true,
    });
    /* multiple delimeter */
    const d2 = new Cleave('.delimiters', {
      delimiters: ['/', '/', '-'],
      blocks: [3, 3, 3, 2],
      uppercase: true,
    });

    /* prefix */
    const p1 = new Cleave('.prefix-element', {
      prefix: 'Prefix',
      delimiter: '-',
      blocks: [6, 4, 4, 4],
      uppercase: true,
    });

    /* phone number */
    const pn = new Cleave('.phone-number', {
      blocks: [2, 4, 3, 4],
    });
  }
}
