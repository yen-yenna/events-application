import { Injectable } from '@angular/core';
import {Ticket} from './Ticket';
import {User} from '../User/User';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {Eevent} from '../event/event';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor() { }

  definitionPdf(ticket: Ticket, user: User, eevent: Eevent) {
    return {
      content: [
        {
          text: 'Bilet #' + ticket.ticketId,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          text: 'Prosimy nie zapomnieć o bilecie w dniu wydarzenia.',
          style: 'header'
        },
        {
          columns: [
            [{
              text: 'Wybrane miejsce:' + ticket.seatInARow

            }],
            [{
              text: 'Data zakupu: ' + ticket.buyDate
            }],
          ],
        },
        {
          text: 'Nazwisko: ' + user.surname
        },
        {
            text: 'Data wydarzenia: ' + eevent.eventDate
        },
        {
          text: 'Imie: ' + user.firstName,
        },
        {
          columns: [
            [{
                text: 'Nazwa wydarzenia: ' + eevent.description
            }],
          ],
        },
        {
          text: 'Miasto: ' + eevent.city
        },
        { qr: ticket.eventId + ticket.ticketId + ticket.seatInARow + user.userName + user.email
            + eevent.time + eevent.eventDate}],
      styles: {
        name: {
          fontSize: 16,
          bold: true
        },
        header: {
          fontSize: 22,
          bold: true
        },
      }
    };
  }
  generatePdf(ticket: Ticket, user: User, eevent: Eevent) {
    console.log('ticket');
    console.log(ticket);
    const documentDefinition = this.definitionPdf(ticket, user, eevent);
    pdfMake.createPdf(documentDefinition).open();
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
