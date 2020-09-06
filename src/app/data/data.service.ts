import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Register } from './register';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser: User;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
  get username(): string {
    if (this.isLoggedIn) {
      return this.currentUser.firstname;
    } else {
      return '';
    }
  }

  constructor(private http: HttpClient) {
   }
  loginFun(login: Login): Observable<any> {
    return this.http.post('http://localhost:8080/login', login);
  }
  register(register: Register): Observable<any> {
    return this.http.post('http://localhost:8080/register', register);
  }
  logout(): void {
    this.currentUser = null;
  }
}
