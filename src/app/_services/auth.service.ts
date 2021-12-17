import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = 'http://localhost:8080/api/users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/login`, {
      email,
      password
    }, httpOptions);
  }

  register(firstName: string,lastName: string, email: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users` , {
      firstName,
      lastName,
      email,
      password
    }, httpOptions);
  }
}
