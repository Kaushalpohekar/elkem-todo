import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeByUserComponent } from './time-by-user.component';

describe('TimeByUserComponent', () => {
  let component: TimeByUserComponent;
  let fixture: ComponentFixture<TimeByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeByUserComponent]
    });
    fixture = TestBed.createComponent(TimeByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
