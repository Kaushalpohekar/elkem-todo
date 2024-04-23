import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessDailogComponent } from './sucess-dailog.component';

describe('SucessDailogComponent', () => {
  let component: SucessDailogComponent;
  let fixture: ComponentFixture<SucessDailogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucessDailogComponent]
    });
    fixture = TestBed.createComponent(SucessDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
