import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentRecordListComponent } from './instrument-record-list.component';

describe('InstrumentRecordListComponent', () => {
  let component: InstrumentRecordListComponent;
  let fixture: ComponentFixture<InstrumentRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
