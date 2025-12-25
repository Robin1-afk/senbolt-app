import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [SharedModule,CommonModule,SpkNgSelectComponent],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.scss'
})
export class ProfileSettingsComponent {

  isToggled1: boolean = false;
  isToggled2: boolean = true;
  isToggled3: boolean = true;
  isToggled4: boolean = false;
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
  Language=[
    {label:"Us English",value:1},
    {label:"Arabic",value:2},
    {label:"Korean",value:3},
  ]
}
