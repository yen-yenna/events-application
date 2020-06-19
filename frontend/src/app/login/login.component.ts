import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {RegisterService} from '../registration/register.service';
import {Router} from '@angular/router';
import {User} from '../User/User';
import {Login} from './Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private registerService: RegisterService,
              private formBuilder: FormBuilder, private router: Router) {  }

  ngOnInit() {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup() {
    return this.formBuilder.group({
      userName: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(formValues) {
    console.log(formValues.userName);
    console.log(formValues.password);

    const loginRequest = new Login(
      formValues.userName,
      formValues.password);

    this.registerService.login(loginRequest).subscribe(
      (response: User) => {
        sessionStorage.setItem('userName', response.userName);
        sessionStorage.setItem('role', response.role);
        window.location.reload();
        alert('Logowanie poprawne');
      },
      error => {
        console.log('Niepoprawne dane logowania');
        alert('Niepoprawne dane logowania');
      }
    );
    this.router.navigate(['/']);
  }
}
/*
<div class="container">
  <h2 class="title"> Login:  </h2>
  <br>


<form class="form-container"  [formGroup]="loginForm" (ngSubmit)="onSubmit(loginForm.value)" autocomplete="off" novalidate >

  <mat-form-field>
    <input matInput placeholder="{{'username'}}" formControlName="userName" required>
  </mat-form-field>
  <mat-form-field>
    <input matInput type="password" placeholder="{{'password'}}" formControlName="password" required >
  </mat-form-field>
  <button class="btn btn-default" mat-button type="submit">Log In</button>
</form>
</div>
--- css

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-color: coral;
}

.form-container > * {
  width: 50%;
}
.container{
  text-align: center;
  position: center;
}
.title{
  font-style: italic;

}

 */
/*

<body>
<div class="container" [formGroup]="loginForm" (ngSubmit)="onSubmit(loginForm.value)">
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card card-signin my-5">
        <div class="card-body">
          <h5 class="card-title text-center">Sign In</h5>
          <form class="form-signin">
            <div class="form-label-group">
              <input type="username" id="username" class="form-control" placeholder="{{'username'}}" required autofocus>
              <label >username</label>
            </div>

            <div class="form-label-group">
              <input type="password" id="inputPassword" class="form-control" placeholder="{{'password'}}" required>
              <label for="inputPassword">Password</label>
            </div>

            <div class="custom-control custom-checkbox mb-3">
              <input type="checkbox" class="custom-control-input" id="customCheck1">
              <label class="custom-control-label" for="customCheck1">Remember password</label>
            </div>
            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</body>

 */
