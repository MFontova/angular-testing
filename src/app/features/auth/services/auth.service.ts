import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "https://devdata.synergie.es/api/v1"

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/app_login`, {email, password})
  }

  logoutUser(): void {
    localStorage.removeItem('jwt')
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('jwt')
    const helper = new JwtHelperService()
    const isExpired = helper.isTokenExpired(token)
    isExpired && localStorage.removeItem('jwt')
    return !isExpired
  }
}
