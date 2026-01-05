import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user/user.model';

interface UserApiResponse {
  success: boolean;
  message: string;
  status: number;
  data: User[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = `${environment.apiUrl}/usuario/getAllUsers`;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserApiResponse> {
    return this.http.get<UserApiResponse>(this.apiUrl);
  }
}
