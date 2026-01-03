import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PermissionService {

  // Store the user's permissions
  private permissions: string[] = [];
  // Set permissions based on API response
  setPermissions(apiResponse: any) {
    this.permissions = apiResponse.data.has_permission.map((p: any) => p.value);
        console.log('[PermissionService] permisos guardados:', this.permissions);

  }
  // Check if a specific permission exists
  has(permission: string): boolean {
    return this.permissions.includes(permission);
  }
  // Clear all stored permissions
  clear() {
    this.permissions = [];
  }
}
