import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteApprovalComponent } from './complete-approval.component';

describe('CompleteApprovalComponent', () => {
  let component: CompleteApprovalComponent;
  let fixture: ComponentFixture<CompleteApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteApprovalComponent]
    });
    fixture = TestBed.createComponent(CompleteApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
