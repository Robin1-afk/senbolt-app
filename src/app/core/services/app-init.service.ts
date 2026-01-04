import { Injectable } from '@angular/core';
import { PermissionApiService } from './permission-api.service';
import { PermissionService } from './permission.service';
import { AuthStorageService } from './auth-storage.service';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppInitService {

  constructor(
    private authStorage: AuthStorageService,
    private permissionApi: PermissionApiService,
    private permissionService: PermissionService
  ) {}

  async init(): Promise<void> {
    const token = this.authStorage.getToken();

    //LOG para verificar token
    console.log('[APP_INIT] token encontrado:', token);

    if (!token) {
      console.log('[APP_INIT] no hay token, no se cargan permisos');
      return;
    }

    try {
      const response = await firstValueFrom(
        this.permissionApi.getMyPermissions()
      );

      //LOG permisos crudos
    //   console.log('[APP_INIT] respuesta permisos:', response);

      this.permissionService.setPermissions(response);

    //   console.log('[APP_INIT] permisos cargados en memoria');
    } catch (error) {
    //   console.error('[APP_INIT] error cargando permisos', error);
    }
  }
}
