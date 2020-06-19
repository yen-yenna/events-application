import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { UpdateEventComponent } from './event/update-event/update-event.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { EventTypeListComponent } from './eventType/event-type-list/event-type-list.component';
import { EventListByTypeComponent } from './eventType/event-list-by-type/event-list-by-type.component';
import { RegisterComponent } from './registration/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart/cart.component';
import { CreateTicketComponent } from './ticket/create-ticket/create-ticket.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { SearchComponent } from './searching/search/search.component';
import { PaymentsComponent } from './payment/payments/payments.component';
import { AdminComponent } from './admin/admin/admin.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import {FullTicketListComponent} from './admin/full-ticket-list/full-ticket-list.component';
import {NgbCarousel, NgbModule} from '@ng-bootstrap/ng-bootstrap';

// MDB Angular Pro
import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md';
import { CreateEventTypeComponent } from './eventType/create-event-type/create-event-type.component';
import { PdfComponent } from './ticket/pdf/pdf.component';
import {MatSelectModule} from '@angular/material/typings/select';
import {MatDatepickerModule} from '@angular/material/typings/datepicker';
import {PaymentsService} from './payment/payments.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EventListComponent,
    EventDetailsComponent,
    UpdateEventComponent,
    CreateEventComponent,
    EventTypeListComponent,
    EventListByTypeComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    CreateTicketComponent,
    TicketListComponent,
    ProfileComponent,
    PasswordComponent,
    SearchComponent,
    PaymentsComponent,
    AdminComponent,
    UsersListComponent,
    UpdateUserComponent,
    FullTicketListComponent,
    CreateEventTypeComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    ButtonsModule,
    WavesModule,
    CardsModule
  ],
  providers: [PaymentsService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
