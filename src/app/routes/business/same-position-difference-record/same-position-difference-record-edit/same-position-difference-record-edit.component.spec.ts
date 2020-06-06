import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamePositionDifferenceRecordEditComponent } from './same-position-difference-record-edit.component';

describe('SamePositionDifferenceRecordEditComponent', () => {
  let component: SamePositionDifferenceRecordEditComponent;
  let fixture: ComponentFixture<SamePositionDifferenceRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamePositionDifferenceRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamePositionDifferenceRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
