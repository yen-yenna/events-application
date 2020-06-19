/* tslint:disable */

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../event.service';
import {Eevent} from '../event';


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  id: number;
  eevent: Eevent ;
  role: string;
  constructor(private route: ActivatedRoute, private eventService: EventService,
              private router: Router) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.role = sessionStorage.getItem('role');
    if (this.role !== 'admin' && this.role !== 'employee' ) {this.router.navigate(['/']); }
    this.currentEvent();
  }

currentEvent() {
  this.eventService.getEvent(this.id).subscribe(event => this.eevent = event,
      error => console.log(error));
}
onSubmit() {
  console.log('Changed');
  console.log(this.eevent);
  this.eventService.updateEvent(this.id, this.eevent).subscribe(error => console.log(error));
  this.gotoList();
}
gotoList() {
  this.router.navigate(['/events']);
}
}
