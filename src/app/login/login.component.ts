import { DataService } from './../data/data.service';
import { Login } from './../data/login';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


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
  constructor(private dataservice: DataService) {

   }

ngOnInit(): void {
}
onHttpError(errorResponse: any): void {
    console.log('error', errorResponse);
    this.postError = true;
    this.postErrorMsg = errorResponse.error.errorMessage;
}
// tslint:disable-next-line: typedef
onsubmit(form: NgForm) {
  if (form.valid) {
    console.log('in on submit', form.valid);
    this.dataservice.loginFun(this.login).subscribe(
      result => console.log('sucess', result),
      error => this.onHttpError(error)
    );
  }
}

}
