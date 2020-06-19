import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Ticket} from '../../ticket/Ticket';
import {Router} from '@angular/router';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './full-ticket-list.component.html',
  styleUrls: ['./full-ticket-list.component.css']
})
export class FullTicketListComponent implements OnInit {

  userName: string;
  tickets: Observable<Ticket[]>;
  role: string;
  constructor(private adminService: AdminService,
              private router: Router) { }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    if (this.role !== 'admin') { this.router.navigate(['/']); }
    this.reloadData();
  }
  reloadData() {
    this.adminService.getAllTickets().subscribe(ticket => {
      console.log(ticket);
    });
    this.tickets = this.adminService.getAllTickets();
  }
}
