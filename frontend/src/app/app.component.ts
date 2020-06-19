import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Event App';
  ad: string;
  em: string;
  us: string;
  constructor(private router: Router) {}
  userName;
  role;
  search = new FormControl('');
  public isCollapsed = false;

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName');
    this.role = sessionStorage.getItem('role');
    if (this.role === 'admin') {
      this.ad = 'admin';
    } else if (this.role === 'employee') {
      this.em = 'employee';
    } else { this.us = 'user'; }
  }

  logout() {
    this.userName = null;
    this.role = null;
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  onSubmit() {
    console.log(this.search.value);
    this.router.navigate(['/search/' + this.search.value]);
  }
}
