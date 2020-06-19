/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../register.service';
import {User} from '../../User/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  constructor(private registerService: RegisterService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
   this.registerForm = this.createFormGroup();
  }

  onSubmit(formValues) {
    const user1 = new User(
      formValues.userName,
      formValues.firstName,
      formValues.surname,
      formValues.password,
      formValues.email,
      'user'
      );
    if(this.registerForm.valid) {
      this.registerService.register(user1).subscribe(
        response => {
          console.log(response.userName);
        }
      );
      alert("Konto pomyślnie utworzone")
    } else alert("Niepoprawne dane");
      }
  createFormGroup() {
    return this.formBuilder.group({
      userName: new FormControl(),
      password: new FormControl('',[
        Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]),
      firstName: new FormControl(),
      surname: new FormControl(),
      email: new FormControl('',
        [Validators.pattern(/^[.a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+$/)])
    });
  }
  getEmail() {
    return this.registerForm.get("email");
  }
  getUserPassword() {
    return this.registerForm.get("password");
  }
}
