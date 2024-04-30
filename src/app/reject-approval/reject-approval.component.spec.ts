import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectApprovalComponent } from './reject-approval.component';

describe('RejectApprovalComponent', () => {
  let component: RejectApprovalComponent;
  let fixture: ComponentFixture<RejectApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectApprovalComponent]
    });
    fixture = TestBed.createComponent(RejectApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
