/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import {Eevent} from '../event';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  role: string;
  us: string;
  id: number;
  concert: string;
  time: any;
  eevent: Eevent = new Eevent();
  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private router: Router) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.currentEvent();

    this.role = sessionStorage.getItem('role');
    if (this.role === 'user' ) { this.us = 'user'; }
    if (this.eevent.eventId == 1) {this.concert='concert'}
  }

  currentEvent() {
    this.eventService.getEvent(this.id).subscribe((event: Eevent) =>
    {this.eevent = event;
      let splittedTime = event.time.split(":");
      this.time = splittedTime.slice(0,-1).join(':');
    },
      error => console.log(error));
  }

  createTicket(id: number) {
    sessionStorage.setItem('eventId', id.toString());
    this.router.navigate(['/createTicket']);
  }

}
