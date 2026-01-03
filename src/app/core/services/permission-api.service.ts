import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PermissionApiService {

  private url = environment.apiUrl + '/permission/view';

  constructor(private http: HttpClient) {}

  getMyPermissions() {
    return this.http.get<any>(this.url);
  }
}
