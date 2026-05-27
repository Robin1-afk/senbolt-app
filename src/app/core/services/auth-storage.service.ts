import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthStorageService {

  saveSession(data: {
    access_token: string;
    refresh_token: string;
    rol_id: number;
    email: string;
    expires_at: string;
  }) {
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
    localStorage.setItem('rol_id', data.rol_id.toString());
    localStorage.setItem('user', data.email);
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

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  isTokenExpired(): boolean {
    const expiresAt = localStorage.getItem('expires_at');
    if (!expiresAt) return true;

    return new Date(expiresAt).getTime() <= Date.now();
  }
}
