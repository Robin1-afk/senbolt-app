import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PermissionService {

  private permissions: string[] = [];

  

  /**
   * Set the permissions for the user.
   * @param perms - The list of permissions the user has.
   */
  setPermissions(perms: string[]) {
    /**
     * The list of permissions the user has.
     */
    this.permissions = perms;
  }
    /**
   * Check if the user has a specific permission.
   * @param objectKey - The permission to check.
   * @returns True if the user has the permission, false otherwise.
   */
  has(objectKey: string): boolean {
    return this.permissions.includes(objectKey);
  }
}
