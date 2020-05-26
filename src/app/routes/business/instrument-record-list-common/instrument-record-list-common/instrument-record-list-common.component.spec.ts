import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentRecordListCommonComponent } from './instrument-record-list-common.component';

describe('InstrumentRecordListCommonComponent', () => {
  let component: InstrumentRecordListCommonComponent;
  let fixture: ComponentFixture<InstrumentRecordListCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentRecordListCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentRecordListCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
