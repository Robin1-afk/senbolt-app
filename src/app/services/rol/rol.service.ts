import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private readonly apiUrl = `${environment.apiUrl}/rol/getAllRoles`;

  constructor(private http: HttpClient) {}

  getAllRoles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getRolById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/rol/getRolId/${id}`);
  }

  getRolesObjectId(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/rol/getRolesObjectId/${id}`);
  }

  updatePermissions(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/rol/updatePermissions`, data);
  }

  registerRole(data: {
    name: string;
    description: string;
    is_active: number;
    is_system: number;
  }): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/rol/registerRol`, data);
  }
}