import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBasedComponent } from './time-based.component';

describe('TimeBasedComponent', () => {
  let component: TimeBasedComponent;
  let fixture: ComponentFixture<TimeBasedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeBasedComponent]
    });
    fixture = TestBed.createComponent(TimeBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
