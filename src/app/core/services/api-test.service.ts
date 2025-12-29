import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiTestService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  ping() {
    return this.http.get(`${this.baseUrl}/ping`);
  }
}
