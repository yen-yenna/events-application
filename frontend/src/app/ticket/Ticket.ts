export class Ticket {
  ticketId: number;
  eventId: number;
  userName: string;
  buyDate: any;
  // noOfColumn: number;
  seatInARow: string;

  constructor(eventId: number, userName: string, buyDate: Date, seatInARow: string) {
    this.eventId = eventId;
    this.userName = userName;
    this.buyDate = buyDate;
    // this.noOfColumn = noOfColumn;
    this.seatInARow = seatInARow;
  }

}
