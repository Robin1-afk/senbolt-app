import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthStorageService {

  saveSession(data: any) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('rol_id', data.rol_id.toString());
    localStorage.setItem('user', data.user);
    localStorage.setItem('expires_at', data.expires_at);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRoleId(): number {
    return Number(localStorage.getItem('rol_id'));
  }

  clear() {
    localStorage.clear();
  }
}
