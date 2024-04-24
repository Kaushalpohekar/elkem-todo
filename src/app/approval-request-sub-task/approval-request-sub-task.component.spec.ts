import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRequestSubTaskComponent } from './approval-request-sub-task.component';

describe('ApprovalRequestSubTaskComponent', () => {
  let component: ApprovalRequestSubTaskComponent;
  let fixture: ComponentFixture<ApprovalRequestSubTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovalRequestSubTaskComponent]
    });
    fixture = TestBed.createComponent(ApprovalRequestSubTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
