/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import {EventService} from '../../event/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Eevent} from '../../event/event';
import {EventType} from '../eventType';
import {EventTypeService} from '../event-type.service';

@Component({
  selector: 'app-event-list-by-type',
  templateUrl: './event-list-by-type.component.html',
  styleUrls: ['./event-list-by-type.component.css']
})
export class EventListByTypeComponent implements OnInit {

  eevent: Observable<Eevent[]>;
  eeventType: EventType;
  evenTypeId: number;
  constructor(private eventServive: EventService, private route: ActivatedRoute,
              private router: Router, private eventTypeService: EventTypeService) { }

  ngOnInit() {
  this.evenTypeId = this.route.snapshot.params['eventTypeId'];
  this.reloadData();
  }
  reloadData(){
    this.eventServive.getEventListByType(this.evenTypeId).subscribe( wydarzenie => {
      console.log(wydarzenie);
    });
    this.eevent=this.eventServive.getEventListByType(this.evenTypeId);
  }

  /*updateEvent(eventId: number) {
    this.router.navigate(['/updateEvent', eventId]);
  }
  deleteEvent(id: number) {
    this.eventServive.deleteEvent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }*/
  eventDetails(eventId: number) {
    this.router.navigate(['/eventDetail',eventId ]);
  }

}
