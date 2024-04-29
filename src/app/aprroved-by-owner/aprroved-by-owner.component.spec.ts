import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprrovedByOwnerComponent } from './aprroved-by-owner.component';

describe('AprrovedByOwnerComponent', () => {
  let component: AprrovedByOwnerComponent;
  let fixture: ComponentFixture<AprrovedByOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprrovedByOwnerComponent]
    });
    fixture = TestBed.createComponent(AprrovedByOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
