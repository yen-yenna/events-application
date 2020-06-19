import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Ticket} from '../Ticket';
import {Observable} from 'rxjs';
import {TicketService} from '../ticket.service';
import {Router} from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {UserService} from '../../User/user.service';
import {EventService} from '../../event/event.service';
import {HallService} from '../../hall/hall.service';
import {Localization} from '../../localization/localization';
import {LocalizationService} from '../../localization/localization.service';
import {User} from '../../User/User';
import {Eevent} from '../../event/event';
import {__await} from 'tslib';
import {PdfService} from '../pdf.service';
import {Hall} from '../../hall/hall';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  interval: any;
  user: User;
  event: Eevent;
  ticket: Ticket;
  userName: string;
  tickets: Observable<Ticket[]>;
  constructor(private ticketService: TicketService,
              private router: Router, private userService: UserService, private eventService: EventService,
              private hallService: HallService, private localizationService: LocalizationService,
              private pdfService: PdfService) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName');
    this.reloadData();
    this.findUser();
  }
  reloadData() {
    this.ticketService.getTicketListByUser(this.userName).subscribe(ticket => {
      console.log(ticket);
    });
    this.tickets = this.ticketService.getTicketListByUser(this.userName);
  }
  findEvent(eventId: number) {
    return this.eventService.getEvent(eventId).subscribe(
      (eevent: Eevent) => this.event = eevent
    );
  }
  findUser() {
    this.userService.getUser(this.userName).subscribe(
      (user: User) => {
        this.user = user;
        console.log(user);
      },
      error1 => console.log(error1)
    );
  }

  generatePdf(id: number) {
    this.ticketService.getTicketById(id).subscribe(
      (ticket: Ticket) => {
        this.findEvent(ticket.eventId);
        // sessionStorage.setItem('ticket', JSON.stringify(ticket));
        this.pdfService.generatePdf(ticket, this.user, this.event);
      },
      error1 => console.log(error1)
    );
  }
}
