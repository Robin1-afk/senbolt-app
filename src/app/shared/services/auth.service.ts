import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../../core/models/login-response.model';
import { Observable, of, tap, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  authState: any;
  public showLoader: boolean = false;
  private baseUrl = environment.apiUrl;

  // Inject AngularFireAuth and other dependencies
  constructor(
    private http: HttpClient,
    private afu: AngularFireAuth,
    private router: Router,
    public ngZone: NgZone
  ) {
    this.afu.authState.subscribe((auth: any) => {
      this.authState = auth;
    });
  }

  login(data: { email: string; password: string }) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, data);
  }

  verifyToken(): Observable<any> {
    return this.http.get(`${this.baseUrl}/auth/verify`);
  }

  logout() {
    return this.http.get(`${environment.apiUrl}/logout`, {}).pipe(
      tap(() => {
        this.cleanSession();
      }),
      catchError(() => {
        // Incluso si el backend falla, limpiamos sesión
        this.cleanSession();
        return of(null);
      })
    );
  }

  private cleanSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions'); // si tienes permisos en storage
    this.router.navigate(['auth/login']);
  }
}
