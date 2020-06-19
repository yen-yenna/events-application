import { Component, OnInit } from '@angular/core';
import {User} from '../../User/User';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../admin.service';
import {UserService} from '../../User/user.service';
import {TicketService} from '../../ticket/ticket.service';
import {Observable} from 'rxjs';
import {TicketListComponent} from '../../ticket/ticket-list/ticket-list.component';
import {Ticket} from '../../ticket/Ticket';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  tickets: Observable<Ticket[]>
  userName: string;
  user: User;
  role: string;
  constructor(private route: ActivatedRoute, private adminService: AdminService, private ticketService: TicketService,
              private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    if (this.role !== 'admin') { this.router.navigate(['/']); }
    this.route.paramMap.subscribe(params => {
      this.userName = params.get('userName');
    });
    console.log(this.userName);
    this.userService.getUser(this.userName).subscribe((user: User) => {
      console.log(user);
      this.user = user;
    });
    this.showTickets();
  }

  showTickets() {
    this.ticketService.getTicketListByUser(this.userName).subscribe(ticket => {
      console.log(ticket);
    });
    this.tickets = this.ticketService.getTicketListByUser(this.userName);
  }
  onSubmit() {
    console.log('Changed');
    console.log(this.user);
    this.userService.updateUser(this.userName, this.user).subscribe(error => console.log(error));
    // this.gotoList();
  }

}
