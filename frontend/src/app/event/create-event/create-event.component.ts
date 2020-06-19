import { Component, OnInit } from '@angular/core';
import {Eevent} from '../event';
import {EventService} from '../event.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  role: string;
  eevent: Eevent = new Eevent();
  constructor(private eventService: EventService,
              private router: Router) {}

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    if (this.role !== 'employee' && this.role !== 'admin') { this.router.navigate(['/']); }
  }

  save() {
    this.eventService.createEvent(this.eevent)
      .subscribe(data => console.log(data), error => console.log(error));
    console.log(this.eevent);
    this.eevent = new Eevent();
    this.gotoList();
  }
  onSubmit() {
    this.save();
  }
  gotoList() {
    this.router.navigate(['/events']);
  }
}
