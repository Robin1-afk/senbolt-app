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
import { ApiTestService } from '../../core/services/api-test.service';
import { PermissionApiService } from '../../core/services/permission-api.service';
import { PermissionService } from '../../core/services/permission.service';
import { AuthStorageService } from '../../core/services/auth-storage.service';

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
  private apiTest: ApiTestService,
  @Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,
 private sanitizer: DomSanitizer,
  public authservice: AuthService,
  private router: Router,
  private formBuilder: FormBuilder,
  private renderer: Renderer2,
  private firebaseService: FirebaseService,
  private toastr: ToastrService 
  ,private authStorage: AuthStorageService
  ,private permissionApi: PermissionApiService
  ,private permissionService: PermissionService
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
    email: ['ro21b1in@1example.com', [Validators.required, Validators.email]],
    password: ['secret123', [Validators.required]]
  });
}

errorMessage = ''; // validation _error handle
_error: { name: string; message: string } = { name: '', message: '' }; // for firbase _error handle

clearErrorMessage() {
  this.errorMessage = '';
  this._error = { name: '', message: '' };
}

login(): void  {

  if (this.loginForm.invalid) {
    this.toastr.error('Formulario inválido', 'Xintra');
    return;
  }

  const payload = this.loginForm.value;

  this.authservice.login(payload).subscribe({
  next: (res) => {
    //Guardas sesión
    this.authStorage.saveSession(res.data);
    //Pides permisos
    this.permissionApi.getMyPermissions().subscribe(perms => {
    //Guardas permisos en memoria 
    this.permissionService.setPermissions(perms);
    //Navegas
    this.router.navigate(['/dashboards/sales']);
    });
  },
    error: (err) => {
      
      this.toastr.error(err.error?.message || 'Login error', 'Xintra');
      return;
    }
  });
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

// Submit() {
//   console.log(this.loginForm)
//   if (
//     this.loginForm.controls['username'].value === 'spruko@admin.com' &&
//     this.loginForm.controls['password'].value === 'sprukoadmin'
//   ) {
//     this.router.navigate(['/dashboards/sales']);
//     this.toastr.success('login successful','Xintra', {
//       timeOut: 3000,
//       positionClass: 'toast-top-right',
//     });
//   } else {
//     this.toastr.error('Invalid details','Xintra', {
//       timeOut: 3000,
//       positionClass: 'toast-top-right',
//     });
//   }

// }

}