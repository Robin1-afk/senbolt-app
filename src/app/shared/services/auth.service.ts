import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../../core/models/login-response.model';

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
}
