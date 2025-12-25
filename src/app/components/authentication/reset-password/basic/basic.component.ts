import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {

  constructor(){
    document.body.classList.add('authentication-background');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('authentication-background');    
  }
  public showPassword: boolean = false;
  toggleClass = 'ri-eye-off-line';
  public showPassword1: boolean = false;
  toggleClass1 = 'ri-eye-off-line';
  public showPassword2: boolean = false;
  toggleClass2 = 'ri-eye-off-line';
  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'ri-eye-line') {
      this.toggleClass = 'ri-eye-off-line';
    } else {
      this.toggleClass = 'ri-eye-line';
    }
  }

  public togglePassword1() {
    this.showPassword1 = !this.showPassword1;
    if (this.toggleClass1 === 'ri-eye-line') {
      this.toggleClass1 = 'ri-eye-off-line';
    } else {
      this.toggleClass1 = 'ri-eye-line';
    }
  }
  public togglePassword2() {
    this.showPassword2 = !this.showPassword2;
    if (this.toggleClass2 === 'ri-eye-line') {
      this.toggleClass2 = 'ri-eye-off-line';
    } else {
      this.toggleClass2 = 'ri-eye-line';
    }
  }
}
