import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListByTypeComponent } from './event-list-by-type.component';

describe('EventListByTypeComponent', () => {
  let component: EventListByTypeComponent;
  let fixture: ComponentFixture<EventListByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
