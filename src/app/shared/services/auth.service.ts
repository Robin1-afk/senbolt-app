import { Injectable,NgZone } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: any;
  afAuth: any;
  afs: any;
  public showLoader:boolean=false;

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private afu: AngularFireAuth, private router: Router,public ngZone: NgZone) {
    this.afu.authState.subscribe((auth: any) => {
      this.authState = auth;
    });

  }
  login(data: { email: string; password: string }) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
