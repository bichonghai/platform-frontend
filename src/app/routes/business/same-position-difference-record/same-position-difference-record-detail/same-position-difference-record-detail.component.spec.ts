import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamePositionDifferenceRecordDetailComponent } from './same-position-difference-record-detail.component';

describe('SamePositionDifferenceRecordDetailComponent', () => {
  let component: SamePositionDifferenceRecordDetailComponent;
  let fixture: ComponentFixture<SamePositionDifferenceRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamePositionDifferenceRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamePositionDifferenceRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
