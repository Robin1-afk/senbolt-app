import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {
    private readonly apiUrl = `${environment.apiUrl}/subscription/getSubscriptionAll`;
    constructor(private http: HttpClient) {}
    getAllSubscriptions(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }   
}