import { Register } from './../data/register';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data/data.service';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  originalRegister: Register = {
    username: null,
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    job: null,
    location: null,
    industry: null,
    company: null
};
register: Register = {...this.originalRegister};
postError = false;
postErrorMsg = '';
constructor(private router: Router, private dataservice: DataService) {
 }

  ngOnInit(): void {
  }

  onHttpError(errorResponse: any): void {
    console.log('error', errorResponse);
    this.postError = true;
    this.postErrorMsg = 'Registartion Failed';
}
  // tslint:disable-next-line: typedef
  onsubmit(form: NgForm) {
    if (form.valid) {
      console.log('in on submit', form.valid);
      this.dataservice.register(this.register).subscribe(
        result => {
          this.dataservice.currentUser = result;
          console.log(this.dataservice.isLoggedIn);
          this.router.navigate(['login']);
        } ,
        error => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMsg = 'Registration Incomplete';
    }
  }

}
