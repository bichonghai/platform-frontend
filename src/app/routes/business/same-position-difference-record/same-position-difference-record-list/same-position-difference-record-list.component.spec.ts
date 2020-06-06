import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamePositionDifferenceRecordListComponent } from './same-position-difference-record-list.component';

describe('SamePositionDifferenceRecordListComponent', () => {
  let component: SamePositionDifferenceRecordListComponent;
  let fixture: ComponentFixture<SamePositionDifferenceRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamePositionDifferenceRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamePositionDifferenceRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
