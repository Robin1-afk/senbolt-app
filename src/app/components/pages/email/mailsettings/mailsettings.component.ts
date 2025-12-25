import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpkDropdownsComponent } from '../../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkNgSelectComponent } from '../../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SharedModule } from '../../../../shared/shared.module';
@Component({
  selector: 'app-mailsettings',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule,CommonModule,SpkNgSelectComponent,SpkDropdownsComponent],
  templateUrl: './mailsettings.component.html',
  styleUrl: './mailsettings.component.scss'
})
export class MailsettingsComponent {
 
  Selection = [
    { value: 1, label: 'English' },
    { value: 2, label: 'French' },
    { value: 3, label: 'Arabic' },
    { value: 4, label: 'Hindi' },
  
];
url1: string = ''; // Assuming url1 is a property in your component

handleFileInput(event: any): void {
  const file = event.target.files[0];
  if (file) { 
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.url1 = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
isToggled: boolean = true;
  isToggled1: boolean = false;
  isToggled2: boolean = true;
  isToggled3: boolean = true;
  isToggled4: boolean = true;
  isToggled5: boolean = true;
  isToggled6: boolean = true;
  isToggled7: boolean = false;
  isToggled8: boolean = false;
  isToggled9: boolean = false;
  isToggled10: boolean = false;
  isToggled11: boolean = false;

  
  toggle() {
    this.isToggled = !this.isToggled;
  }
  toggle1() {
    this.isToggled1 = !this.isToggled1;
  }
  toggle2() {
    this.isToggled2 = !this.isToggled2;
  }
  toggle3() {
    this.isToggled3 = !this.isToggled3;
  }
  toggle4() {
    this.isToggled4 = !this.isToggled4;
  }
  toggle5() {
    this.isToggled5 = !this.isToggled5;
  }
  toggle6() {
    this.isToggled6 = !this.isToggled6;
  }
  toggle7() {
    this.isToggled7 = !this.isToggled7;
  }
  toggle8() {
    this.isToggled8 = !this.isToggled8;
  }
  toggle9() {
    this.isToggled9 = !this.isToggled9;
  }
  toggle10() {
    this.isToggled10 = !this.isToggled10;
  }
  toggle11() {
    this.isToggled11 = !this.isToggled11;
  }
  Pages=[
  {label:"10",value:1},
  {label:"50",value:1},
  {label:"100",value:1},
  {label:"150",value:1},
]
languages=[
  {value:1,label:'English'},
  {value:2,label:'French'},
  {value:3,label:'Arabic'},
  {value:4,label:'Hindi'},

]
selected=[1]
Attempts=[
  {value:1,label:'3 Attempts'},
  {value:2,label:'5 Attempts'},
  {value:3,label:'10 Attempts'},
  {value:4,label:'20 Attempts'},
]
Days=[
  {value:1,label:'1 Day'},
  {value:2,label:'1 Hour'},
  {value:3,label:'1 Month'},
  {value:4,label:'1 Year'},
]
}
