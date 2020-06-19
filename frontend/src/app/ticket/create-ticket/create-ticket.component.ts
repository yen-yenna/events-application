/* tslint:disable */
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TicketService} from '../ticket.service';
import {Ticket} from '../Ticket';
import {Observable} from 'rxjs';
import {EventService} from '../../event/event.service';
import {Eevent} from '../../event/event';
import {LocalizationService} from '../../localization/localization.service';
import {HallService} from '../../hall/hall.service';
import {Hall} from '../../hall/hall';
import {Localization} from '../../localization/localization';
import {__await} from 'tslib';
import {PaymentsService} from '../../payment/payments.service';
import {Router} from '@angular/router';
import {Reserved} from '../Reserved';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit{

  role: string;
  rows: number[] = [];
  cols: number[]  = [];
  n: number;
  reserved: string[] = [];
  selected: string[] = [];
  eventIdd: number;
  hallId: any;
  eevent: Eevent;
  res: string;
  hall: Hall = new Hall();
  tickets: Observable<Ticket[]>;
  constructor(private ticketService: TicketService, private router: Router,
              private eventService: EventService, private localizationService: LocalizationService,
              private hallService: HallService, private paymentService: PaymentsService) {
  }

    ngOnInit(): void {
    this.eventIdd = +sessionStorage.getItem('eventId');
      this.role = sessionStorage.getItem('role');
      if (this.role !== 'user' ) {this.router.navigate(['/']); }
      this.findEventAndHall(this.eventIdd);
      this.paymentService.loadStripe();
   }
   findReserved(seat: string) {
    console.log('seat: ' + seat);
    this.ticketService.isSeatOccupied(this.eventIdd, seat).subscribe(
      (rese: Reserved) => {
        console.log(rese);
        this.res = rese.isOccupied;
      })
  }
   findEventAndHall(id: any) {
     this.eventService.getEvent(id).subscribe(
       ( eevent : Eevent) => {
         console.log(eevent);
         this.eevent = eevent;
         this.hallId = eevent.hallId;
         this.hallService.getHallById(eevent.hallId).subscribe(
           (hall: Hall) => {
             this.hall = hall;
           }
         );
       }, error1 => console.log(error1)
     )
   }

  addPlaces(){
    this.n = this.hall.rows;
    console.log(this.n);
    while (this.rows.length +1 <= this.n){
      for (let i = 0; i < this.n; i++) {
        this.rows.push(i);
      }}
    while (this.cols.length +1 <= this.hall.columns){
      for (let j= 0; j< this.hall.columns; j++) {
        this.cols.push(j);
      }}
  }
  showHall() {
    this.addPlaces();
    document.getElementById('hallSeats').style.display = "block";
  }
  getStatus (seat: string) {
    for(let i in this.reserved){
      if(this[i] === seat) {return 'reserved';}
    }
     if(this.reserved.indexOf(seat) !== -1 ) {
      return 'reserved';}
     else if(this.selected.indexOf(seat) !== -1) {
      return 'selected';
    }
  }
  clearSelected = function() {
    this['selected'] = [];
  };

  checkIfReserved (seat: string) {
    this.findReserved(seat);
    let index = this['selected'].indexOf(seat);
    if(this.res === 'TRUE')
    {
      this['reserved'].push(seat);
    } else this['selected'].push(seat);
    if (index !== -1) {
      this['selected'].splice(index, 1)}
    if (this['selected'].length > 3) {
      this['selected'].splice(index, 1);
      alert("Można zakupić maksymalnie 3 bilety");
    }
  }

 async onSubmit() {
  console.log(this['reserved'].indexOf(this.selected[0]) === -1);
  this.paymentService.pay(this.selected.length * this.eevent.ticketPrice);
    await this.delay(25000);
    this.paymentService.toBackend(this.selected.length * this.eevent.ticketPrice);
      const ticket = new Ticket(
        +sessionStorage.getItem('eventId'),
        sessionStorage.getItem('userName'),
        null,
        this.selected.toString()
      );
      this.ticketService.createTicket(ticket).subscribe(
        error => console.log(error));

      this.reserved.push(ticket.seatInARow);

  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
 
