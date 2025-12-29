// src/app/core/services/guards/permission.guard.ts 
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PermissionService } from '../permission.service';

/**
 * A guard that checks if the user has the required permission to access a route.
 */
export const permissionGuard: CanActivateFn = (route: import("@angular/router").ActivatedRouteSnapshot) => {
  /**
   * The permission service that provides the current user's permissions.
   */
  const permissionService = inject(PermissionService);
  /**
   * The router that is used to navigate away from the route if the user does not have the required permission.
   */
  const router = inject(Router);

  /**
   * The required permission for the route.
   */
  const requiredPermission = route.data?.['permission'];

  /**
   * Checks if the user has the required permission.
   * If the user has the required permission, returns true.
   * If the user does not have the required permission, navigates away from the route and returns false.
   */
  if (!requiredPermission || permissionService.has(requiredPermission)) {
    return true;
  }

  router.navigate(['/unauthorized']);
  return false;
};
