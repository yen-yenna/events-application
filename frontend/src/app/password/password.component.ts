import { Component, OnInit } from '@angular/core';
import {UserService} from '../User/user.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {User} from '../User/User';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  user: User;
  passwordForm;
  userName: string;
  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName');
    this.userService.getUser(sessionStorage.getItem('userName')).subscribe((user: User) => {
      console.log(user);
      this.user = user; });
    console.log(this.user);
    console.log(this.userName);
  }
  onSubmit() {
    console.log('Changed');
    console.log(this.user);
    this.userService.updatePassword(this.userName, this.passwordForm.value.oldPassword, this.passwordForm.value.newPassword)
      .subscribe(error => console.log(error));
    console.log(this.userName);
    console.log(this.user);
  }

}
