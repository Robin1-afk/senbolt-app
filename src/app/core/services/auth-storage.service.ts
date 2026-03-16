import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthStorageService {

  saveSession(data: {
    token: string;
    rol_id: number;
    user: any;
    expires_at: string;
  }) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('rol_id', data.rol_id.toString());
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('expires_at', data.expires_at);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): any | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getRoleId(): number {
    return Number(localStorage.getItem('rol_id'));
  }

  hasSession(): boolean {
    return !!this.getToken();
  }

  clear() {
    localStorage.clear();
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }


  // 🆕 (opcional pero PRO)
  isTokenExpired(): boolean {
    const expiresAt = localStorage.getItem('expires_at');
    if (!expiresAt) return true;

    return new Date(expiresAt).getTime() <= Date.now();
  }
}
