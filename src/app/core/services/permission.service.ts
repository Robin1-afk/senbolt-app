import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PermissionService {

  private permissions: string[] = [];
  readonly permissionsLoaded$ = new Subject<void>();
  setPermissions(apiResponse: any) {
    this.permissions = (apiResponse.data as any[]).map((p: any) => p.value);
    console.log('[PermissionService] permisos guardados:', this.permissions);
    this.permissionsLoaded$.next();
  }

  has(permission: string): boolean {
    return this.permissions.includes(permission);
  }
  // Clear all stored permissions
  clear() {
    this.permissions = [];
  }
}
