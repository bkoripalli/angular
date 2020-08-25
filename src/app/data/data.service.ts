import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  loginFun(login: Login): Observable<any> {
    return this.http.post('https://putsreq.com/FPBMDXxxLdN7bzz0Y7sk', login);
  }
}
