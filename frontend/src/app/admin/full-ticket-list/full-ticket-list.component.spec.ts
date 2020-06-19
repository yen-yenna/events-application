import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTicketListComponent } from './full-ticket-list.component';

describe('TicketListComponent', () => {
  let component: FullTicketListComponent;
  let fixture: ComponentFixture<FullTicketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullTicketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
