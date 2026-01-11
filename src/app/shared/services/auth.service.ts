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

  // 🔐 LOGIN (CON CREDENTIALS)
  login(data: { email: string; password: string }) {
    return this.http.post<LoginResponse>(
      `${this.baseUrl}/login`,
      data,
      { withCredentials: true }
    );
  }

  verifyToken(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/auth/verify`,
      { withCredentials: true }
    );
  }

  // 🔓 LOGOUT (CON CREDENTIALS)
  logout() {
    return this.http.get(
      `${this.baseUrl}/logout`,
      { withCredentials: true }
    ).pipe(
      tap(() => this.cleanSession()),
      catchError(() => {
        this.cleanSession();
        return of(null);
      })
    );
  }

  // 🔄 REFRESH (OBLIGATORIO CON CREDENTIALS)
  refresh(): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(
      `${this.baseUrl}/auth/refresh`,
      {},
      { withCredentials: true }
    );
  }

  private cleanSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
  }
}
