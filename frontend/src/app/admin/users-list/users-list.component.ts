import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Eevent} from '../../event/event';
import {User} from '../../User/User';
import {AdminService} from '../admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  ad = 'admin';
  role: string;
  users: Observable<User[]>;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    if (this.role !== 'admin') { this.router.navigate(['/']); }
    this.reloadData();

  }
  reloadData() {
    this.adminService.getAllUsers().subscribe(userr => {console.log(userr);
    });
    this.users = this.adminService.getAllUsers();
  }
  deleteUser(userName: string) {
  this.adminService.deleteUsers(userName).subscribe( userr => {
    console.log(userr);
    this.reloadData();
  },
    error1 => console.log(error1));
  }
  updateUser(userName: string) {
    this.router.navigate(['/admin/users/profile/' + userName]);
  }
}
