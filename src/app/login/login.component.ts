import { DataService } from './../data/data.service';
import { Login } from './../data/login';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  originallogin: Login = {
      username: null,
      password: null
  };
  login: Login = {...this.originallogin};
  postError = false;
  postErrorMsg = '';
  constructor(private router: Router, private dataservice: DataService) {

   }

ngOnInit(): void {
}
onHttpError(errorResponse: any): void {
    console.log('error', errorResponse);
    this.postError = true;
    this.postErrorMsg = 'login failed';
}
// tslint:disable-next-line: typedef
onsubmit(form: NgForm) {
  if (form.valid) {
    console.log('in on submit', form.valid);
    this.dataservice.loginFun(this.login).subscribe(
      result => this.router.navigate(['welcome']),
      error => this.onHttpError(error)
    );
  }
}

}
