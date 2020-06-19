import { Component, OnInit } from '@angular/core';
import {EventType} from '../eventType';
import {EventTypeService} from '../event-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-event-type',
  templateUrl: './create-event-type.component.html',
  styleUrls: ['./create-event-type.component.css']
})
export class CreateEventTypeComponent implements OnInit {

  role: string;
  eventType: EventType = new EventType();
  constructor(private eventTypeService: EventTypeService, private router: Router) { }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    if (this.role !== 'admin' && this.role !== 'employee' ) {this.router.navigate(['/']); }
  }
  save() {
    this.eventTypeService.createEventType(this.eventType).subscribe(
      eventtype => console.log(eventtype),
      error1 => console.log(error1));
    console.log(this.eventType);
    this.eventType = new EventType();
    this.gotoList();
  }
  onSubmit() {
    this.save();
  }
  gotoList() {
    this.router.navigate(['/eventType']);
  }

}
