import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentRecordEditComponent } from './instrument-record-edit.component';

describe('InstrumentRecordEditComponent', () => {
  let component: InstrumentRecordEditComponent;
  let fixture: ComponentFixture<InstrumentRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
