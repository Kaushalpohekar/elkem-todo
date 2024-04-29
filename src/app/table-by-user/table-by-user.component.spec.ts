import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableByUserComponent } from './table-by-user.component';

describe('TableByUserComponent', () => {
  let component: TableByUserComponent;
  let fixture: ComponentFixture<TableByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableByUserComponent]
    });
    fixture = TestBed.createComponent(TableByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
