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
import Swal from 'sweetalert2';

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

login(force: boolean = false): void {

  if (this.loginForm.invalid) {
    this.toastr.error('Formulario inválido', 'Xintra');
    return;
  }

  const payload = { ...this.loginForm.value, force };

  this.authservice.login(payload).subscribe({
    next: (res) => {
      this.authStorage.saveSession(res.data);
      this.permissionApi.getMyPermissions().subscribe({
        next: (perms) => {
          this.permissionService.setPermissions(perms);
          this.router.navigate(['/systemadmin/users']);
        },
        error: () => {
          this.router.navigate(['/systemadmin/users']);
        }
      });
    },
    error: (err) => {
      const msg: string = err.error?.message || '';

      if (err.status === 409 && msg === 'Sesión activa en otro dispositivo.') {
        Swal.fire({
          title: 'Sesión activa',
          text: 'Ya tienes una sesión iniciada en otro dispositivo. ¿Deseas cerrarla y continuar aquí?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, cerrar y continuar',
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        }).then((result) => {
          if (result.isConfirmed) {
            this.login(true);
          }
        });
      } else {
        this.toastr.error(msg || 'Error al iniciar sesión', 'Xintra');
      }
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