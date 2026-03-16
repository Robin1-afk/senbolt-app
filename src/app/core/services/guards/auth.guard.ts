import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.verifyToken().pipe(
    map(() => true),
    catchError(() => {
      authService.logout();
      router.navigate(['auth/login']);
      return of(false);
    })
  );
};
