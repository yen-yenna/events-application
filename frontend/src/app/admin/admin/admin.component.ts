import { Component, OnInit } from '@angular/core';
import {User} from '../../User/User';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../User/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  userName: string;
  user: User;
  role: string;
  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    if (this.role !== 'admin') {this.router.navigate(['/']); }
    this.userService.getUser(sessionStorage.getItem('userName')).subscribe((user: User) => {
      console.log(user);
      this.userName = sessionStorage.getItem('userName');
      // this.route.snapshot.['userName'];
      this.user = user;
    });
  }
  onSubmit() {
    console.log('Changed');
    console.log(this.user);
    this.userService.updateUser(this.userName, this.user).subscribe(error => console.log(error));

  }
  gotoList() {
    this.router.navigate(['/admin/tickets']);
  }
  onClick() {
    this.router.navigate(['users/profile/password/', this.userName]);
  }
  userList() {
    this.router.navigate(['admin/users']);
  }
}
