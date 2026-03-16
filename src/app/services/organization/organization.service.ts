import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Organization } from '../../models/organization/organization.model';


@Injectable({
    providedIn: 'root'
})
export class OrganizationService {
    private readonly apiUrl = `${environment.apiUrl}/organization/getAllOrganizations`;
    constructor(private http: HttpClient) {}
    getAllOrganizations(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
}