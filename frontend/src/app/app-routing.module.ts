import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import {EventListComponent} from './event/event-list/event-list.component';
import {CreateEventComponent} from './event/create-event/create-event.component';
import {UpdateEventComponent} from './event/update-event/update-event.component';
import {EventTypeListComponent} from './eventType/event-type-list/event-type-list.component';
import {EventListByTypeComponent} from './eventType/event-list-by-type/event-list-by-type.component';
import {RegisterComponent} from './registration/register/register.component';
import {LoginComponent} from './login/login.component';
import {CreateTicketComponent} from './ticket/create-ticket/create-ticket.component';
import {EventDetailsComponent} from './event/event-details/event-details.component';
import {TicketListComponent} from './ticket/ticket-list/ticket-list.component';
import {ProfileComponent} from './profile/profile.component';
import {PasswordComponent} from './password/password.component';
import {SearchComponent} from './searching/search/search.component';
import {PaymentsComponent} from './payment/payments/payments.component';
import {UsersListComponent} from './admin/users-list/users-list.component';
import {FullTicketListComponent} from './admin/full-ticket-list/full-ticket-list.component';
import {UpdateUserComponent} from './admin/update-user/update-user.component';
import {CreateEventTypeComponent} from './eventType/create-event-type/create-event-type.component';
import {PdfComponent} from './ticket/pdf/pdf.component';
import {AdminComponent} from './admin/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'cards', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'regulamin', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'events', component: EventListComponent },
  { path: 'addEvent', component: CreateEventComponent },
  { path: 'updateEvent/:id', component: UpdateEventComponent },
  { path: 'eventType', component: EventTypeListComponent },
  { path: 'event/eventType/:eventTypeId', component: EventListByTypeComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'createTicket', component: CreateTicketComponent},
  { path: 'eventDetail/:id', component: EventDetailsComponent},
  { path: 'ticketList', component: TicketListComponent},
  { path: 'users/profile/:userName', component: ProfileComponent},
  { path: 'users/profile/password/:userName', component: PasswordComponent},
  { path: 'search/:word', component: SearchComponent},
  { path: 'admin/users', component: UsersListComponent},
  { path: 'admin/tickets', component: FullTicketListComponent},
  { path: 'admin/users/profile/:userName', component: UpdateUserComponent},
  { path: 'addEventType', component: CreateEventTypeComponent},
  { path: 'charge', component: PaymentsComponent},
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
