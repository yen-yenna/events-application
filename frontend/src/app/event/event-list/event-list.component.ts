import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {EventService} from '../event.service';
import {Router} from '@angular/router';
import {Eevent} from '../event';
import {Ticket} from '../../ticket/Ticket';
import {User} from '../../User/User';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  role: string;
  ad: string;
  eevents: Observable<Eevent[]>;
  constructor(private eventService: EventService,
              private router: Router) { }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    if (this.role !== 'admin' && this.role !== 'employee' ) {this.router.navigate(['/']); }
    this.reloadData();
  }
  reloadData() {
    this.eventService.getEventList().subscribe(wydarzenie => {
      console.log(wydarzenie);
    });
    this.eevents = this.eventService.getEventList();
  }
  updateEvent(id: number) {
    this.router.navigate(['/updateEvent', id]);
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  createTicket(id: number) {
    sessionStorage.setItem('eventId', id.toString());
    this.router.navigate(['/createTicket']);
  }
  eventDetail(id: number) {
    this.router.navigate(['/eventDetail', id]);
  }
  addEvent() {
    this.router.navigate(['/addEvent']);
  }
}
