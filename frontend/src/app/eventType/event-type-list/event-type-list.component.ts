import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {EventType} from '../eventType';
import {EventTypeService} from '../event-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-type-list',
  templateUrl: './event-type-list.component.html',
  styleUrls: ['./event-type-list.component.css']
})
export class EventTypeListComponent implements OnInit {

  eventType: Observable<EventType[]>;
  constructor(private eventTypeservice: EventTypeService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.eventTypeservice.getEventTypeList().subscribe(
      typ => {console.log(typ); });
    this.eventType = this.eventTypeservice.getEventTypeList();
  }
  eventList(eventTypeId: number) {
    this.router.navigate(['/event/eventType/', eventTypeId]);
  }

}
