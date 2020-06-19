import { Component, OnInit } from '@angular/core';
import {UserService} from '../User/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../User/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName: string;
  user: User;
  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
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
    // this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/events']);
  }
  onClick() {
    this.router.navigate(['users/profile/password/', this.userName]);
  }

}
