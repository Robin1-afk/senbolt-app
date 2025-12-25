import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule,ReactiveFormsModule ,AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,ToastrModule
],
  
  providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public showPassword: boolean = false;

  toggleClass = 'off-line';
  active="Angular";
  firestoreModule: any;
  databaseModule: any;
  authModule: any;
  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'line') {
      this.toggleClass = 'off-line';
    } else {
      this.toggleClass = 'line';
    }
}
disabled = '';
constructor(
  @Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,
 private sanitizer: DomSanitizer,
  public authservice: AuthService,
  private router: Router,
  private formBuilder: FormBuilder,
  private renderer: Renderer2,
  private firebaseService: FirebaseService,
  private toastr: ToastrService 
) {
  // AngularFireModule.initializeApp(environment.firebase);
  document.body.classList.add('authentication-background');
   const bodyElement = this.renderer.selectRootElement('body', true);
  //  this.renderer.setAttribute(bodyElement, 'class', 'cover1 justify-center');
  
}
// firestoreModule = this.firebaseService.getFirestore();
// databaseModule = this.firebaseService.getDatabase();
// authModule = this.firebaseService.getAuth();

ngOnDestroy(): void {
  document.body.classList.remove('authentication-background');    
}
ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    username: ['spruko@admin.com', [Validators.required, Validators.email]],
    password: ['sprukoadmin', Validators.required],
  });
// Initialize Firebase services here
this.firestoreModule = this.firebaseService.getFirestore();
this.databaseModule = this.firebaseService.getDatabase();
this.authModule = this.firebaseService.getAuth();
}

// firebase

email = 'spruko@admin.com';
password = 'sprukoadmin';
errorMessage = ''; // validation _error handle
_error: { name: string; message: string } = { name: '', message: '' }; // for firbase _error handle

clearErrorMessage() {
  this.errorMessage = '';
  this._error = { name: '', message: '' };
}

login() {
  // this.disabled = "btn-loading"
  this.clearErrorMessage();
  if (this.validateForm(this.email, this.password)) {
    this.authservice
      .loginWithEmail(this.email, this.password)
      .then(() => {
        this.router.navigate(['/dashboards/sales']);
        console.clear();
        this.toastr.success('login successful','Xintra', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      })
      .catch((_error: any) => {
        this._error = _error;
        this.router.navigate(['/']);
      });
   
  }
  else {
    this.toastr.error('Invalid details','Xintra', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }
}

validateForm(email: string, password: string) {
  if (email.length === 0) {
    this.errorMessage = 'please enter email id';
    return false;
  }

  if (password.length === 0) {
    this.errorMessage = 'please enter password';
    return false;
  }

  if (password.length < 6) {
    this.errorMessage = 'password should be at least 6 char';
    return false;
  }

  this.errorMessage = '';
  return true;
  
}

//angular
public loginForm!: FormGroup;
public error: any = '';

get form() {
  return this.loginForm.controls;
}

Submit() {
  console.log(this.loginForm)
  if (
    this.loginForm.controls['username'].value === 'spruko@admin.com' &&
    this.loginForm.controls['password'].value === 'sprukoadmin'
  ) {
    this.router.navigate(['/dashboards/sales']);
    this.toastr.success('login successful','Xintra', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  } else {
    this.toastr.error('Invalid details','Xintra', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }

}

}