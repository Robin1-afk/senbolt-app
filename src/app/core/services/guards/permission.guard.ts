import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PermissionService } from '../permission.service';

export const permissionGuard: CanActivateFn = (route) => {
  const permissionService = inject(PermissionService);
  const router = inject(Router);

  const requiredPermission = route.data?.['permission'];

  // Si la ruta no define permiso → se deja pasar
  if (!requiredPermission) {
    return true;
  }

  // Validar permiso
  if (permissionService.has(requiredPermission)) {
    return true;
  }

  // ❌ No tiene permiso → redirige
  router.navigate(['/error/error401']);
  return false;
};
