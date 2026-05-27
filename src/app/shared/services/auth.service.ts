import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../../core/models/login-response.model';
import { Observable, of, tap, catchError, map } from 'rxjs';
import { AuthStorageService } from '../../core/services/auth-storage.service';

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
    public ngZone: NgZone,
    private storage: AuthStorageService
  ) {
    this.afu.authState.subscribe((auth: any) => {
      this.authState = auth;
    });
  }

  // 🔐 LOGIN (CON CREDENTIALS)
  login(data: { email: string; password: string; force?: boolean }) {
    return this.http.post<LoginResponse>(
      `${this.baseUrl}/auth/login`,
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
      `${this.baseUrl}/auth/logout`,
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
    const refreshToken = this.storage.getRefreshToken();
    return this.http.post<{ data: { access_token: string } }>(
      `${this.baseUrl}/auth/refresh`,
      { refresh_token: refreshToken },
      { withCredentials: true }
    ).pipe(map(res => res.data));
  }

  private cleanSession() {
    this.storage.clear();
  }
}
