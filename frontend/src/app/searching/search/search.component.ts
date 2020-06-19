import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Eevent} from '../../event/event';
import {EventService} from '../../event/event.service';
import {SearchService} from '../search.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  word: string;
  eevents: Observable<Eevent[]>;
  constructor(private searchService: SearchService, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.word = params.get('word');
    });
    console.log(this.word);
    this.reloadData();
  }

  reloadData() {
    this.searchService.getEventsContaining(this.word).subscribe(event => {
      console.log(event);
    });
    this.eevents = this.searchService.getEventsContaining(this.word);
  }
  eventDetails(eventId: number) {
    this.router.navigate(['/eventDetail', eventId]);
  }
}
