import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentRecordDetailComponent } from './instrument-record-detail.component';

describe('InstrumentRecordDetailComponent', () => {
  let component: InstrumentRecordDetailComponent;
  let fixture: ComponentFixture<InstrumentRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
