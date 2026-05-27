import {
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  catchError,
  switchMap,
  throwError,
  BehaviorSubject,
  filter,
  take
} from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { AuthStorageService } from '../services/auth-storage.service';

let isRefreshing = false;
const refreshSubject = new BehaviorSubject<string | null>(null);

const NO_AUTH_HEADER_ROUTES = [
  '/login',
  '/auth/refresh'
];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const storage = inject(AuthStorageService);
  const router = inject(Router);

  const token = storage.getToken();

  const shouldAttachToken =
    token &&
    !NO_AUTH_HEADER_ROUTES.some(url => req.url.includes(url));

  // REQUEST BASE (SIEMPRE CON CREDENTIALS)
  const authReq = shouldAttachToken
    ? req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
        withCredentials: true
      })
    : req.clone({ withCredentials: true });

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status !== 401) {
        return throwError(() => error);
      }

      // No refresh para endpoints de auth
      if (NO_AUTH_HEADER_ROUTES.some(url => req.url.includes(url))) {
        storage.clear();
        router.navigate(['auth/login']);
        return throwError(() => error);
      }

      // No hay token → logout local
      if (!token) {
        storage.clear();
        router.navigate(['auth/login']);
        return throwError(() => error);
      }

      //Refresh en curso
      if (isRefreshing) {
        return refreshSubject.pipe(
          filter(t => t !== null),
          take(1),
          switchMap(t =>
            next(
              req.clone({
                setHeaders: { Authorization: `Bearer ${t}` },
                withCredentials: true
              })
            )
          )
        );
      }

      // Iniciar refresh
      isRefreshing = true;
      refreshSubject.next(null);

      return authService.refresh().pipe(
        switchMap(res => {
          isRefreshing = false;

          storage.setToken(res.access_token);
          refreshSubject.next(res.access_token);

          return next(
            req.clone({
              setHeaders: {
                Authorization: `Bearer ${res.access_token}`
              },
              withCredentials: true
            })
          );
        }),
        catchError(() => {
          isRefreshing = false;
          storage.clear();
          router.navigate(['auth/login']);
          return throwError(() => error);
        })
      );
    })
  );
};
